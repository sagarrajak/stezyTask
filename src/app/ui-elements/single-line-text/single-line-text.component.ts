import { Component, OnInit } from '@angular/core';
import { FormFieldsService } from '../form-fields.service';
import { MessageService, DynamicDialogRef } from 'primeng/api';
import { MainService, ENUMFormTypes } from 'src/app/main.service';

@Component({
  selector: 'app-single-line-text',
  templateUrl: './single-line-text.component.html',
  styleUrls: ['./single-line-text.component.scss']
})
export class SingleLineTextComponent {

  constructor(public form: FormFieldsService, 
    private messageService: MessageService,
    public mainService: MainService,
    private ref: DynamicDialogRef
    ) {}

  public formSubmit(): void {
    if(!this.form.singleLineTextForm.valid){
      this.messageService.add({
          severity: 'error',
          summary: 'Invalid form!'
      });
      this.form.singleLineTextForm.markAllAsTouched();
    }
    else {
      this.mainService.addNewValue({
        ...this.form.singleLineTextForm.value,
        ...{type: ENUMFormTypes.INPUT}
      });
      this.ref.close();
    }
  }
}
