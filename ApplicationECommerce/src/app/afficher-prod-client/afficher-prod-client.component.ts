import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LignePanier } from '../models/LignePanier.model';
import { Produit } from '../models/Produit.model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-afficher-prod-client',
  templateUrl: './afficher-prod-client.component.html',
  styleUrls: ['./afficher-prod-client.component.css']
})
export class AfficherProdClientComponent implements OnInit {

  produits!: Produit[]

  constructor(private servicP: ProduitService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProd();
  }

  getAllProd() {
    this.servicP.getAllProdClient().subscribe(
      response => this.produits = response
    )
  }
  ajouterPanier(idP: number) {
    this.router.navigateByUrl('AjouterPanier/' + idP)
  }
  retour() {
    this.router.navigateByUrl('')
  }
}
