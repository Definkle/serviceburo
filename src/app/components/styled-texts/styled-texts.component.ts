import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
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
  ],
  templateUrl: './styled-texts.component.html',
  styleUrl: './styled-texts.component.scss',
})
export class StyledTextsComponent {
  defaultText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis sem ligula, vel ultricies leo rutrum ac. Nam pharetra tellus vel maximus scelerisque. Pellentesque quis consectetur lorem. Pellentesque in rhoncus purus. Morbi nunc lorem, tempus a risus a, faucibus imperdiet orci. Aliquam tincidunt eleifend malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed feugiat velit eget risus gravida molestie. Etiam non neque luctus, maximus turpis vitae, fringilla est. Suspendisse vitae quam ut lectus pellentesque hendrerit non eu purus. Sed pharetra vitae orci a placerat. Ut blandit dui vitae pharetra congue. Mauris ullamcorper enim non pharetra blandit. Etiam commodo tristique sollicitudin. Aenean urna risus, tempor vel metus in, rutrum consectetur eros.';
  textControl = new FormControl<string>('');
  currentValue: string = this.defaultText;

  ngOnInit(): void {
    this.textControl.disable();
  }

  updateText(): void {
    this.currentValue = this.textControl.getRawValue() as string;
    this.textControl.reset();
    this.textControl.disable();
  }
}
