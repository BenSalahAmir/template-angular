import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersServiceService } from 'src/app/Service/Users/users-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private service:UsersServiceService ,private router: Router){}

  logout(): void {
    this.service.signOut();
    this.router.navigate(['/signin']);
  }

 
}
