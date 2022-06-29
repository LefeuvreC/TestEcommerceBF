package com.intiFormation.controller;

import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.intiFormation.entity.Categorie;
import com.intiFormation.entity.Produit;
import com.intiFormation.service.IcategorieService;
import com.intiFormation.service.IproduitService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class ProduitController {
	
	@Autowired
	IproduitService pService;
	@Autowired
	IcategorieService cService;
	
	// Tous les produits
	@GetMapping("/produits")
	public List<Produit> affichertt(){
		List<Produit> liste = pService.getAllProd();
		return liste;
	}
	
	// Tous les produits client
		@GetMapping("/produitsclient")
		public List<Produit> afficherttclient(){
			List<Produit> liste = pService.getAllProd();
			return liste;
		}
	
	// Ajouter Produit
	@PostMapping("/produits")
	public ResponseEntity<Object> ajouter( @RequestParam("file") MultipartFile file, HttpSession s,
			@RequestParam("libProduit") String libProduit,@RequestParam("quantite") int quantite,
			@RequestParam("idcategorie") int c) {
		String filename= file.getOriginalFilename();
		String path=s.getServletContext().getRealPath("/")+"images\\"+filename;
		Produit p = new Produit();
		p.setImg("images\\"+filename);
		p.setLibProduit(libProduit);
		p.setQuantite(quantite);
		p.setCategorie(cService.selectById(c).get());
		pService.AjoutProduit(p);
		

		try{  
	        byte barr[]=file.getBytes();  
	          
	        BufferedOutputStream bout=new BufferedOutputStream(  
	                 new FileOutputStream(path));  
	        bout.write(barr);  
	        bout.flush();  
	        bout.close();  
	          
	        }catch(Exception e)
			{
	        	e.printStackTrace();
			}
		
		return new ResponseEntity<Object>("Le produit a bien été ajouté", HttpStatus.OK);
		
	}
	
	// ajouterProduit Sans enregistrer l'image
	@PostMapping("/ajouterproduit")
	public void ajouter(@RequestBody Produit p) {
		pService.AjoutProduit(p);
	}

	// Supprimer Produit
	@DeleteMapping("/produits/{id}")
	public void supprimer(@PathVariable("id") int id) {
		pService.SuppProduit(id);
	}
	
	// Modifier Produit
	@PutMapping("/produits")
	public ResponseEntity<Object> modif( @RequestParam("file") MultipartFile file, HttpSession s,
			@RequestParam("libProduit") String libProduit,@RequestParam("quantite") int quantite,
			@RequestParam("idcategorie") int c,@RequestParam("idproduit") int idp) {
		String filename= file.getOriginalFilename();
		String path=s.getServletContext().getRealPath("/")+"images\\"+filename;
		Produit p = pService.selectProdById(idp).get();
		p.setImg("\\images\\"+filename);
		p.setLibProduit(libProduit);
		p.setQuantite(quantite);
		p.setCategorie(cService.selectById(c).get());
		pService.AjoutProduit(p);
		

		try{  
	        byte barr[]=file.getBytes();  
	          
	        BufferedOutputStream bout=new BufferedOutputStream(  
	                 new FileOutputStream(path));  
	        bout.write(barr);  
	        bout.flush();  
	        bout.close();  
	          
	        }catch(Exception e)
			{
	        	e.printStackTrace();
			}
		
		return new ResponseEntity<Object>("Le produit a bien été ajouté", HttpStatus.OK);
		
	}
	
	// modifier sans image
		@PutMapping("/modifproduit")
		public void modifier(@RequestBody Produit p) {
			pService.AjoutProduit(p);
		}
	
	
	// Rechercher par Id Produit
	@GetMapping("/produits/{id}")
	public Produit chercherId(@PathVariable("id") int id) {
		Produit p = pService.selectProdById(id).get();
		return p;
	}
	// Afficher les Produits par cat
	@GetMapping("/produitIdCat/{id}")
	public List<Produit> afficherParCat(@PathVariable("id") int id){
		List<Produit> liste = pService.getbyCat(id);
		return liste;
	}
	// Afficher les Produits par cat client
		@GetMapping("/produitIdCatClient/{id}")
		public List<Produit> afficherParCatClient(@PathVariable("id") int id){
			List<Produit> liste = pService.getbyCat(id);
			return liste;
		}
		
	@PostMapping("/uploadFile")
	public void uploadFile(@RequestParam("file") MultipartFile file, HttpSession s) {
		String filename= file.getOriginalFilename();
		String path=s.getServletContext().getRealPath("/")+"images\\"+filename;
		
		

		try{  
	        byte barr[]=file.getBytes();  
	          
	        BufferedOutputStream bout=new BufferedOutputStream(  
	                 new FileOutputStream(path));  
	        bout.write(barr);  
	        bout.flush();  
	        bout.close();  
	          
	        }catch(Exception e)
			{
	        	e.printStackTrace();
			}
	}
	
	@GetMapping("/produitsNom/{lib}")
	public Produit rechercerParLibProduit(@PathVariable("lib") String lib) {
		return pService.selectProdByLib(lib);
	}
			
}
