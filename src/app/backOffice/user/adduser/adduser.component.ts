import { Component } from '@angular/core';
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
  constructor(private service:UsersServiceService){}

ngOnInit(): void {
}

Submit(form:any){
    let body={
      "username":this.username,
      "firstname": this.firstname,
      "lastname": this.lastname,
      "email": this.email,
      "password":this.password,
      "phonenumber": this.phonenumber
    
    }
    console.log(body)
    let data=JSON.stringify(form.value)
    this.service.adduser(body).subscribe(res => console.log(res))
  }

}
