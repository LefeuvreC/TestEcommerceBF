import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../models/Produit.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  produit!: Produit
  selectedProd!: string
  utilisateur!: Utilisateur

  produits!: Produit[]

  filterTerm: string = '';

  constructor(private serviceP: ProduitService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProd()
    this.produit = new Produit
    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);
    //console.log(this.utilisateur.nom)

  }

  chercherProduit() {
    console.log(this.selectedProd)
    this.serviceP.getByLib(this.selectedProd).subscribe(
      response => {
        this.produit = response
        console.log(this.produit.idProduit)
        this.router.navigateByUrl('RechercheProduitClient/' + this.produit.idProduit)
      }
    )
  }

  getAllProd() {
    this.serviceP.getAllProdClient().subscribe(
      response => this.produits = response
    )
  }


}
