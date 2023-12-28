import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StyledTextsComponent } from './styled-texts.component';

describe('StyledTextsComponent', () => {
  let component: StyledTextsComponent;
  let fixture: ComponentFixture<StyledTextsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, StyledTextsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StyledTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
