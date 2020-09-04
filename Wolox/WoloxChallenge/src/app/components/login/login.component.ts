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


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  login(){
    if(this.validateCredencials()){
      this.userService.login(this.email, this.password, this.rememberMe);
    }
  }

  private validateCredencials(){
    let isValid = true;
    // Podriamos validar con Regex para ser mas optimo tambien
    if (!this.email || !this.email.includes('@')) {
      // this.errors.email = 'USUARIO_VACIO';
      isValid = false;
    }

    if (!this.password || this.password.length <= 6 ) {
      // this.errors.password = 'CONTRASEÑA_VACIA';
      isValid = false;
    }

    return isValid;
  }

}
