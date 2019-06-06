import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFormObject } from 'src/app/main.service';

@Component({
  selector: 'task-radio-template',
  templateUrl: './radio-buttons-template.component.html',
  styleUrls: ['./radio-buttons-template.component.scss']
})
export class RadioButtonsTemplateComponent  {
  @Input('group') group: FormGroup;
  @Input('parameter') parameter: IFormObject;
  constructor() { }
}
