package com.intiFormation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.LigneCommande;

public interface ILigneCommandeDao extends JpaRepository<LigneCommande, Integer> {
	
	// retourner la quantite par produit
	public int findQuantiteByProduit_idProduit(int id);
	
	// liste des commandes
	public List<LigneCommande> findLigneCommandeByCommandes_idCommande(int id);

}
