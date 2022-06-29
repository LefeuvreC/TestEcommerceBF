import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ListeCategorieComponent } from '../liste-categorie/liste-categorie.component';
import { Categorie } from '../models/Categorie.model';
import { CategorieService } from '../service/categorie.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  categorie!: Categorie;

  @Output() newItemEvent = new EventEmitter<number>()

  constructor(private serviceC: CategorieService, private router: Router) { }

  ngOnInit(): void {
    this.categorie = new Categorie()
  }

  saveCategorie() {
    this.serviceC.ajouter(this.categorie).subscribe(
      response => {
        this.newItemEvent.emit(1);
        this.serviceC.getAllCat();
      }
    )
    this.router.navigateByUrl('GestionCategorie')
  }

}
