import { JsonPipe, NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
export class StyledTextsComponent {
  defaultText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis sem ligula, vel ultricies leo rutrum ac. Nam pharetra tellus vel maximus scelerisque. Pellentesque quis consectetur lorem. Pellentesque in rhoncus purus. Morbi nunc lorem, tempus a risus a, faucibus imperdiet orci. Aliquam tincidunt eleifend malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed feugiat velit eget risus gravida molestie. Etiam non neque luctus, maximus turpis vitae, fringilla est. Suspendisse vitae quam ut lectus pellentesque hendrerit non eu purus. Sed pharetra vitae orci a placerat. Ut blandit dui vitae pharetra congue. Mauris ullamcorper enim non pharetra blandit. Etiam commodo tristique sollicitudin. Aenean urna risus, tempor vel metus in, rutrum consectetur eros.';

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
