import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LignePanier } from '../models/LignePanier.model';
import { Panier } from '../models/Panier.model';
import { Produit } from '../models/Produit.model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-ajouter-panier',
  templateUrl: './ajouter-panier.component.html',
  styleUrls: ['./ajouter-panier.component.css']
})
export class AjouterPanierComponent implements OnInit {

  produit!: Produit
  quantite!: number
  lignePanier!: LignePanier
  panier!: Panier
  obj!: Panier

  cpt = 0
  cpt2!: number

  constructor(private route: ActivatedRoute, private serviceP: ProduitService, private router: Router) { }

  ngOnInit(): void {
    this.produit = new Produit
    this.lignePanier = new LignePanier();
    this.selectById();
    this.panier = new Panier
    console.log(this.panier.idPanier)
    this.panier.idPanier = 2
    console.log(this.panier.idPanier)

    this.obj = JSON.parse(sessionStorage['panier']);
    console.log(this.obj.idPanier)


    this.panier = this.obj
    if (this.panier == null) {
      console.log('test')
      this.panier = new Panier
      sessionStorage.setItem('panier', JSON.stringify(this.panier));
    }
    console.log(this.panier.idPanier)


    this.cpt2 = JSON.parse(sessionStorage['cpt']);
    this.cpt = this.cpt2
    if (this.cpt == null) {
      this.cpt = 0
      sessionStorage.setItem('cpt', JSON.stringify(this.cpt));
    }

  }
  selectById() {
    const idP = + this.route.snapshot.params['id'];
    this.serviceP.selectById(idP).subscribe(
      response => this.produit = response
    )
  }

  ajouterPanier() {
    console.log(this.quantite)
    this.lignePanier.idLignePanier = this.cpt
    this.lignePanier.produit = this.produit
    console.log(this.lignePanier.produit.libProduit)
    console.log(this.lignePanier.produit.idProduit)
    this.lignePanier.quantite = this.quantite
    //this.lignePanier.panier = this.panier
    this.panier.lignePanier.push(this.lignePanier)

    sessionStorage.setItem('panier', JSON.stringify(this.panier));
    sessionStorage.setItem('cpt', JSON.stringify(this.cpt + 1));
    this.router.navigateByUrl('')
  }


}
