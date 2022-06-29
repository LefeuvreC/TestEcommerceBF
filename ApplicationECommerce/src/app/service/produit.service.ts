import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../models/Produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient, private router: Router) { }


  getAllByCat(idC: number) {
    return this.http.get<Produit[]>('http://localhost:9092/api/produitIdCat/' + idC)
  }

  getAllProd() {
    return this.http.get<Produit[]>('http://localhost:9092/api/produits')
  }
  supprimer(id: number) {
    return this.http.delete('http://localhost:9092/api/produits/' + id)
  }

  selectById(id: number) {
    return this.http.get<Produit>('http://localhost:9092/api/produits/' + id)
  }

  modifier(data: FormData) {
    return this.http.put<Produit>('http://localhost:9092/api/produits', data)
  }

  ajouter(data: FormData) {
    return this.http.post<Produit>('http://localhost:9092/api/produits', data)
  }

  deconnecter() {
    sessionStorage.removeItem('token')
    this.router.navigateByUrl('Authentification')
  }


  getAllProdClient() {
    return this.http.get<Produit[]>('http://localhost:9092/api/produitsclient')
  }

  getAllByCatClient(idC: number) {
    return this.http.get<Produit[]>('http://localhost:9092/api/produitIdCatClient/' + idC)
  }

  getByLib(lib: string) {
    return this.http.get<Produit>('http://localhost:9092/api/produitsNom/' + lib)
  }


}
