package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IProduitDao;
import com.intiFormation.entity.Produit;

@Service
public class ProduitService implements IproduitService {
	
	@Autowired
	IProduitDao pDao;
	
	public List<Produit> getbyCat(int idcat){
		return pDao.chercherParCat(idcat);
	}
	
	// Ajouter Produit
	public void AjoutProduit(Produit p) {
		pDao.save(p);
	}
	
	// Afficher toutes les Produits
	public List<Produit> getAllProd(){
		return pDao.findAll();
	}
	// Selectionner par Id
	public Optional<Produit> selectProdById(int id){
		return pDao.findById(id);
	}
	
	// Modifier Produit
	public void ModifProduit(Produit p) {
		pDao.save(p);
	}
	
	// Supprimer Produit
	public void SuppProduit(int id) {
		pDao.deleteById(id);
	}

	// Selection par nom produit
	public Produit selectProdByLib(String lib) {
		return pDao.getByLibProduit(lib);
	}
}
