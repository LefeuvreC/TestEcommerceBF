package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Utilisateur;

public interface IutilisateurService {
	
	public Utilisateur chercherParUsername(String username);
	
	// Ajouter Utilisateur
				public void AjoutUtilisateur(Utilisateur u);
				
				// Afficher toutes les Utilisateurs
				public List<Utilisateur> getAllUtilisateur();
				// Selectionner par Id
				public Optional<Utilisateur> selectById(int id);
				
				// Modifier Utilisateur
				public void ModifUtilisateur(Utilisateur u);
				
				// Supprimer Utilisateur
				public void SuppUtilisateur(int id);

}
