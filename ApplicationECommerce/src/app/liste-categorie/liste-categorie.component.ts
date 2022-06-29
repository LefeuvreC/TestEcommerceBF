import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { AuthentificationService } from '../service/authentification.service';
import { CategorieService } from '../service/categorie.service';

@Component({
  selector: 'app-liste-categorie',
  templateUrl: './liste-categorie.component.html',
  styleUrls: ['./liste-categorie.component.css']
})
export class ListeCategorieComponent implements OnInit {

  categories!: Categorie[];

  constructor(private serviceC: CategorieService, private router: Router, private service: AuthentificationService) { }

  ngOnInit(): void {

    this.getAllCat();

  }

  getAllCat() {
    this.serviceC.getAllCat().subscribe(
      response => this.categories = response
    )
  }

  recupererApres(e: any) {
    if (e == 1)
      this.getAllCat();
  }

  retour() {
    this.router.navigateByUrl('')
  }

  deconnexion() {
    this.service.deconnecter();
  }
}
