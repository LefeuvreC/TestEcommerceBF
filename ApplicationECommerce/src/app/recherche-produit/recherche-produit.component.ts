import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../models/Produit.model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-recherche-produit',
  templateUrl: './recherche-produit.component.html',
  styleUrls: ['./recherche-produit.component.css']
})
export class RechercheProduitComponent implements OnInit {

  produit!: Produit

  constructor(private route: ActivatedRoute, private serviceP: ProduitService, private router: Router) { }

  ngOnInit(): void {
    this.selectById();
  }

  selectById() {
    const idP = + this.route.snapshot.params['id'];
    this.serviceP.selectById(idP).subscribe(
      response => this.produit = response
    )
  }

  retour() {
    this.router.navigateByUrl('')
  }

}
