import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IFormObject } from 'src/app/main.service';

@Component({
  selector: 'app-input-single-line-template',
  templateUrl: './input-single-line-template.component.html',
  styleUrls: ['./input-single-line-template.component.scss']
})
export class InputSingleLineTemplateComponent  {

  @Input('group') group: FormGroup;
  @Input('parameter') parameter: IFormObject;
  
  constructor() { }

 

}
