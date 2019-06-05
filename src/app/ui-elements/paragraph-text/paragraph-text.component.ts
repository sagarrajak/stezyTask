import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormFieldsService } from '../form-fields.service';

@Component({
  selector: 'app-paragraph-text',
  templateUrl: './paragraph-text.component.html',
  styleUrls: ['./paragraph-text.component.scss']
})
export class ParagraphTextComponent  {

  constructor(public form: FormFieldsService, private messageService: MessageService) {  }

  public formSubmit(): void {
    if(!this.form.paragraphTextForm.valid){
      this.messageService.add({
          severity: 'error',
          summary: 'Invalid form!'
      });
      this.form.paragraphTextForm.markAllAsTouched();
    }
    else {
      console.log(this.form.paragraphTextForm.value);
    }
  }

}
