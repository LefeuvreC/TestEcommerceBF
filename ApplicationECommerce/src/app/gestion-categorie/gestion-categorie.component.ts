import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { CategorieService } from '../service/categorie.service';

@Component({
  selector: 'app-gestion-categorie',
  templateUrl: './gestion-categorie.component.html',
  styleUrls: ['./gestion-categorie.component.css']
})
export class GestionCategorieComponent implements OnInit {

  @Input() categories!: Categorie;

  @Output() newItemEvent = new EventEmitter<number>();

  constructor(private serviceC: CategorieService, private router: Router) { }

  ngOnInit(): void {

  }


  supprimer(idC: number) {
    this.serviceC.supprimer(idC).subscribe(
      response => {
        this.newItemEvent.emit(1);
      }
    )
  }

  modifier(idC: number) {
    this.router.navigateByUrl('ModifierCategorie/' + idC)
  }

  afficher(idC: number) {
    this.router.navigateByUrl('AfficherProduitParCat/' + idC)
  }

}
