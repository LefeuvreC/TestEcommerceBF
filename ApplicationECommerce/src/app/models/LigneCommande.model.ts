import { Commande } from "./Commande.model"
import { Produit } from "./Produit.model"

export class LigneCommande {
    idLigneCommande!: number
    commandes!: Commande
    produit!: Produit
    quantite!: number
}