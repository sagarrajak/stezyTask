import { Component } from '@angular/core';
import { DialogService } from 'primeng/api';
import { CheckboxComponent } from '../ui-elements/checkbox/checkbox.component';
import { DropDownComponent } from '../ui-elements/drop-down/drop-down.component';
import { MultipleChoiceComponent } from '../ui-elements/multiple-choice/multiple-choice.component';
import { ParagraphTextComponent } from '../ui-elements/paragraph-text/paragraph-text.component';
import { SingleLineTextComponent } from '../ui-elements/single-line-text/single-line-text.component';
import { FormFieldsService } from '../ui-elements/form-fields.service';

@Component({
  selector: 'task-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [DialogService]
})
export class MainComponent {

  constructor(public dialogService: DialogService, public form: FormFieldsService) { }

  public openDialogInputSingleLine(): void {
      const ref = this.dialogService.open(SingleLineTextComponent, {
        header: 'Add Input Field',
        width: '30%',
        closeOnEscape: false,
      })
      ref.onClose.subscribe(()=> {
        this.form.resetSingleLineTextForm();
      })
  }


  public openDialogInputParagraph(): void {
    const ref  = this.dialogService.open(ParagraphTextComponent, {
      header: 'Add Text Area',
      width: '30%',
      closeOnEscape: false
    });
    ref.onClose.subscribe(()=> {
      this.form.resetParagraphTexForm();
    })
  }

  public openDialogInputMultipleChoice(): void {
   const ref =  this.dialogService.open(MultipleChoiceComponent, {
      header: 'Add Multiple Choice',
      width: '30%',
      closeOnEscape: false
    });
    ref.onClose.subscribe(()=> {
      this.form.resetMultipleChoiceForm();
    })
  }

  public openDialogInputDropDown(): void {
    const ref =  this.dialogService.open(DropDownComponent, {
      header: 'Add Dropdown',
      width: '30%',
      closeOnEscape: false
    });
    ref.onClose.subscribe(()=> {
      this.form.resetDropDownForm();
    })
  }

  public openDialogInputCheckbox(): void {
   const ref =  this.dialogService.open(CheckboxComponent, {
      header: 'Add checkbox',
      width: '30%',
      closeOnEscape: false
    });
    ref.onClose.subscribe(()=> {
      this.form.resetCheckboxForm();
    })
  }


}
