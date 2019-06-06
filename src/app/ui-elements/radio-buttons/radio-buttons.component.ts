import { Component } from '@angular/core';
import { FormArray } from '@angular/forms';
import { DynamicDialogRef, MessageService } from 'primeng/api';
import { ENUMFormTypes, MainService } from 'src/app/main.service';
import { FormFieldsService } from '../form-fields.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.scss']
})
export class RadioButtonsComponent {

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
      if(this.mainService.addNewValue({
        ...this.form.checkBoxForm.value,
        ...{type: ENUMFormTypes.CHECKBOXES}
      }))
      this.ref.close();
    }
  }

  public deleteRadioButtonsFormOption(index: number): void {
    let optionsArray: FormArray = this.form.checkBoxForm.get('options') as FormArray;
    if (index >= 0 && optionsArray.length > 0)
      optionsArray.removeAt(index);
  }

  public addRadioButtonsOption(): void {
    let optionsArray: FormArray = this.form.checkBoxForm.get('options') as FormArray;
    optionsArray.push(this.form.getLabelArray());
  }
}
