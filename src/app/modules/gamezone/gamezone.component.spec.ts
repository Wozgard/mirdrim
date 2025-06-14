import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamezoneComponent } from './gamezone.component';

describe('GamezoneComponent', () => {
  let component: GamezoneComponent;
  let fixture: ComponentFixture<GamezoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamezoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamezoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
