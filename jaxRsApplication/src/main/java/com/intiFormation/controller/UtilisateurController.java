package com.intiFormation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.intiFormation.entity.Role;
import com.intiFormation.entity.Utilisateur;
import com.intiFormation.service.IRoleService;
import com.intiFormation.service.IutilisateurService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class UtilisateurController {
	
	@Autowired
	IutilisateurService uService;
	@Autowired
	IRoleService rService;
	@Autowired
	BCryptPasswordEncoder bc;
	
	// Tous les Utilisateurs
		@GetMapping("/utilisateurs")
		public List<Utilisateur> affichertt(){
			List<Utilisateur> liste = uService.getAllUtilisateur();
			return liste;
		}
		
		
		// ajouter utilisateur
		@PostMapping("/utilisateurs")
		public void ajouter(@RequestBody Utilisateur u) {
			
			Role r=rService.selectById(2).get();
			u.setRole(r);
		
			u.setPassword(bc.encode(u.getPassword()));
			uService.AjoutUtilisateur(u);
		}
		
		
		// ajouter utilisateur
				@PostMapping("/utilisateurs/{id}")
				public void ajouter2(@RequestBody Utilisateur u, @PathVariable("id") int idRole) {
					
					Role r=rService.selectById(idRole).get();
					u.setRole(r);
				
					u.setPassword(bc.encode(u.getPassword()));
					uService.AjoutUtilisateur(u);
				}
				
				
	// chercher par username
		@GetMapping("/utilisateurParUsername/{username}")
		public Utilisateur recherher(@PathVariable("username") String username) {
			return uService.chercherParUsername(username);
		}

}
