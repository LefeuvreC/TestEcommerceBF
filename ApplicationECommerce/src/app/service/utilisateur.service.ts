import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/Utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  getAllUtil() {
    return this.http.get<Utilisateur[]>('http://localhost:9092/api/utilisateurs')
  }


  ajouter(u: Utilisateur) {
    return this.http.post<Utilisateur>('http://localhost:9092/api/utilisateurs', u)
  }


  ajouter2(u: Utilisateur, id: number) {
    return this.http.post<Utilisateur>('http://localhost:9092/api/utilisateurs/' + id, u)
  }

  getByUsername(username: string) {
    return this.http.get<Utilisateur>('http://localhost:9092/api/utilisateurParUsername/' + username)

  }
}
