import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccessTokenResponse } from 'src/app/AccessTokenResponse';
import { UsersServiceService } from 'src/app/Service/Users/users-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
  accessToken!: string;
  userId:any;
  errorMessage!: string;
  userRole: string | null = null;


  constructor(private yourService: UsersServiceService,private router: Router) { }

  ngOnInit(): void {
    const userId = this.yourService.getUserIdFromToken();
    console.log('User id:', userId);

    const roleuser=this.yourService.getRoleFromToken();
    console.log('User role:', roleuser);

    //this.userRole = this.yourService.getRolesUserFromToken(); // Call the method to get the user's role
    console.log('User role:', this.userRole);
    console.log("Checking token for role...");
   
    


  }

  // onSubmit() {
  //   this.yourService.login(this.username, this.password).subscribe(
  //     (response: AccessTokenResponse) => {
  //       this.accessToken = response.access_token;
  //       localStorage.setItem('accessToken', this.accessToken);
  //       this.router.navigate(['/front']);
  //     },
  //     (error) => {
  //       console.log(error); // You can log the error for debugging purposes
  //       // Set an error message to display in the template
  //       this.errorMessage = 'Invalid username or password. Please try again.';
  //     }
  //   );
  // }
  
  onSubmit() {
    this.yourService.login(this.username, this.password).subscribe(
      (response: AccessTokenResponse) => {
        this.accessToken = response.access_token;
        localStorage.setItem('accessToken', this.accessToken);
        const role = this.yourService.getRoleFromToken(); // Get the user's role from the access token
        if (role === 'admin') {
          this.router.navigate(['/admin']); // Redirect to the "admin" page
        } else if (role === 'member') {
          this.router.navigate(['/front']); // Redirect to the "front" page
        } else {
          // Handle other roles if needed
        }
      },
      (error) => {
        console.log(error); // You can log the error for debugging purposes
        // Set an error message to display in the template
        this.errorMessage = 'Invalid username or password. Please try again.';
      }
    );
  }
  
  
  
}
