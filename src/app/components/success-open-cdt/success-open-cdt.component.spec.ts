import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessOpenCdtComponent } from './success-open-cdt.component';

describe('SuccessOpenCdtComponent', () => {
  let component: SuccessOpenCdtComponent;
  let fixture: ComponentFixture<SuccessOpenCdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessOpenCdtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessOpenCdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
