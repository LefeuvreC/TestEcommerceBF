import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherProduitParCommandeComponent } from './afficher-produit-par-commande.component';

describe('AfficherProduitParCommandeComponent', () => {
  let component: AfficherProduitParCommandeComponent;
  let fixture: ComponentFixture<AfficherProduitParCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherProduitParCommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherProduitParCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
