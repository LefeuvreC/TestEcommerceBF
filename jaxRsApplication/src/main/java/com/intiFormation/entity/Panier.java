package com.intiFormation.entity;

import java.util.ArrayList;
import java.util.List;



public class Panier {
	
	private int idPanier;
	private static int idPanierCpt =0;

	private List<LignePanier> lignePaniers;
	
	
	public List<LignePanier> getLignePaniers() {
		return lignePaniers;
	}

	public void setLignePaniers(List<LignePanier> lignePaniers) {
		this.lignePaniers = lignePaniers;
	}
	
	public int getIdPanier() {
		return idPanier;
	}

	public void setIdPanier(int idPanier) {
		this.idPanier = idPanier;
	}


	public Panier() {
		super();
		this.idPanier = idPanierCpt ++;
		lignePaniers = new ArrayList<>();
	}

	
	public String toString() {
		return "Panier [idPanier=" + idPanier + "]";
	}

	
	

}
