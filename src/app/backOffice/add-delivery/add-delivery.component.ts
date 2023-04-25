import { Component, OnInit } from '@angular/core';
import { DeliveryService } from 'src/app/Service/Delivery/delivery.service';

@Component({
  selector: 'app-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: ['./add-delivery.component.css']
})
export class AddDeliveryComponent implements OnInit {


  name!:String;
  phoneNumber!:number;
  score!:String;
  level!:String;

  availability!:String;
deliverys!:any[];
availab!:number;

  constructor(private service:DeliveryService){}

ngOnInit(): void {
}

Submit(form:any){
if(this.availability=="yes"){
  this.availab=1;
}
else{
  this.availab=0;
}

    let body={
      "availability":this.availab,
      "score": this.score,
      "level": this.level,
      "name": this.name,
      "phoneNumber": this.phoneNumber
    }
    console.log(body)
    let data=JSON.stringify(form.value)
    this.service.addDelivery(body).subscribe(res => console.log(res))
  }

}
