package com.intiFormation.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IroleDao;
import com.intiFormation.entity.Role;

@Service
public class RoleService implements IRoleService{
	
	@Autowired
	IroleDao rDao;
	
	// Ajouter Role
		public void AjoutRole(Role r) {
			rDao.save(r);
		}
		
		// Afficher toutes les Roles
		public List<Role> getAllRole(){
			return rDao.findAll();
		}
		// Selectionner par Id
		public Optional<Role> selectById(int id){
			return rDao.findById(id);
		}
		
		// Modifier Role
		public void ModifRole(Role r) {
			rDao.save(r);
		}
		
		// Supprimer Role
		public void SuppRole(int id) {
			rDao.deleteById(id);
		}

}
