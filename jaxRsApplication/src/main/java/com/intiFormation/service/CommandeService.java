package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.ICommandeDao;
import com.intiFormation.entity.Commande;
import com.intiFormation.entity.Utilisateur;

@Service
public class CommandeService implements Icommandeservice{
	
	@Autowired
	ICommandeDao commandeDao;
	
	// Ajouter Commande
		public void AjoutCommande(Commande c) {
			commandeDao.save(c);
		}
		
		// Afficher toutes les Commandes
		public List<Commande> getAllCommande(){
			return commandeDao.findAll();
		}
		// Selectionner par Id
		public Optional<Commande> selectCommandeById(int id){
			return commandeDao.findById(id);
		}
		
		// Modifier Commande
		public void ModifCommande(Commande c) {
			commandeDao.save(c);
		}
		
		// Supprimer Commande
		public void SuppCommande(int id) {
			commandeDao.deleteById(id);
		}
		
		/*public Commande findByUtilsateur(Utilisateur u) {
			return commandeDao.findByUtilsateur(u);
		}*/
		
		/*public Optional<Commande> selectByIdCommande(int idCommande){
			return commandeDao.selectByIdCommande(idCommande);
		}*/


}
