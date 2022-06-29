import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../models/Produit.model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-gestion-produit',
  templateUrl: './gestion-produit.component.html',
  styleUrls: ['./gestion-produit.component.css']
})
export class GestionProduitComponent implements OnInit {

  @Input() produits!: Produit

  @Output() newItemEvent = new EventEmitter<number>();

  constructor(private serviceP: ProduitService, private router: Router) { }

  ngOnInit(): void {
  }

  supprimer(idP: number) {
    this.serviceP.supprimer(idP).subscribe(
      response => {
        this.newItemEvent.emit(1);
      }
    )
  }

  modifier(idC: number) {
    this.router.navigateByUrl('ModifierProduit/' + idC)
  }

}
