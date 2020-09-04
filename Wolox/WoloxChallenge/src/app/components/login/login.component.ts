import { Component, OnInit } from '@angular/core';
import { UserService } from '../../infrastructure/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  rememberMe = false;
  errors = [];


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  login(){
    if(this.validateCredencials()){
      this.userService.login(this.email, this.password, this.rememberMe);
    }
  }

  private validateCredencials(){
    this.errors = [];
    let isValid = true;
    // Podriamos validar con Regex para ser mas optimo tambien
    if (!this.email || !this.email.includes('@')) {
       this.errors['email'] = 'This field is required. The username must be a valid email.';
      isValid = false;
    }

    if (!this.password || this.password.length <= 6 ) {
      this.errors['password'] = 'This field is required. The password must have at least 6 characters.';
      isValid = false;
    }

    return isValid;
  }

}
