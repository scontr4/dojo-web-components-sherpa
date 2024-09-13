import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCdtComponent } from './open-cdt.component';

describe('OpenCdtComponent', () => {
  let component: OpenCdtComponent;
  let fixture: ComponentFixture<OpenCdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenCdtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenCdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
