import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { CategorieService } from '../service/categorie.service';

@Component({
  selector: 'app-afficher-cat-client',
  templateUrl: './afficher-cat-client.component.html',
  styleUrls: ['./afficher-cat-client.component.css']
})
export class AfficherCatClientComponent implements OnInit {

  categories!: Categorie[]
  constructor(private serviceC: CategorieService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCat();
  }

  getAllCat() {
    this.serviceC.getAllCatClient().subscribe(
      response => this.categories = response
    )
  }

  afficher(idC: number) {
    this.router.navigateByUrl('AfficherProduitParCatClient/' + idC)
  }

  retour() {
    this.router.navigateByUrl('')
  }

}
