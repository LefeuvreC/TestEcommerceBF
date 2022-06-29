import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/Utilisateur.model';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  utilisateur!: Utilisateur;

  constructor(private serviceU: UtilisateurService, private router: Router) { }

  ngOnInit(): void {
    this.utilisateur = new Utilisateur();
  }

  saveUtilisateur() {
    this.serviceU.ajouter(this.utilisateur).subscribe(
      response => {
        this.utilisateur = response
        this.router.navigateByUrl('')
      }
    )
  }

}
