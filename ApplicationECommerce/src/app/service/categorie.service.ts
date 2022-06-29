import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../models/Categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) { }

  getAllCat() {
    return this.http.get<Categorie[]>('http://localhost:9092/api/categories')
  }
  getAllCatClient() {
    return this.http.get<Categorie[]>('http://localhost:9092/api/categoriesclient')
  }
  ajouter(categorie: Categorie) {
    return this.http.post<Categorie>('http://localhost:9092/api/categories', categorie)
  }

  supprimer(id: number) {
    return this.http.delete('http://localhost:9092/api/categories/' + id)
  }

  selectById(id: number) {
    return this.http.get<Categorie>('http://localhost:9092/api/categories/' + id)
  }

  modifier(categorie: Categorie) {
    return this.http.put<Categorie>('http://localhost:9092/api/categories', categorie)
  }
}
