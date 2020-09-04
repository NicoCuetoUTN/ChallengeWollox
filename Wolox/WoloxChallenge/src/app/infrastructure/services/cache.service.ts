import { Injectable } from "@angular/core";

const CURRENT_USER__TOKEN_KEY = 'currentUser';
 
@Injectable()
export class CacheService {
    
  getCurrentUserToken(){
    return localStorage.getItem(CURRENT_USER__TOKEN_KEY);
  }

  setCurrentUserToken(value: string){
    localStorage.setItem(CURRENT_USER__TOKEN_KEY, value);
  }

  removeCurrentUser(){
      localStorage.removeItem(CURRENT_USER__TOKEN_KEY);
  }
  
}