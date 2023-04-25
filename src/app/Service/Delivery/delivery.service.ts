import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  addDelivery(delivery:any){
    return this.http.post<any>("http://localhost:9090/delivery/adddeliverymen",delivery,this.httpOptions) }

    getDeliverys():Observable<any[]>{
      return this.http.get<any[]>("http://localhost:9090/delivery/retrievealldelivery")

    }

    getDeliverysmen():Observable<any[]>{
      return this.http.get<any[]>("http://localhost:9090/delivery/getalldeliverymen")

    }
}
