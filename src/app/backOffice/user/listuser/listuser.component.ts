import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UsersServiceService } from 'src/app/Service/Users/users-service.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent {
  users!:any[];
  constructor(private service:UsersServiceService,private router:Router){}

  ngOnInit(): void {
    this.getUsers();

}
getUsers(): void {
  this.service.getUsers().subscribe(users => {
    console.log(users);
    this.users = users;
  });
}


onDelete(userId: string): void {
  this.service.deleteUser(userId).subscribe(() => {
    this.getUsers();
    console.log(`User with id ${userId} deleted`);
  });
}
ban(userId: string): void {
  this.service.banuser(userId);
  const url = `http://localhost:8180/auth/admin/master/console/#/realms/central-realm/users/${userId}`;
  this.router.navigate([url]);

}

redirectToUsersPage(id: string) {
  const url = `http://localhost:8180/auth/admin/master/console/#/realms/central-realm/users/${id}`;
  window.location.href = url;
}



}
