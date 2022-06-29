import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient, private router: Router) { }

  authentification(username: string, password: string) {

    return this.http.post<any>('http://localhost:9092/authenticate',
      { username, password });
  }

  deconnecter() {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('utilisateur')
    this.router.navigateByUrl('Authentification')
  }
}
