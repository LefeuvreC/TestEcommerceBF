import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../models/Produit.model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-afficher-produit-par-cat-client',
  templateUrl: './afficher-produit-par-cat-client.component.html',
  styleUrls: ['./afficher-produit-par-cat-client.component.css']
})
export class AfficherProduitParCatClientComponent implements OnInit {

  produits!: Produit[]

  constructor(private route: ActivatedRoute, private serviceP: ProduitService, private router: Router) { }

  ngOnInit(): void {
    this.getByCat();
  }
  getByCat() {
    const idCategorie = + this.route.snapshot.params['id'];
    this.serviceP.getAllByCatClient(idCategorie).subscribe(
      response => {
        this.produits = response
      }
    )
  }

  retour() {
    this.router.navigateByUrl('afficherCateClient')
  }
}
