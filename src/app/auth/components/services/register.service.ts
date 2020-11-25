import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  registerNewUser(userData): Observable<any> {
    return this.http.post('https://iinsurance.herokuapp.com/api/register/', userData);
}
}




