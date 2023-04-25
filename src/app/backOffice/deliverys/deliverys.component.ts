import { Component, OnInit } from '@angular/core';
import { DeliveryService } from 'src/app/Service/Delivery/delivery.service';

@Component({
  selector: 'app-deliverys',
  templateUrl: './deliverys.component.html',
  styleUrls: ['./deliverys.component.css']
})
export class DeliverysComponent implements OnInit{

  deliverys!:any[];
  constructor(private service:DeliveryService){}

  ngOnInit(): void {
      this.service.getDeliverys().subscribe(res => {
        console.log(res)
        this.deliverys=res})
  }
}
