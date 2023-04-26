import { Component } from '@angular/core';
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

  constructor(private yourService: UsersServiceService) { }

  ngOnInit(): void {
    const userId = this.yourService.getUserIdFromToken();
    console.log('User id:', userId);

  }

  onSubmit() {
    this.yourService.login(this.username, this.password)
      .subscribe((response: AccessTokenResponse) => {
        this.accessToken = response.access_token;
        localStorage.setItem('accessToken', this.accessToken);
      });

  }
  
  
}
