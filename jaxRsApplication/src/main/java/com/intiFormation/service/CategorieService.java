package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.ICategorieDao;
import com.intiFormation.entity.Categorie;

@Service
public class CategorieService implements IcategorieService{
	
	@Autowired
	ICategorieDao cDao;
	
	// Ajouter Categorie
	public void AjoutCat(Categorie c) {
		cDao.save(c);
	}
	
	// Afficher toutes les Categories
	public List<Categorie> getAllCat(){
		return cDao.findAll();
	}
	// Selectionner par Id
	public Optional<Categorie> selectById(int id){
		return cDao.findById(id);
	}
	
	// Modifier Categorie
	public void ModifCat(Categorie c) {
		cDao.save(c);
	}
	
	// Supprimer Categorie
	public void SuppCat(int id) {
		cDao.deleteById(id);
	}
}
