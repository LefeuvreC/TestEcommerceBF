import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from '../models/Commande.model';

@Component({
  selector: 'app-gestion-commande',
  templateUrl: './gestion-commande.component.html',
  styleUrls: ['./gestion-commande.component.css']
})
export class GestionCommandeComponent implements OnInit {

  @Input() commandes!: Commande
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  afficherProduit(idC: number) {
    this.router.navigateByUrl('AfficherProduitParCommande/' + idC)
  }
}
