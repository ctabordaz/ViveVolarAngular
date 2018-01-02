import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/auth/authentication.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User= new User();
  loading = false;

  constructor(private authenticationService: AuthenticationService,
    private router: Router,
    private alertService: AlertService) { }

  ngOnInit() {
  }


  register(){
    this.user.Rol = "Customer";
    this.authenticationService.register(this.user).subscribe(
      data =>{
        this.alertService.success('Registro exitoso', true);
        this.router.navigate(['/login']);
      },
      error =>{
        this.alertService.error('Ha ocurrdio un error con el servicio: '+ error.error);
      }
    );
  }
}
