import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Racconti } from './racconti';

describe('Racconti', () => {
  let component: Racconti;
  let fixture: ComponentFixture<Racconti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Racconti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Racconti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
