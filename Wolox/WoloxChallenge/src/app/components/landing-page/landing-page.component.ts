import { Component, OnInit } from '@angular/core';
import { UserService } from '../../infrastructure/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  constructor(public userService: UserService, private router: Router) {}

  ngOnInit() {
    let userLogged = this.userService.isLoggedIn();
    userLogged && this.router.navigate(['/TechnologiesList']);
  }

  gotoExternalUrl(url: string) {
    window.location.href = url;
  }
}
