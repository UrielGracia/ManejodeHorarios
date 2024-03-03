import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarMateriaModalComponent } from './actualizar-materia-modal.component';

describe('ActualizarMateriaModalComponent', () => {
  let component: ActualizarMateriaModalComponent;
  let fixture: ComponentFixture<ActualizarMateriaModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarMateriaModalComponent]
    });
    fixture = TestBed.createComponent(ActualizarMateriaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
