import { Component } from '@angular/core';
import { MessageService, DynamicDialogRef } from 'primeng/api';
import { FormFieldsService } from '../form-fields.service';
import { MainService, ENUMFormTypes } from 'src/app/main.service';

@Component({
  selector: 'app-paragraph-text',
  templateUrl: './paragraph-text.component.html',
  styleUrls: ['./paragraph-text.component.scss']
})
export class ParagraphTextComponent  {

  constructor(public form: FormFieldsService, 
    private messageService: MessageService,
    private mainService: MainService,
    private ref: DynamicDialogRef
  ) {  }

  public formSubmit(): void {
    if(!this.form.paragraphTextForm.valid){
      this.messageService.add({
          severity: 'error',
          summary: 'Invalid form!'
      });
      this.form.paragraphTextForm.markAllAsTouched();
    }
    else {
      this.mainService.addNewValue({
        ...this.form.paragraphTextForm.value,
        ...{type: ENUMFormTypes.TEXTAREA}
      });
      this.ref.close();
    }
  }

}
