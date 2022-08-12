import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAgenciasComponent } from './update-agencias.component';

describe('UpdateAgenciasComponent', () => {
  let component: UpdateAgenciasComponent;
  let fixture: ComponentFixture<UpdateAgenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAgenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAgenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
