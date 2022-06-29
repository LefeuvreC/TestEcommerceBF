import { Utilisateur } from "./Utilisateur.model"

export class Commande {
    idCommande!: number
    dateCommande!: Date
    utilisateur!: Utilisateur

    constructor() {
        this.dateCommande = new Date(Date.now())
    }
}