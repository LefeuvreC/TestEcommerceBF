package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.ILigneCommandeDao;
import com.intiFormation.entity.LigneCommande;

@Service
public class LigneCommandeService implements IligneCommandeService {
	
	@Autowired
	ILigneCommandeDao lcDao;
	
	// Ajouter LigneCommande
	public void AjoutLigneCommande(LigneCommande lc) {
		lcDao.save(lc);
	}
			
	// Afficher toutes les LigneCommandes
	public List<LigneCommande> getAllLigneCommande(){
		return lcDao.findAll();
	}
	// Selectionner par Id
	public Optional<LigneCommande> selectLigneCommandeeById(int id){
		return lcDao.findById(id);
	}
			
	// Modifier Commande
	public void ModifLigneCommande(LigneCommande lc) {
		lcDao.save(lc);
	}
		
	// Supprimer Commande
	public void SuppLigneCommande(int id) {
		lcDao.deleteById(id);
	}
	// retourner la quantite par produit
	public int findQuantiteByProduit_idProduit(int id) {
		return lcDao.findQuantiteByProduit_idProduit(id);
	}
	
	// liste des commandes
		public List<LigneCommande> findLigneCommandeByCommandes_idCommande(int id){
			return lcDao.findLigneCommandeByCommandes_idCommande(id);
		}

}
