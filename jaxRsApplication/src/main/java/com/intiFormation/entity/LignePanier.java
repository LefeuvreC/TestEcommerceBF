package com.intiFormation.entity;



public class LignePanier {

	private int idLignePanier;
	private int quantite;
	
	private Panier panier;

	private Produit produit;
	
	public LignePanier() {
		super();
	}
	public int getIdLignePanier() {
		return idLignePanier;
	}
	public void setIdLignePanier(int idLignePanier) {
		this.idLignePanier = idLignePanier;
	}
	public int getQuantite() {
		return quantite;
	}
	public void setQuantite(int quantite) {
		this.quantite = quantite;
	}
	public Panier getPanier() {
		return panier;
	}
	public void setPanier(Panier panier) {
		this.panier = panier;
	}
	public Produit getProduit() {
		return produit;
	}
	public void setProduit(Produit produit) {
		this.produit = produit;
	}
	public LignePanier(int quantite, Produit produit) {
		super();
		this.quantite = quantite;
		this.produit = produit;
	}
	public LignePanier(int quantite, Panier panier, Produit produit) {
		super();
		this.quantite = quantite;
		this.panier = panier;
		this.produit = produit;
	}
	


	
	

}
