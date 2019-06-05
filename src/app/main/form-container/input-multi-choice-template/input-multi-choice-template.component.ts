import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IFormObject } from 'src/app/main.service';

@Component({
  selector: 'app-input-multi-choice-template',
  templateUrl: './input-multi-choice-template.component.html',
  styleUrls: ['./input-multi-choice-template.component.scss']
})
export class InputMultiChoiceTemplateComponent implements OnInit {
  @Input('group') group: FormGroup;
  @Input('control') control: FormControl;
  @Input('parameter') parameter: IFormObject;
  
  constructor() { }

  ngOnInit() {
  }

}
