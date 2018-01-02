import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message/message.service';
import { User } from '../models/user';
import { AppConfig } from '../app.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  login: string = "Login";
  showFlight : boolean = false;
  showBooking: boolean = false;
  private config: AppConfig = new AppConfig();
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.showMenu();
    this.messageService.listen().subscribe(
      data =>{
        this.showMenu();
      },
      error =>{

      }
    );
  }
  
  showMenu(){
    if(localStorage.getItem('currentUser')){
      let currentUser: User = JSON.parse(localStorage.getItem('currentUser'));
      this.login = "Logout"
      this.showFlight = this.config.roles[currentUser.Rol].some((e,i,a) => {return e == "/flight";});
      this.showBooking = this.config.roles[currentUser.Rol].some((e,i,a) => {return e == "/booking";});
    }else{
      this.login = "Login";
      this.showFlight = false;
      this.showBooking = false;
    }
  }

}
