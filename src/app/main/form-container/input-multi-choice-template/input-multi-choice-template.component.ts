import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFormObject } from 'src/app/main.service';

@Component({
  selector: 'task-input-multi-choice-template',
  templateUrl: './input-multi-choice-template.component.html',
  styleUrls: ['./input-multi-choice-template.component.scss']
})
export class InputMultiChoiceTemplateComponent {
  @Input('group') group: FormGroup;
  @Input('parameter') parameter: IFormObject;
  constructor() { }
}
