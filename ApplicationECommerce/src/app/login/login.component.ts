import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/Utilisateur.model';
import { AuthentificationService } from '../service/authentification.service';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string
  password!: string
  invalidLogin = false
  errorMessage = 'Login ou password incorrect'
  utilisateur!: Utilisateur

  constructor(private service: AuthentificationService, private router: Router, private serviceU: UtilisateurService) { }

  ngOnInit(): void {
    this.utilisateur = new Utilisateur();
  }


  login() {
    console.log(this.username)
    console.log(this.password)
    this.service.authentification(this.username, this.password).subscribe(

      data => {
        console.log(data.jwt)
        sessionStorage.setItem('token', 'Bearer ' + data.jwt)
        this.router.navigateByUrl('');
        this.invalidLogin = false;
        this.serviceU.getByUsername(this.username).subscribe(
          response => {
            this.utilisateur = response
            sessionStorage.setItem('utilisateur', JSON.stringify(this.utilisateur));
          }
        )


      },
      error => {
        console.log('error !!!!!!!!!!!')
        this.invalidLogin = true;
      }
    )
  }


  createBasicHttpHeader() {
    console.log(this.username)
    let basicchaine = 'Basic ' + window.btoa(this.username + ':' + this.password)
    return basicchaine

  }


  inscription() {
    this.router.navigateByUrl('Inscription')
  }
}
