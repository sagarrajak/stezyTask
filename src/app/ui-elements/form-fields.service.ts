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
      name: ['', Validators.required],
      placeholder: ['', Validators.required],
      isRequired: ['0', Validators.required]
    });

    this.dorpDownTextForm = this.fb.group({
      name: ['', Validators.required],
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
      name: ['', Validators.required],
      placeholder: ['', Validators.required],
      isRequired: ['0', Validators.required],
      options: this.fb.array([this.getLabelArray()])
    });

    this.checkBoxForm = this.fb.group({
      name: ['', Validators.required],
      placeholder: ['', Validators.required],
      isRequired: ['0', Validators.required],
      options: this.fb.array([this.getLabelArray()])
    });
  }


  public getSelectForm(): FormGroup {
    return new FormGroup({
      value: new FormControl('', Validators.required),
      viewValue: new FormControl('', Validators.required)
    });
  }

  public getLabelArray(): FormGroup {
    return new FormGroup({
      label: new FormControl('', Validators.required),
      value: new FormControl('', Validators.required)
    });
  }

  public resetSingleLineTextForm(): void {
    this.singleLineTextForm = this.fb.group({
      name: ['', Validators.required],
      placeholder: ['', Validators.required],
      isRequired: ['0', Validators.required]
    });
  }

  public resetParagraphTexForm(): void {
    this.paragraphTextForm = this.fb.group({
      name: ['', Validators.required],
      placeholder: ['', Validators.required],
      isRequired: ['0', Validators.required]
    });
  }

  public resetDropDownForm(): void {
    this.dorpDownTextForm = this.fb.group({
      name: ['', Validators.required],
      placeholder: ['', Validators.required],
      isRequired: ['0', Validators.required],
      options: this.fb.array([this.getSelectForm()])
    });
  }

  public resetMultipleChoiceForm(): void {
    this.multipleChoiceForm = this.fb.group({
      name: ['', Validators.required],
      placeholder: ['', Validators.required],
      isRequired: ['0', Validators.required],
      options: this.fb.array([this.getLabelArray()])
    });
  }

  public resetCheckboxForm(): void {
    this.checkBoxForm = this.fb.group({
      name: ['', Validators.required],
      placeholder: ['', Validators.required],
      isRequired: ['0', Validators.required],
      options: this.fb.array([this.getLabelArray()])
    });
  }

}
