import { Component, OnInit } from '@angular/core';
import { FormFieldsService } from '../form-fields.service';
import { MessageService, DynamicDialogRef } from 'primeng/api';
import { FormArray } from '@angular/forms';
import { MainService, ENUMFormTypes } from 'src/app/main.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  constructor(
    public form: FormFieldsService,
    private messageService: MessageService,
    private mainService: MainService,
    private ref: DynamicDialogRef
  ) {}

  public formSubmit(): void {
    if (!this.form.checkBoxForm.valid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Invalid form!'
      });
      this.form.checkBoxForm.markAllAsTouched();
    }
    else {
      this.mainService.addNewValue({
        ...this.form.checkBoxForm.value,
        ...{type: ENUMFormTypes.CHECKBOXES}
      });
      this.ref.close();
    }
  }

  public deleteCheckboxFormOption(index: number): void {
    let optionsArray: FormArray = this.form.checkBoxForm.get('options') as FormArray;
    if (index >= 0 && optionsArray.length > 0)
      optionsArray.removeAt(index);
  }

  public addCheckboxOption(): void {
    let optionsArray: FormArray = this.form.checkBoxForm.get('options') as FormArray;
    optionsArray.push(this.form.getLabelArray());
  }
}
