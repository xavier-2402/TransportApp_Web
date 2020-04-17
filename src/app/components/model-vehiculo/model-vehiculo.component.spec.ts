import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelVehiculoComponent } from './model-vehiculo.component';

describe('ModelVehiculoComponent', () => {
  let component: ModelVehiculoComponent;
  let fixture: ComponentFixture<ModelVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
