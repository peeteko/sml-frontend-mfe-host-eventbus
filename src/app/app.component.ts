import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user-service.service';
import { SmlUserDetails } from './model/sml-user-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sml-frontend-prototype';

  constructor(private readonly userService : UserService){
  }

  ngOnInit(): void {
    this.userService.getUserDetails().subscribe((smlUserDetails : SmlUserDetails ) => {
      console.log(smlUserDetails);
    })
  }
}
