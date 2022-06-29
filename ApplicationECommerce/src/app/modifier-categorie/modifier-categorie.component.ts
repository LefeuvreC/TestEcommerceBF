import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { CategorieService } from '../service/categorie.service';

@Component({
  selector: 'app-modifier-categorie',
  templateUrl: './modifier-categorie.component.html',
  styleUrls: ['./modifier-categorie.component.css']
})
export class ModifierCategorieComponent implements OnInit {

  categorie!: Categorie;

  constructor(private route: ActivatedRoute, private serviceC: CategorieService, private router: Router) { }

  ngOnInit(): void {
    this.selectById();
  }

  selectById() {
    const idCategorie = + this.route.snapshot.params['id'];
    this.serviceC.selectById(idCategorie).subscribe(
      response => this.categorie = response
    )
  }

  modifierCategorie() {
    this.serviceC.modifier(this.categorie).subscribe(
      response => {
        this.router.navigateByUrl('GestionCategorie')
      }
    )
  }

}
