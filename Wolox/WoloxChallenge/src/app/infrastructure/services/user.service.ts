import { Injectable, } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CacheService } from './cache.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoaderService } from './loader.service';

@Injectable()
export class UserService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  private userIsLoggedIn : boolean = false;

  constructor(private cacheService: CacheService,
              private loaderService: LoaderService,
              private http: HttpClient,
              private router: Router) {
    this.userIsLoggedIn = this.cacheService.getCurrentUserToken() ? true : false; 
    this.isAuthenticatedSubject.next(this.userIsLoggedIn);;
  }

  login(email: string, password: string, rememberMe : Boolean) {
    this.loaderService.mostrarLoader();
    const params = new URLSearchParams();
    params.append('email', email);
    params.append('Password', password);
    const body = params.toString();

    const headers = {'Content-Type': 'application/json'};

    return this.http.post('http://private-8e8921-woloxfrontendinverview.apiary-mock.com/login', body, { headers })
      .subscribe(response => {
        this.loaderService.ocultarLoader();
        this.isAuthenticatedSubject.next(true);
        rememberMe && this.cacheService.setCurrentUserToken(JSON.stringify(response));
        this.router.navigate(['../TechnologiesList']);
      })
  }

  isLoggedIn(){
    return this.cacheService.getCurrentUserToken();
  }
}