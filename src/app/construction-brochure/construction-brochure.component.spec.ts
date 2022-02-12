import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionBrochureComponent } from './construction-brochure.component';

describe('ConstructionBrochureComponent', () => {
  let component: ConstructionBrochureComponent;
  let fixture: ComponentFixture<ConstructionBrochureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructionBrochureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionBrochureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
