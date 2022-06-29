import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { Produit } from '../models/Produit.model';
import { CategorieService } from '../service/categorie.service';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {


  produit!: Produit
  categories!: Categorie[]
  selectedCat!: Categorie
  selectedFile!: File

  @Output() newItemEvent = new EventEmitter<number>()


  constructor(private serviceC: CategorieService, private serviceP: ProduitService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCat();
    this.produit = new Produit();
  }

  getAllCat() {
    this.serviceC.getAllCat().subscribe(
      response => { this.categories = response }
    )
  }

  selectedEvent(event: any): void {
    this.selectedFile = event.target.files[0];
  }
  saveProduit() {
    /* this.produit.categorie = this.selectedCat
     this.serviceP.ajouter(this.produit).subscribe(
       response => {
         this.newItemEvent.emit(1);
         this.serviceP.getAllProd();
       }
     )*/

    let formData = new FormData();
    formData.append('file', this.selectedFile)
    formData.append('libProduit', this.produit.libProduit)
    formData.append('quantite', this.produit.quantite.toString())
    this.produit.categorie = this.selectedCat
    formData.append('idcategorie', this.produit.categorie.idCategorie.toString())
    console.log(this.produit.libProduit)
    console.log(this.selectedCat.idCategorie)
    console.log(this.produit.categorie.idCategorie)
    this.serviceP.ajouter(formData).subscribe(
      response => {
        this.newItemEvent.emit(1);
        this.serviceP.getAllProd();

      })

    this.router.navigateByUrl('GestionProduit')
  }

}
