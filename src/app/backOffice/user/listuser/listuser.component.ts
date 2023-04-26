import { Component } from '@angular/core';
import { UsersServiceService } from 'src/app/Service/Users/users-service.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent {
  users!:any[];
  constructor(private service:UsersServiceService){}

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

}
