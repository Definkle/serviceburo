import { JsonPipe, NgClass, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DEFAULT_TEXT } from '../../../assets/data/example';

@Component({
  selector: 'app-styled-texts',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgClass,
    NgStyle,
    JsonPipe,
  ],
  templateUrl: './styled-texts.component.html',
  styleUrl: './styled-texts.component.scss',
})
export class StyledTextsComponent implements OnInit {
  defaultText = DEFAULT_TEXT;
  textForm = new FormGroup({
    text: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });
  currentValue: string = this.defaultText;

  ngOnInit(): void {
    this.textForm.disable();
  }

  updateText(): void {
    this.currentValue = this.textForm.controls.text.getRawValue() as string;
    this.textForm.reset();
    this.textForm.disable();
  }

  cancelOperation(): void {
    this.textForm.reset();
    this.textForm.disable();
  }
}
