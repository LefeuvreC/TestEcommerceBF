import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commande } from '../models/Commande.model';
import { LigneCommande } from '../models/LigneCommande.model';
import { Produit } from '../models/Produit.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) { }

  getAllCom() {
    return this.http.get<Commande[]>('http://localhost:9092/api/commandes')
  }

  getProdByComm(idC: number) {
    return this.http.get<[LigneCommande]>('http://localhost:9092/api/ligneCommandesIdCommande/' + idC)
  }

  ajouter(c: Commande) {
    return this.http.post<Commande>('http://localhost:9092/api/commandes', c)
  }

  getById(idC: number) {
    return this.http.get<Commande>('http://localhost:9092/api/commandes/' + idC)
  }
}
