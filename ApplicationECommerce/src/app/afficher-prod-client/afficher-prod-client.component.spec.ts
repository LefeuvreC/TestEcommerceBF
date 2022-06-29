import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherProdClientComponent } from './afficher-prod-client.component';

describe('AfficherProdClientComponent', () => {
  let component: AfficherProdClientComponent;
  let fixture: ComponentFixture<AfficherProdClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherProdClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherProdClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
