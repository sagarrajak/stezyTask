import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
  type : ENUMFormTypes;
  placeholder: string;
  name: string;
  options?: IOptions[]|IFormSelect[]; 
}

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public formParameterArray: IFormObject[] = [];
  public createdFormGroup: FormGroup;

  constructor() { }

  public addNewValue(value: IFormObject): void {

  }

  public deleteAtIndex(index: number): void {
    if(index>=0 && !isNaN(index)) {
        this.formParameterArray.splice(index, 1);
    }
  }

  public resetAllValue(): void {
    this.createdFormGroup = new FormGroup({});
    this.formParameterArray = [];
  }

}
