import { Component, OnInit } from '@angular/core';
import { FormFieldsService } from '../form-fields.service';
import { MessageService, DynamicDialogRef } from 'primeng/api';
import { FormArray } from '@angular/forms';
import { MainService, ENUMFormTypes } from 'src/app/main.service';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss']
})
export class MultipleChoiceComponent {
  constructor(
    public form: FormFieldsService,
    private messageService: MessageService,
    private mainService: MainService,
    private ref: DynamicDialogRef
  ) {}

  public formSubmit(): void {
    if (!this.form.multipleChoiceForm.valid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Invalid form!'
      });
      this.form.multipleChoiceForm.markAllAsTouched();
    }
    else {
      if(this.mainService.addNewValue({
        ...this.form.multipleChoiceForm.value,
        ...{type: ENUMFormTypes.MULTIPLE_CHOICE}
      }))
      this.ref.close();
    }
  }

  public deleteMultipleChoiceFormOption(index: number): void {
    let optionsArray: FormArray = this.form.multipleChoiceForm.get('options') as FormArray;
    if (index >= 0 && optionsArray.length > 0)
      optionsArray.removeAt(index);
  }

  public addMultipleChoiceOption(): void {
    let optionsArray: FormArray = this.form.multipleChoiceForm.get('options') as FormArray;
    optionsArray.push(this.form.getLabelArray());
  }

}
