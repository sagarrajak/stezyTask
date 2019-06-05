import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

export enum ENUMFormTypes {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  DROP_DOWN = 'drop_down',
  CHECKBOXES = 'checkboxes',
  MULTIPLE_CHOICE = 'multiple_choice'
}

export interface IFormSelect {
  value: string;
  viewValue: string;
}

export interface IOptions {
  value: string;
  label: string;
}

export interface IFormObject {
  type: ENUMFormTypes;
  placeholder: string;
  isRequired: '1'|'0',
  name: string;
  options?: IOptions[] | IFormSelect[];
}

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public formParameterArray: IFormObject[] = [];
  public createdFormGroup: FormGroup;

  constructor(
    private messager: MessageService
  ) { 
    this.createdFormGroup = new FormGroup({}),
    this.formParameterArray = [];
  }

  public addNewValue(value: IFormObject): boolean {
    let valueToAdd: any;
    if (value.type === ENUMFormTypes.MULTIPLE_CHOICE) valueToAdd = [];
    else valueToAdd = '';
    if (this.createdFormGroup.controls[value.name]) {
      console.error('Name already added');
      this.messager.add({
        'severity': 'error',
         'summary': 'Another field with same name exist!'
      })
      return false
    }
    else {
      if(value.isRequired === '0')
          this.createdFormGroup.addControl(value.name, new FormControl(valueToAdd));
      else 
          this.createdFormGroup.addControl(value.name, new FormControl(valueToAdd, Validators.required));
      this.formParameterArray.push(value);
      return true;
    }
  }

  public deleteAtIndex(index: number): void {
    if (index >= 0 && !isNaN(index)) {
      this.formParameterArray.splice(index, 1);
    }
  }

  public resetAllValue(): void {
    this.createdFormGroup = new FormGroup({});
    this.formParameterArray = [];
  }

}
