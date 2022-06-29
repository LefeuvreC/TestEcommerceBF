import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from '../models/Commande.model';
import { LigneCommande } from '../models/LigneCommande.model';
import { LignePanier } from '../models/LignePanier.model';
import { Panier } from '../models/Panier.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { CommandeService } from '../service/commande.service';
import { LigneCommandeService } from '../service/ligne-commande.service';

@Component({
  selector: 'app-afficher-panier',
  templateUrl: './afficher-panier.component.html',
  styleUrls: ['./afficher-panier.component.css']
})
export class AfficherPanierComponent implements OnInit {


  panier!: Panier
  lignePanier!: LignePanier[]
  utilisateur!: Utilisateur
  commande!: Commande
  //ligneCommandes!: LigneCommande[]
  ligneCommande!: LigneCommande

  selectedCom!: Commande

  constructor(private serviceC: CommandeService, private servicelC: LigneCommandeService, private router: Router) { }

  ngOnInit(): void {
    this.panier = JSON.parse(sessionStorage['panier']);
    this.lignePanier = this.panier.lignePanier
  }

  supprimer(idLignePanier: number) {
    this.panier = JSON.parse(sessionStorage['panier']);
    for (let i = 0; i < this.panier.lignePanier.length; i++) {
      if (this.panier.lignePanier[i].idLignePanier == idLignePanier) {
        delete this.panier.lignePanier[i]
        this.panier.lignePanier.splice(i, 1)

      }

    }
    sessionStorage.setItem('panier', JSON.stringify(this.panier));
  }


  Valider() {
    this.utilisateur = JSON.parse(sessionStorage['utilisateur']);
    this.commande = new Commande

    this.ligneCommande = new LigneCommande

    //this.ligneCommandes = []
    this.commande.utilisateur = this.utilisateur
    this.serviceC.ajouter(this.commande).subscribe(
      response => {
        this.commande = response
        console.log('test')
        console.log(response.idCommande)
        console.log(this.commande.idCommande)


        // recupérer commande
        /* this.serviceC.getById(this.commande.idCommande).subscribe(
          response => {
            this.selectedCom = response
            this.ligneCommande.commandes = this.selectedCom
            
          })*/
        // récupérer les lignes Commandes
        for (let i = 0; i < this.panier.lignePanier.length; i++) {
          this.ligneCommande.produit = this.panier.lignePanier[i].produit
          this.ligneCommande.quantite = this.panier.lignePanier[i].quantite
          this.ligneCommande.commandes = this.commande

          //this.ligneCommandes.push(this.ligneCommande)


          this.servicelC.ajouter(this.ligneCommande).subscribe()
        }
        sessionStorage.removeItem('panier')
        sessionStorage.removeItem('cpt')

        this.router.navigateByUrl('')

      }
    )







  }

}
