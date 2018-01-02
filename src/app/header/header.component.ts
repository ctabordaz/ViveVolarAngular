import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message/message.service';
import { User } from '../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  login: string = "Login";
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    if(localStorage.getItem('currentUser')){
      this.login = "Logout"
    }else{
      this.login = "Login";
    }
    this.messageService.listen().subscribe(
      data =>{
        if(localStorage.getItem('currentUser')){
          this.login = "Logout"
        }else{
          this.login = "Login";
        }
      },
      error =>{

      }
    );
  }

}
