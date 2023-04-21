import { Injectable } from '@angular/core';
import { SmlUserDetailsWithToken } from '../model/sml-user-details-with-token';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  constructor() { }

  public dispatchCustomerEvent(smlUserDetailsWithToken : SmlUserDetailsWithToken | null) : void{ 
    if (smlUserDetailsWithToken){
      console.log("dispatch auth-customer-login event");
      
      const busEvent = new CustomEvent('app-event-bus', {
        bubbles: true,
        detail: {
          eventType: 'auth-customer-login',
          jwtToken : smlUserDetailsWithToken.jwtTokenCustomized
        }
      });
      dispatchEvent(busEvent);
   }
  }
}
