package com.intiFormation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.intiFormation.entity.Produit;

public interface IProduitDao extends JpaRepository<Produit,Integer>{
	
	@Query("select p from Produit p join p.categorie c where c.idCategorie=:n")
	public List<Produit> chercherParCat(@Param("n") int idcat);
	
	public Produit getByLibProduit(String libProduit);
	
	
	

}
