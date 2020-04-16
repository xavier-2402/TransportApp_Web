import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoTarjetaComponent } from './vehiculo-tarjeta.component';

describe('VehiculoTarjetaComponent', () => {
  let component: VehiculoTarjetaComponent;
  let fixture: ComponentFixture<VehiculoTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculoTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
