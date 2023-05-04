import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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

  constructor(private service: UsersServiceService , private ac:ActivatedRoute,private router :Router ) { }
  ngOnInit() {
    // // get user id from storage
    // this.userId = localStorage.getItem('userId');

    // // fetch user profile data
    // this.service.getUser(this.userId).subscribe(data => {
    //   this.user = data;
    // });

    const userId = this.service.getUserIdFromToken();
    console.log('User id:', userId);

  //   this.userId = this.ac.snapshot.params['id'];

  // this.service.getUserById(this.userId).subscribe(
  //   (user: any) => {
  //     this.username = user.username;
  //     this.firstname = user.firstname;
  //     this.lastname = user.lastname;
  //     this.email = user.email;
  //     this.password = user.password;
  //     this.phonenumber = user.phonenumber;
  //   },
  //   error => {
  //     console.log(`Error getting user by ID: ${error}`);
  //     // Handle errors here
  //   }
  // );
  }

  onSubmit(): void {
    console.log(this.firstname)
    const user = {
      username: this.username,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      phonenumber: this.phonenumber
    };

    console.log(user)
    this.service.updateUser(this.userId, user).subscribe(
      () => {
        this.router.navigate(['/front']); // Redirect to the "front" page

        console.log('User updated successfully');
      },
      error => {
        console.log(`Error updating user: ${error}`);
      }
    );
  }

  

 
}


