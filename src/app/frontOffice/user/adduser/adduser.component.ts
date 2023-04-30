import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersServiceService } from 'src/app/Service/Users/users-service.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  
  username!:String;
  firstname!:String;
  lastname!:String;
  email!:String;
  password!:String;
  phonenumber!:String;

  errorMessage: string = "";
submitting: boolean = false;
  constructor(private service:UsersServiceService,private router: Router){}

ngOnInit(): void {
}

Submit(form: any) {
  this.submitting = true;
  let body = {
    "username": this.username,
    "firstname": this.firstname,
    "lastname": this.lastname,
    "email": this.email,
    "password": this.password,
    "phonenumber": this.phonenumber
  };

  this.service.adduser(body).subscribe(
    (response) => {
      console.log(response);
      // Redirect the user to the sign-in page
      this.router.navigate(['/signin']);
    },
    (error) => {
      console.log(error);
      this.errorMessage = "An error occurred while adding the user.";
      this.submitting = false;
    }
  );
}


}
