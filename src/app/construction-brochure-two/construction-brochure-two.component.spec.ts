import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionBrochureTwoComponent } from './construction-brochure-two.component';

describe('ConstructionBrochureTwoComponent', () => {
  let component: ConstructionBrochureTwoComponent;
  let fixture: ComponentFixture<ConstructionBrochureTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructionBrochureTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionBrochureTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
