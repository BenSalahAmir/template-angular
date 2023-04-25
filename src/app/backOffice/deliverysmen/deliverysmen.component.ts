import { Component, OnInit } from '@angular/core';
import { DeliveryService } from 'src/app/Service/Delivery/delivery.service';

@Component({
  selector: 'app-deliverysmen',
  templateUrl: './deliverysmen.component.html',
  styleUrls: ['./deliverysmen.component.css']
})
export class DeliverysmenComponent implements OnInit {


  Deliverysmen!:any[]
  constructor(private service:DeliveryService){}

  ngOnInit(): void {
    this.service.getDeliverysmen().subscribe(res => {
      console.log(res)
      this.Deliverysmen=res})
}
}
