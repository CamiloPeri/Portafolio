import { Component, Input, OnInit } from '@angular/core';
import { ColorButtons } from 'src/constants/color-buttons';

@Component({
  selector: 'app-button-solid',
  templateUrl: './button-solid.component.html',
  styleUrls: ['./button-solid.component.scss'],
})
export class ButtonSolidComponent implements OnInit {
  @Input() color: ColorButtons = 'primary';
  @Input() disabled: boolean = false;
  @Input() text: string = 'Enviar';
  public buttonClass: string = 'button';

  ngOnInit(): void {}

  getAction() {}
}
