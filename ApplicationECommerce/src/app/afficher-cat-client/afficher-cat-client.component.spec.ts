import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherCatClientComponent } from './afficher-cat-client.component';

describe('AfficherCatClientComponent', () => {
  let component: AfficherCatClientComponent;
  let fixture: ComponentFixture<AfficherCatClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherCatClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherCatClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
