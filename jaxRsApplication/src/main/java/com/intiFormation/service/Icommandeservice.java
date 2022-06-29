package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Commande;
import com.intiFormation.entity.Utilisateur;

public interface Icommandeservice {

	// Ajouter Commande
			public void AjoutCommande(Commande c);
			
			// Afficher toutes les Commandes
			public List<Commande> getAllCommande();
			// Selectionner par Id
			public Optional<Commande> selectCommandeById(int id);
			
			// Modifier Commande
			public void ModifCommande(Commande c);
			
			// Supprimer Commande
			public void SuppCommande(int id);
			
			//public Commande findByUtilsateur(Utilisateur u);
			
			//public Optional<Commande> selectByIdCommande(int idCommande);

}
