import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IFormObject } from 'src/app/main.service';

@Component({
  selector: 'app-input-paragraph-template',
  templateUrl: './input-paragraph-template.component.html',
  styleUrls: ['./input-paragraph-template.component.scss']
})
export class InputParagraphTemplateComponent{

  @Input('group') group: FormGroup;
  @Input('parameter') parameter: IFormObject;

  constructor() { }


}
