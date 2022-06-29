package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Role;

public interface IRoleService {
	
	// Ajouter Role
			public void AjoutRole(Role r);
			
			// Afficher toutes les Roles
			public List<Role> getAllRole();
			// Selectionner par Id
			public Optional<Role> selectById(int id);
			
			// Modifier Role
			public void ModifRole(Role r);
			
			// Supprimer Role
			public void SuppRole(int id);

}
