package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IutilisateurDao;
import com.intiFormation.entity.Utilisateur;

@Service
public class UtilisateurService implements IutilisateurService{
	
	@Autowired
	IutilisateurDao uDao;
	
	public Utilisateur chercherParUsername(String username) {
		return uDao.findByUsername(username);
		
	}
	
	// Ajouter Utilisateur
			public void AjoutUtilisateur(Utilisateur u) {
				uDao.save(u);
			}
			
			// Afficher toutes les Utilisateurs
			public List<Utilisateur> getAllUtilisateur(){
				return uDao.findAll();
			}
			// Selectionner par Id
			public Optional<Utilisateur> selectById(int id){
				return uDao.findById(id);
			}
			
			// Modifier Utilisateur
			public void ModifUtilisateur(Utilisateur u) {
				uDao.save(u);
			}
			
			// Supprimer Utilisateur
			public void SuppUtilisateur(int id) {
				uDao.deleteById(id);
			}

}
