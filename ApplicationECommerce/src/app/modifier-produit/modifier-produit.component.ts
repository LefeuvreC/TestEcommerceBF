import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../models/Categorie.model';
import { Produit } from '../models/Produit.model';
import { CategorieService } from '../service/categorie.service';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.css']
})
export class ModifierProduitComponent implements OnInit {

  produit!: Produit
  categories!: Categorie[]
  selectedCat!: Categorie

  selectedFile!: File

  constructor(private route: ActivatedRoute, private serviceC: CategorieService, private serviceP: ProduitService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCat();
    this.produit = new Produit();
    this.selectById();
  }

  getAllCat() {
    this.serviceC.getAllCat().subscribe(
      response => { this.categories = response }
    )
  }

  selectById() {
    const idP = + this.route.snapshot.params['id'];
    this.serviceP.selectById(idP).subscribe(
      response => this.produit = response
    )
  }

  selectedEvent(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  modifierProduit() {
    /*this.serviceP.modifier(this.produit).subscribe(
      response => {
        this.router.navigateByUrl('GestionProduit')
      }
    )*/

    let formData = new FormData();
    formData.append('file', this.selectedFile)
    formData.append('libProduit', this.produit.libProduit)
    formData.append('quantite', this.produit.quantite.toString())
    formData.append('idcategorie', this.selectedCat.idCategorie.toString())
    formData.append('idproduit', this.produit.idProduit.toString())
    this.serviceP.modifier(formData).subscribe(
      response => {
        this.serviceP.getAllProd();

      })

    this.router.navigateByUrl('GestionProduit')
  }
}
