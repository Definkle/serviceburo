import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledTextsComponent } from './styled-texts.component';

describe('StyledTextsComponent', () => {
  let component: StyledTextsComponent;
  let fixture: ComponentFixture<StyledTextsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyledTextsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StyledTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
