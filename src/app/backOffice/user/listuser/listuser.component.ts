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
    this.service.getUsers().subscribe(res => {
      console.log(res)
      this.users=res})
}

}
