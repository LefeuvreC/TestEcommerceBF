package com.intiFormation.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Commande {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int idCommande;
	private LocalDate dateCommande;
	
	@ManyToOne
	@JoinColumn(name="idUtilisateur")
	private Utilisateur utilisateur;
	
	@OneToMany(mappedBy="commandes")
	@JsonIgnore
	 private List<LigneCommande> ligneCommandes;
	
	 public List<LigneCommande> getLigneCommandes() {
		return ligneCommandes;
	}
	public void setLigneCommandes(List<LigneCommande> ligneCommandes) {
		this.ligneCommandes = ligneCommandes;
	}

	public Commande() {
		super();
		ligneCommandes = new ArrayList<>();
	}
	public int getIdCommande() {
		return idCommande;
	}
	public void setIdCommande(int idCommande) {
		this.idCommande = idCommande;
	}
	public LocalDate getDateCommande() {
		return dateCommande;
	}
	public void setDateCommande(LocalDate dateCommande) {
		this.dateCommande = dateCommande;
	}
	public Utilisateur getUtilisateur() {
		return utilisateur;
	}
	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	
	public Commande(int idCommande, LocalDate dateCommande, Utilisateur utilisateur,
			List<LigneCommande> ligneCommandes) {
		super();
		this.idCommande = idCommande;
		this.dateCommande = dateCommande;
		this.utilisateur = utilisateur;
		this.ligneCommandes = ligneCommandes;
	}
	public Commande(LocalDate dateCommande) {
		super();
		this.dateCommande = dateCommande;
	}
	@Override
	public String toString() {
		String chaine ="Commande : ";
		if(ligneCommandes == null)
			return chaine;
		if(ligneCommandes != null) {
			for(LigneCommande l : ligneCommandes) {
				chaine+="\n\t" + l.toString();
			}
		}
		return chaine;
	}
	
	
	
}
