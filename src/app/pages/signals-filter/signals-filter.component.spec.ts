import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsFilterComponent } from './signals-filter.component';

describe('SignalsFilterComponent', () => {
  let component: SignalsFilterComponent;
  let fixture: ComponentFixture<SignalsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
