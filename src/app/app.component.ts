import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user-service.service';
import { SmlUserDetails } from './model/sml-user-details';
import { SmlUserDetailsWithToken } from './model/sml-user-details-with-token';
import { Router } from '@angular/router';
import { EventBusService } from './services/event-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sml-frontend-prototype';
  
  constructor(private readonly userService : UserService,
              private readonly router : Router,
              private readonly eventBusService : EventBusService){
  }

  ngOnInit(): void {
    
  }

  public loggedIn() : boolean{
    return this.userService.loggedIn;
  }

  public async goToPlugins(){
    console.log("start navigate to plugins")
    this.router.navigate(["/plugins"])
    .then( nav => {
      console.log("after navigating launch event")
      this.eventBusService.dispatchCustomerEvent(this.userService.smlUserDetailsWithToken);
    }
      
    );
  }

  public async signIn(){
    this.userService.loadUserDetails();
   
  }

  public async signOut(): Promise<void> {
    this.userService.signOut();

  }
}
