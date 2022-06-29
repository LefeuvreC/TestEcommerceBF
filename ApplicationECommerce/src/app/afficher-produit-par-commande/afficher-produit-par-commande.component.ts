import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LigneCommande } from '../models/LigneCommande.model';
import { Produit } from '../models/Produit.model';
import { CommandeService } from '../service/commande.service';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-afficher-produit-par-commande',
  templateUrl: './afficher-produit-par-commande.component.html',
  styleUrls: ['./afficher-produit-par-commande.component.css']
})
export class AfficherProduitParCommandeComponent implements OnInit {

  produits!: Produit[]
  LigneCommandes!: LigneCommande[]

  constructor(private route: ActivatedRoute, private serviceC: CommandeService, private router: Router) { }

  ngOnInit(): void {
    this.getByCom();
  }
  getByCom() {
    const idCommande = + this.route.snapshot.params['id'];
    this.serviceC.getProdByComm(idCommande).subscribe(
      response => this.LigneCommandes = response
    )
  }

  retour() {
    this.router.navigateByUrl('GestionCommande')
  }

}
