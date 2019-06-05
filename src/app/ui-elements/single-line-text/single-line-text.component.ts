import { Component, OnInit } from '@angular/core';
import { FormFieldsService } from '../form-fields.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-single-line-text',
  templateUrl: './single-line-text.component.html',
  styleUrls: ['./single-line-text.component.scss']
})
export class SingleLineTextComponent implements OnInit {

  constructor(public form: FormFieldsService, private messageService: MessageService) { }

  ngOnInit() {
  }

  public formSubmit(): void {
    if(!this.form.singleLineTextForm.valid){
      this.messageService.add({
          severity: 'error',
          summary: 'Invalid form!'
      });
      this.form.singleLineTextForm.markAllAsTouched();
    }
    else {
      console.log(this.form.singleLineTextForm.value);
    }
  }
}
