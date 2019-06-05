import { Component } from '@angular/core';
import { FormArray } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FormFieldsService } from '../form-fields.service';
import { MainService, ENUMFormTypes } from 'src/app/main.service';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent {

  constructor(
    public form: FormFieldsService,
    private messageService: MessageService,
    private mainService: MainService
  ) {}

  public formSubmit(): void {
    if (!this.form.dorpDownTextForm.valid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Invalid form!'
      });
      this.form.dorpDownTextForm.markAllAsTouched();
    }
    else {
      this.mainService.addNewValue({
        ...this.form.dorpDownTextForm.value,
        ...{type: ENUMFormTypes.DROP_DOWN}
      });
    }
  }

  
  public deleteSelectFormOption(index: number): void {
    let optionsArray: FormArray = this.form.dorpDownTextForm.get('options') as FormArray;
    if (index >= 0 && optionsArray.length > 0)
      optionsArray.removeAt(index);
  }

  public addSelectFormOption(): void {
    let optionsArray: FormArray = this.form.dorpDownTextForm.get('options') as FormArray;
    optionsArray.push(this.form.getSelectForm());
  }

}
