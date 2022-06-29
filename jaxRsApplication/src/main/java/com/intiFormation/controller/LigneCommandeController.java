package com.intiFormation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intiFormation.entity.LigneCommande;
import com.intiFormation.service.IligneCommandeService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class LigneCommandeController {
	
	@Autowired
	IligneCommandeService lcService;
	
	// Toutes les Lignes Commandes
	@GetMapping("/ligneCommandes")
	public List<LigneCommande> affichertt(){
		List<LigneCommande> liste = lcService.getAllLigneCommande();
		return liste;
	}
	
	// LigneCommande par Id Commande
	@GetMapping("/ligneCommandesIdCommande/{id}")
	public List<LigneCommande> afficherParCommande(@PathVariable("id") int id){
		List<LigneCommande> liste = lcService.findLigneCommandeByCommandes_idCommande(id);
		return liste;
	}
	
	// Ajouter LigneCommande
	@PostMapping("/ligneCommandes")
	public void ajouter(@RequestBody LigneCommande lc) {
		lcService.AjoutLigneCommande(lc);
	}
	
	// Supprimer LigneCommande
	@DeleteMapping("/ligneCommandes/{id}")
	public void supprimer(@PathVariable("id") int id) {
		lcService.SuppLigneCommande(id);
	}
		
	// Modifier LigneCommande
	@PutMapping("/ligneCommandes")
	public void modifier(@RequestBody LigneCommande lc) {
		lcService.AjoutLigneCommande(lc);
	}
		
	// Rechercher par Id LigneCommande
	@GetMapping("/ligneCommandes/{id}")
	public LigneCommande chercherId(@PathVariable("id") int id) {
		LigneCommande lc = lcService.selectLigneCommandeeById(id).get();
		return lc;
	}

}
