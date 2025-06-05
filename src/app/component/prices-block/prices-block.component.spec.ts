import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesBlockComponent } from './prices-block.component';

describe('PricesBlockComponent', () => {
  let component: PricesBlockComponent;
  let fixture: ComponentFixture<PricesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricesBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PricesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
