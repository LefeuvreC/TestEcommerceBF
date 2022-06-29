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

import com.intiFormation.entity.Commande;
import com.intiFormation.service.Icommandeservice;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class CommandeController {
	
	@Autowired
	Icommandeservice commandeService;
	
	// Toutes les Commandes
	@GetMapping("/commandes")
	public List<Commande> affichertt(){
		List<Commande> liste = commandeService.getAllCommande();
		return liste;
	}
	
	// Ajouter Commande
	@PostMapping("/commandes")
	public Commande ajouter(@RequestBody Commande c) {
		commandeService.AjoutCommande(c);
		return c;
	}
	
	// Supprimer Commande
	@DeleteMapping("/commandes/{id}")
	public void supprimer(@PathVariable("id") int id) {
		commandeService.SuppCommande(id);
	}
	
	// Modifier Commande
	@PutMapping("/commandes")
	public void modifier(@RequestBody Commande c) {
		commandeService.AjoutCommande(c);
	}
	
	// Rechercher par Id Commande
	@GetMapping("/commandes/{id}")
	public Commande chercherId(@PathVariable("id") int id) {
		Commande c = commandeService.selectCommandeById(id).get();
		return c;
	}

}
