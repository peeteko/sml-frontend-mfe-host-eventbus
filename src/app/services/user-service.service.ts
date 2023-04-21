import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SmlUserDetails } from '../model/sml-user-details';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SmlUserDetailsWithToken } from '../model/sml-user-details-with-token';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  smlUserDetailsWithToken : SmlUserDetailsWithToken | null = null;
  loggedIn : boolean = false;

  constructor( private readonly httpClient: HttpClient,) { }

  public loadUserDetails() {
    this.httpClient.get<SmlUserDetailsWithToken>(`${environment.smlCustomerApiEndpoint}/customer/user/me`, 
    {headers : this._getBaseHeaders()} )
    .subscribe((smlUserDetailsWithToken) => {
      this.smlUserDetailsWithToken = smlUserDetailsWithToken;
      this.loggedIn = true;
    },
    error => {
      this.signOut();
    });
  }

  public signOut(){
    this.loggedIn = false;
    this.smlUserDetailsWithToken = null;
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
