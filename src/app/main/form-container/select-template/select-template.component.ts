import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IFormObject } from 'src/app/main.service';

@Component({
  selector: 'app-select-template',
  templateUrl: './select-template.component.html',
  styleUrls: ['./select-template.component.scss']
})
export class SelectTemplateComponent {

  @Input('group') group: FormGroup;
  @Input('parameter') parameter: IFormObject;
  
  constructor() { }

 
}
