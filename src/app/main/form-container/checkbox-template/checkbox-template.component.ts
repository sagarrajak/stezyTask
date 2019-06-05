import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFormObject } from 'src/app/main.service';

@Component({
  selector: 'task-checkbox-template',
  templateUrl: './checkbox-template.component.html',
  styleUrls: ['./checkbox-template.component.scss']
})
export class CheckboxTemplateComponent  {
  @Input('group') group: FormGroup;
  @Input('parameter') parameter: IFormObject;
  constructor() { }
}
