import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherProduitParCatClientComponent } from './afficher-produit-par-cat-client.component';

describe('AfficherProduitParCatClientComponent', () => {
  let component: AfficherProduitParCatClientComponent;
  let fixture: ComponentFixture<AfficherProduitParCatClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherProduitParCatClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherProduitParCatClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
