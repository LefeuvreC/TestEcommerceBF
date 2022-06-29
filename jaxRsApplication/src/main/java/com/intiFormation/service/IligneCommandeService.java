package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.LigneCommande;

public interface IligneCommandeService {
	
	// Ajouter LigneCommande
	public void AjoutLigneCommande(LigneCommande lc);
				
	// Afficher toutes les LigneCommandes
	public List<LigneCommande> getAllLigneCommande();
	
	// Selectionner par Id
	public Optional<LigneCommande> selectLigneCommandeeById(int id);
				
	// Modifier Commande
	public void ModifLigneCommande(LigneCommande lc);
				
	// Supprimer Commande
	public void SuppLigneCommande(int id);
	
	// retourner la quantite par produit
	public int findQuantiteByProduit_idProduit(int id);
	
	// liste des commandes
		public List<LigneCommande> findLigneCommandeByCommandes_idCommande(int id);

}
