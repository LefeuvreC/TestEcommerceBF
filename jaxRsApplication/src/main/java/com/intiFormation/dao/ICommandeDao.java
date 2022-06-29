package com.intiFormation.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Commande;
import com.intiFormation.entity.Utilisateur;

public interface ICommandeDao extends JpaRepository<Commande, Integer>{
	
	//public Commande findByUtilsateur(Utilisateur u);
	
	//public Optional<Commande> selectByIdCommande(int idCommande);

}
