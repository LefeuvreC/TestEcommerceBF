import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LigneCommande } from '../models/LigneCommande.model';

@Injectable({
  providedIn: 'root'
})
export class LigneCommandeService {

  constructor(private http: HttpClient) { }

  getAllLigneCom() {
    return this.http.get<LigneCommande[]>('http://localhost:9092/api/ligneCommandes')
  }

  ajouter(lc: LigneCommande) {
    return this.http.post<LigneCommande>('http://localhost:9092/api/ligneCommandes', lc)
  }
}
