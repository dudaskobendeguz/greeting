import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  private friendName: string = environment.friendName;
  private defaultName: string = environment.defaultFriendName;
  private kindFriendName: string = environment.kindFriendName;
  userNameFormControl = new FormControl('', Validators.required);

  constructor(private router: Router ) {
  }


  SendMyName() {
    let userName: string | null = this.userNameFormControl.getRawValue();
    if(userName?.toLowerCase() != this.friendName.toLowerCase() &&
      userName?.toLowerCase() != this.kindFriendName.toLowerCase()) {
      userName = this.defaultName
    }
    this.router.navigate(["/greeting"], {queryParams: {name: userName}})

  }
}
