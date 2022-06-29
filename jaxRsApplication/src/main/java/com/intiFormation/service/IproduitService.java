package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.query.Param;

import com.intiFormation.entity.Produit;

public interface IproduitService {

	public List<Produit> getbyCat(int idcat);
	
	
	// Ajouter Produit
		public void AjoutProduit(Produit c);
		
	// Afficher toutes les Produits
		public List<Produit> getAllProd();
	// Selectionner par Id
		public Optional<Produit> selectProdById(int id);
		
	// Modifier Produit
		public void ModifProduit(Produit c);
		
	// Supprimer Produit
		public void SuppProduit(int id);
		
	// Selection par nom produit
		public Produit selectProdByLib(String lib);
		
		
}
