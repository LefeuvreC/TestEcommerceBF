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

import com.intiFormation.entity.Categorie;
import com.intiFormation.service.IcategorieService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class CategorieController {
	
	@Autowired
	IcategorieService cService;
	
	// Toutes les Categories
	@GetMapping("/categories")
	public List<Categorie> cherchertt(){
		List<Categorie> liste = cService.getAllCat();
		return liste;
	}
	
	// Toutes les Categories client
		@GetMapping("/categoriesclient")
		public List<Categorie> chercherttclient(){
			List<Categorie> liste = cService.getAllCat();
			return liste;
		}
	
	// Ajouter Catégorie
	@PostMapping("/categories")
	public void ajouter(@RequestBody Categorie c) {
		cService.AjoutCat(c);
	}
	
	// Supprimer Categorie
	@DeleteMapping("/categories/{id}")
	public void supprimer(@PathVariable("id") int id) {
		cService.SuppCat(id);
	}
	
	// Modifier Categorie
	@PutMapping("/categories")
	public void modifier(@RequestBody Categorie c) {
		cService.AjoutCat(c);
	}
	
	// Rechercher par Id Categorie
	@GetMapping("/categories/{id}")
	public Categorie chercherId(@PathVariable("id") int id) {
		Categorie c = cService.selectById(id).get();
		return c;
	}
	

}
