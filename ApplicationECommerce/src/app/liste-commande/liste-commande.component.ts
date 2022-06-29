import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from '../models/Commande.model';
import { AuthentificationService } from '../service/authentification.service';
import { CommandeService } from '../service/commande.service';

@Component({
  selector: 'app-liste-commande',
  templateUrl: './liste-commande.component.html',
  styleUrls: ['./liste-commande.component.css']
})
export class ListeCommandeComponent implements OnInit {

  commandes!: Commande[]

  constructor(private serviceC: CommandeService, private router: Router, private service: AuthentificationService) { }

  ngOnInit(): void {
    this.getAllComm();
  }

  getAllComm() {
    this.serviceC.getAllCom().subscribe(
      response => this.commandes = response
    )
  }

  retour() {
    this.router.navigateByUrl('')
  }

  deconnexion() {
    this.service.deconnecter();
  }

}
