import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioWelcomeScreenComponent } from './portfolio-welcome-screen.component';

describe('PortfolioWelcomeScreenComponent', () => {
  let component: PortfolioWelcomeScreenComponent;
  let fixture: ComponentFixture<PortfolioWelcomeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioWelcomeScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioWelcomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
