import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttDirectivesComponent } from './att-directives-component';

describe('AttDirectivesComponent', () => {
  let component: AttDirectivesComponent;
  let fixture: ComponentFixture<AttDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttDirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
