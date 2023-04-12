import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit{
  private friendName: string = environment.friendName;
  private defaultName: string = environment.defaultFriendName;
  private kindFriendName: string = environment.kindFriendName;
  public username?: string;
  public isRickRolled: boolean = false;
  public isFriendKind: boolean = false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(q => {
      const queryParamName: string = q.get('name') != null ? q.get('name')! : '';
      this.username = [this.friendName.toLowerCase(), this.defaultName.toLowerCase(), this.kindFriendName.toLowerCase()].includes(queryParamName.toLowerCase()) ? queryParamName : this.defaultName;
      if (this.username == this.defaultName) {
        this.isRickRolled = true;
      } else if (this.username.toLowerCase() == this.kindFriendName.toLowerCase()) {
        this.isFriendKind = true;
      }
    });
  }

}
