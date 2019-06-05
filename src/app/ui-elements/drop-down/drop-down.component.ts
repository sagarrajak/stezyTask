import { Component, OnInit } from '@angular/core';
import { FormFieldsService } from '../form-fields.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent {

  constructor(
    public form: FormFieldsService, 
    private messageService: MessageService
  ) { 

  }

  public formSubmit(): void {
    if(!this.form.dorpDownTextForm.valid){
      this.messageService.add({
          severity: 'error',
          summary: 'Invalid form!'
      });
      this.form.dorpDownTextForm.markAllAsTouched();
    }
    else {
      console.log(this.form.dorpDownTextForm.value);
    }
  }

}
