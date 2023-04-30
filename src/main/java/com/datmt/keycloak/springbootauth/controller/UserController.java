package com.datmt.keycloak.springbootauth.controller;


import com.datmt.keycloak.springbootauth.Entity.User;
import com.datmt.keycloak.springbootauth.config.KeycloakProvider;
import com.datmt.keycloak.springbootauth.http.requests.CreateUserRequest;
import com.datmt.keycloak.springbootauth.http.requests.LoginRequest;
import com.datmt.keycloak.springbootauth.service.KeycloakAdminClientService;
import org.keycloak.KeycloakPrincipal;
import org.keycloak.TokenVerifier;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.common.VerificationException;
import org.keycloak.representations.AccessToken;
import org.keycloak.representations.AccessTokenResponse;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.slf4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import javax.validation.constraints.NotNull;
import javax.ws.rs.BadRequestException;
import javax.ws.rs.NotFoundException;
import javax.ws.rs.core.Response;
import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")

public class UserController {
    private final KeycloakAdminClientService kcAdminClient;

    private final KeycloakProvider kcProvider;

    private static final Logger LOG = org.slf4j.LoggerFactory.getLogger(UserController.class);


    public UserController(KeycloakAdminClientService kcAdminClient, KeycloakProvider kcProvider) {
        this.kcProvider = kcProvider;
        this.kcAdminClient = kcAdminClient;
    }
	

    @PostMapping(value = "/create")
    public ResponseEntity<?> createUser(@RequestBody CreateUserRequest user) {
        Response createdResponse = kcAdminClient.createKeycloakUser(user);
        //kcAdminClient.SendSms(user.getPhonenumber(),"vous inscription a eté sauvgarder avec succes");


        return ResponseEntity.status(createdResponse.getStatus()).build();

    }


    @PutMapping("/update/{userId}")
    public ResponseEntity<?> updateUser(@PathVariable("userId") String userId, @RequestBody CreateUserRequest user) {

        //System.out.println();


            System.out.println("Updating user: " + user); // add this line
            System.out.println("Updating user with id: " + userId); // add this line
            kcAdminClient.updateKeycloakUser(userId, user);
            return ResponseEntity.ok().build();
    }


    @PostMapping("/login")
    public ResponseEntity<AccessTokenResponse> login(@NotNull @RequestBody LoginRequest loginRequest) {
        Keycloak keycloak = kcProvider.newKeycloakBuilderWithPasswordCredentials(loginRequest.getUsername(), loginRequest.getPassword()).build();

        AccessTokenResponse accessTokenResponse = null;
        try {
            accessTokenResponse = keycloak.tokenManager().getAccessToken();
            String userId = getUserIdFromToken(accessTokenResponse.getToken());
            System.out.println(userId);
            // Use userId as needed
            return ResponseEntity.status(HttpStatus.OK).body(accessTokenResponse);
        } catch (BadRequestException ex) {
            LOG.warn("invalid account. User probably hasn't verified email.", ex);
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(accessTokenResponse);
        } catch (VerificationException ex) {
            LOG.warn("invalid access token", ex);
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(accessTokenResponse);
        }
    }

   // @RolesAllowed("admin")
    @GetMapping("/getalluser")
    @CrossOrigin(origins = "http://localhost:4200")

    public ResponseEntity<List<UserRepresentation>> getAllUsers() {
       List<UserRepresentation> users = kcAdminClient.getAllUsers();
        return ResponseEntity.ok(users);
    }
    @RolesAllowed("admin")
    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable("userId") String userId) {
        kcAdminClient.deleteKeycloakUser(userId);
        return ResponseEntity.noContent().build();
    }



/*
    @GetMapping("/current-user")
    public ResponseEntity<UserRepresentation> getCurrentUser() {
        try {
            KeycloakPrincipal principal = (KeycloakPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            String userId = principal.getKeycloakSecurityContext().getToken().getSubject();
            UserRepresentation user = kcAdminClient.getUserById(userId);
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }

    }*/



    @GetMapping("/current")
    public ResponseEntity<?> getCurrentUser() {
        KeycloakPrincipal keycloakPrincipal = (KeycloakPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        AccessToken accessToken = keycloakPrincipal.getKeycloakSecurityContext().getToken();
        String userId = accessToken.getSubject();
        UserRepresentation user = kcAdminClient.getUserById(userId);
        return ResponseEntity.ok(user);
    }




    public String getUserIdFromToken(String accessToken) throws VerificationException {
        TokenVerifier<AccessToken> verifier = TokenVerifier.create(accessToken, AccessToken.class);
        AccessToken token = verifier.getToken();
        return token.getSubject();
    }

}
