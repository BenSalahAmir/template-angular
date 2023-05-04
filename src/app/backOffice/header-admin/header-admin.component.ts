import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersServiceService } from 'src/app/Service/Users/users-service.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  constructor(private service:UsersServiceService ,private router: Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  logout(): void {
    this.service.signOut();
    this.router.navigate(['/signin']);
  }

}
