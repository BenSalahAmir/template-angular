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

  constructor(private yourService: UsersServiceService,private router: Router) { }

  ngOnInit(): void {
    const userId = this.yourService.getUserIdFromToken();
    console.log('User id:', userId);

  }

  onSubmit() {
    this.yourService.login(this.username, this.password).subscribe(
      (response: AccessTokenResponse) => {
        this.accessToken = response.access_token;
        localStorage.setItem('accessToken', this.accessToken);
        this.router.navigate(['/front']);
      },
      (error) => {
        console.log(error); // You can log the error for debugging purposes
        // Set an error message to display in the template
        this.errorMessage = 'Invalid username or password. Please try again.';
      }
    );
  }
  
  
  
  
}
