import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/Service/Users/users-service.service';


@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit{
   userId:any= this.service.getUserIdFromToken();
   username!:String;
   firstname!:String;
   lastname!:String;
   email!:String;
   password!:String;
   phonenumber!:String;
  
  user: any = {};

  constructor(private service: UsersServiceService) { }
  ngOnInit() {
    // // get user id from storage
    // this.userId = localStorage.getItem('userId');

    // // fetch user profile data
    // this.service.getUser(this.userId).subscribe(data => {
    //   this.user = data;
    // });

    const userId = this.service.getUserIdFromToken();
    console.log('User id:', userId);
  }

  onSubmit(): void {
    const user = {
      username: this.username,
      firstName: this.firstname,
      lastName: this.lastname,
      email: this.email,
      password: this.password,
      phoneNumber: this.phonenumber
    };

    this.service.updateUser(this.userId, user).subscribe(
      () => {
        console.log('User updated successfully');
        // Do something when the user is updated successfully
      },
      error => {
        console.log(`Error updating user: ${error}`);
        // Handle errors here
      }
    );
  }

  

 
}


