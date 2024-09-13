import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCdtComponent } from './custom-cdt.component';

describe('CustomCdtComponent', () => {
  let component: CustomCdtComponent;
  let fixture: ComponentFixture<CustomCdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomCdtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
