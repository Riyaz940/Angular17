import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularfeaturesComponent } from './angularfeatures.component';

describe('AngularfeaturesComponent', () => {
  let component: AngularfeaturesComponent;
  let fixture: ComponentFixture<AngularfeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularfeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularfeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
