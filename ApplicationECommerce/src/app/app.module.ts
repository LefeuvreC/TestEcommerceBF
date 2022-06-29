import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { BodyComponent } from './body/body.component';
import { ListeCategorieComponent } from './liste-categorie/liste-categorie.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { GestionCategorieComponent } from './gestion-categorie/gestion-categorie.component';
import { GestionProduitComponent } from './gestion-produit/gestion-produit.component';
import { ModifierCategorieComponent } from './modifier-categorie/modifier-categorie.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { AfficherProduitComponent } from './afficher-produit/afficher-produit.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AfficherProdClientComponent } from './afficher-prod-client/afficher-prod-client.component';
import { AfficherCatClientComponent } from './afficher-cat-client/afficher-cat-client.component';
import { AfficherProduitParCatClientComponent } from './afficher-produit-par-cat-client/afficher-produit-par-cat-client.component';
import { GestionCommandeComponent } from './gestion-commande/gestion-commande.component';
import { ListeCommandeComponent } from './liste-commande/liste-commande.component';
import { AfficherProduitParCommandeComponent } from './afficher-produit-par-commande/afficher-produit-par-commande.component';
import { AjouterPanierComponent } from './ajouter-panier/ajouter-panier.component';
import { RechercheProduitComponent } from './recherche-produit/recherche-produit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AfficherPanierComponent } from './afficher-panier/afficher-panier.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BodyComponent,
    ListeCategorieComponent,
    ListeProduitComponent,
    GestionCategorieComponent,
    GestionProduitComponent,
    ModifierCategorieComponent,
    ModifierProduitComponent,
    AddCategorieComponent,
    AfficherProduitComponent,
    HeaderComponent,
    FooterComponent,
    AddProduitComponent,
    InscriptionComponent,
    AfficherProdClientComponent,
    AfficherCatClientComponent,
    AfficherProduitParCatClientComponent,
    GestionCommandeComponent,
    ListeCommandeComponent,
    AfficherProduitParCommandeComponent,
    AjouterPanierComponent,
    RechercheProduitComponent,
    AfficherPanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
