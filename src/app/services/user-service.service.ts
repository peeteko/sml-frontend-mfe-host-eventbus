import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SmlUserDetails } from '../model/sml-user-details';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private readonly httpClient: HttpClient,) { }

  public getUserDetails(): Observable<SmlUserDetails> {
    return this.httpClient.get<SmlUserDetails>(`${environment.smlCustomerApiEndpoint}/customer/user/me`, {headers : this._getBaseHeaders()} );
  }

  private _getBaseHeaders() : HttpHeaders{
    return new HttpHeaders({
      'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS'
    });
  }
}
