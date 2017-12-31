import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
import { AlertService} from '../services/alert/alert.service'
import { AuthenticationService} from '../services/auth/authentication.service'
import { User } from '../models/user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
     this.authenticationService.logout();
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/flight';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
            (data: User) => {     
              if(data && data.Token){
                localStorage.setItem('currentUser', JSON.stringify(data));
                this.router.navigate([this.returnUrl]);
                
              }else{
                this.alertService.error("Ha ocurrido un error con la autenticación");
              }         
              
              this.loading = false;
            },
            (error: HttpErrorResponse) => {
              if(error.status == 401){
                this.alertService.error("El usuario o la contraseña son invalidos");
              }else{
                this.alertService.error("Ha ocurrido un error con la autenticación");
              }
                
                this.loading = false;
            });
}

}
