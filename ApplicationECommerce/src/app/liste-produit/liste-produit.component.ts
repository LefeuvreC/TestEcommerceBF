import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../models/Produit.model';
import { AuthentificationService } from '../service/authentification.service';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {

  produits!: Produit[];

  constructor(private serviceP: ProduitService, private router: Router, private service: AuthentificationService) { }

  ngOnInit(): void {
    this.getAllProd();
  }

  getAllProd() {
    this.serviceP.getAllProd().subscribe(
      response => this.produits = response
    )
  }

  recupererApres(e: any) {
    if (e == 1)
      this.getAllProd();
  }

  retour() {
    this.router.navigateByUrl('')
  }

  deconnexion() {
    this.service.deconnecter();
  }

}
