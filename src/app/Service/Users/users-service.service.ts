import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { AccessTokenResponse } from 'src/app/AccessTokenResponse';


@Injectable({
  providedIn: 'root'
})
export class UsersServiceService implements OnInit{
  private loginUrl = 'http://localhost:8080/user/login'; 
  private apiURL = 'http://localhost:8080/user';
  private us="";


  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    const userId = this.getUserIdFromToken();
    console.log('User id:', userId);  }
  storageUserAsStr: any = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser') || '{}') : null

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  updateUser(userId: string, user: any): Observable<any> {
    const url = `${this.apiURL}/update/${userId}`;
    return this.http.put<any>(url, user, this.httpOptions);
  }


  getUserIdFromToken(): string | null {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const payload = token.split('.')[1];
      const decodedPayload = window.atob(payload);
      const parsedPayload = JSON.parse(decodedPayload);
      return parsedPayload.sub;
    }
    return null;
  }


  getUsers():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:8080/user/getalluser")
  }
  adduser(user:any){
    return this.http.post<any>("http://localhost:8080/user/create",user,this.httpOptions) }


   login(username: string, password: string): Observable<AccessTokenResponse> {
      const body = { username, password };
      return this.http.post<AccessTokenResponse>(this.loginUrl, body);
    }
    

    
    
    deleteUser(userId: string): Observable<void> {
      const url = `${this.apiURL}/delete/${userId}`;
      const token = localStorage.getItem('accessToken');
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      };
      return this.http.delete<void>(url, { headers });
    }
    public getToken(): string | null {
      return localStorage.getItem('token');
    }




}


