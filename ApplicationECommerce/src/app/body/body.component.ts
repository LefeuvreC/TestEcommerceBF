import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/Utilisateur.model';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  utilisateur!: Utilisateur

  constructor(private route: Router, private service: AuthentificationService) { }

  ngOnInit(): void {
    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);
    //console.log(this.utilisateur.nom)
    //console.log(this.utilisateur.prenom)
    //console.log(this.utilisateur.role.idRole)
  }

  gestionCategorie() {
    this.route.navigateByUrl('GestionCategorie')
  }

  gestionProduit() {
    this.route.navigateByUrl('GestionProduit')
  }

  gestionCommande() {
    this.route.navigateByUrl('GestionCommande')
  }
  deconnexion() {
    this.service.deconnecter();
  }
}
