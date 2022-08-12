import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAgenciasComponent } from './details-agencias.component';

describe('DetailsAgenciasComponent', () => {
  let component: DetailsAgenciasComponent;
  let fixture: ComponentFixture<DetailsAgenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAgenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAgenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
