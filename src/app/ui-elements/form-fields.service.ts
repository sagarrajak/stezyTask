import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormFieldsService {
  public singleLineTextForm: FormGroup;
  public dorpDownTextForm: FormGroup;
  public multipleChoiceForm: FormGroup;
  public paragraphTextForm: FormGroup;
  public checkBoxForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.singleLineTextForm = this.fb.group({
       name:  ['', Validators.required],
       placeholder: ['', Validators.required],
       isRequired: ['0', Validators.required]
    });

    this.dorpDownTextForm = this.fb.group({
      name:  ['', Validators.required],
      placeholder: ['', Validators.required],
      isRequired: ['0', Validators.required],
      options: this.fb.array([this.getSelectForm()])
    });

    this.paragraphTextForm = this.fb.group({  
      name: ['', Validators.required],
      placeholder: ['', Validators.required],
      isRequired: ['0', Validators.required]
    });

    this.multipleChoiceForm = this.fb.group({

    });

    this.checkBoxForm = this.fb.group({

    });
  }


  public getSelectForm(): FormGroup {
    return new FormGroup({
      value: new FormControl('', Validators.required),
      viewValue: new FormControl('', Validators.required)
    });
  }


  public deleteSelectForm(index:  number): void {
    let optionsArray: FormArray = this.dorpDownTextForm.get('options') as FormArray;
    if(index>=0 && optionsArray.length>0)
       optionsArray.removeAt(index);
  }

  public addSelectForm(): void {
    let optionsArray: FormArray = this.dorpDownTextForm.get('options') as FormArray;
    optionsArray.push(this.getSelectForm());
  }
  
}
