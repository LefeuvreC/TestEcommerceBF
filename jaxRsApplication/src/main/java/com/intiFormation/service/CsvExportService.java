package com.intiFormation.service;

import java.io.IOException;
import java.io.Writer;
import java.util.List;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVPrinter;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.ICommandeDao;
import com.intiFormation.entity.Commande;



@Service
public class CsvExportService implements ICsvExportService {
	

	private ICommandeDao cDao;

	public CsvExportService(ICommandeDao cDao) {
		this.cDao = cDao;
	}
	
    public void writeEmployeesToCsv(Writer writer) {

        List<Commande> commandes = cDao.findAll();
        try (CSVPrinter csvPrinter = new CSVPrinter(writer, CSVFormat.DEFAULT)) {
            for (Commande commande : commandes) {
                csvPrinter.printRecord(commande.getIdCommande(), commande.getUtilisateur().getNom(), 
                		commande.getUtilisateur().getPrenom(), commande.getDateCommande(), commande.getLigneCommandes());
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
	
	
}
