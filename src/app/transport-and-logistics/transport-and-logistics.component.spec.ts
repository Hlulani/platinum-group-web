import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportAndLogisticsComponent } from './transport-and-logistics.component';

describe('TransportAndLogisticsComponent', () => {
  let component: TransportAndLogisticsComponent;
  let fixture: ComponentFixture<TransportAndLogisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportAndLogisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportAndLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
