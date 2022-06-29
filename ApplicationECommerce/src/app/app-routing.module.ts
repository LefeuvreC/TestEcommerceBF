import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AfficherCatClientComponent } from "./afficher-cat-client/afficher-cat-client.component";
import { AfficherPanierComponent } from "./afficher-panier/afficher-panier.component";
import { AfficherProdClientComponent } from "./afficher-prod-client/afficher-prod-client.component";
import { AfficherProduitParCatClientComponent } from "./afficher-produit-par-cat-client/afficher-produit-par-cat-client.component";
import { AfficherProduitParCommandeComponent } from "./afficher-produit-par-commande/afficher-produit-par-commande.component";
import { AfficherProduitComponent } from "./afficher-produit/afficher-produit.component";
import { AjouterPanierComponent } from "./ajouter-panier/ajouter-panier.component";
import { BodyComponent } from "./body/body.component";
import { InscriptionComponent } from "./inscription/inscription.component";
import { ListeCategorieComponent } from "./liste-categorie/liste-categorie.component";
import { ListeCommandeComponent } from "./liste-commande/liste-commande.component";
import { ListeProduitComponent } from "./liste-produit/liste-produit.component";
import { LoginComponent } from "./login/login.component";
import { ModifierCategorieComponent } from "./modifier-categorie/modifier-categorie.component";
import { ModifierProduitComponent } from "./modifier-produit/modifier-produit.component";
import { RechercheProduitComponent } from "./recherche-produit/recherche-produit.component";



const routes: Routes = [
    { path: '', component: BodyComponent },
    { path: 'Authentification', component: LoginComponent },
    { path: 'Inscription', component: InscriptionComponent },

    { path: 'GestionCategorie', component: ListeCategorieComponent },
    { path: 'ModifierCategorie/:id', component: ModifierCategorieComponent },
    { path: 'AfficherProduitParCat/:id', component: AfficherProduitComponent },

    { path: 'GestionProduit', component: ListeProduitComponent },
    { path: 'ModifierProduit/:id', component: ModifierProduitComponent },

    { path: 'GestionCommande', component: ListeCommandeComponent },
    { path: 'AfficherProduitParCommande/:id', component: AfficherProduitParCommandeComponent },

    { path: 'afficherProduitClient', component: AfficherProdClientComponent },
    { path: 'AfficherProduitParCatClient/:id', component: AfficherProduitParCatClientComponent },
    { path: 'afficherCateClient', component: AfficherCatClientComponent },
    { path: 'RechercheProduitClient/:id', component: RechercheProduitComponent },

    { path: 'AjouterPanier/:id', component: AjouterPanierComponent },
    { path: 'AfficherPanier', component: AfficherPanierComponent }


]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }