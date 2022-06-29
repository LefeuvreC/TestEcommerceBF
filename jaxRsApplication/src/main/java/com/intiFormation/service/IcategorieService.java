package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Categorie;

public interface IcategorieService {

	// Ajouter Categorie
	public void AjoutCat(Categorie c);
	
	// Afficher toutes les Categories
	public List<Categorie> getAllCat();
	// Selectionner par Id
	public Optional<Categorie> selectById(int id);
	
	// Modifier Categorie
	public void ModifCat(Categorie c);
	
	// Supprimer Categorie
	public void SuppCat(int id);
}
