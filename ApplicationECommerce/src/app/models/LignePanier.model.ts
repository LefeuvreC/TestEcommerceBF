import { Panier } from "./Panier.model"
import { Produit } from "./Produit.model"

export class LignePanier {
    //static count = 0
    idLignePanier!: number
    quantite!: number
    panier!: Panier
    produit!: Produit

    /* cpt = 0
 
     constructor() {
         this.cpt++
         this.idLignePanier = this.cpt
     }*/

    /*    constructor() {
            this.idLignePanier = ++LignePanier.count
        }
        */
}