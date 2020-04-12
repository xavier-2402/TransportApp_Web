import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportistaTarjetaComponent } from './transportista-tarjeta.component';

describe('TransportistaTarjetaComponent', () => {
  let component: TransportistaTarjetaComponent;
  let fixture: ComponentFixture<TransportistaTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportistaTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportistaTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
