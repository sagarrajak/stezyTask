import { Component, OnInit } from '@angular/core';
import {DialogService} from 'primeng/api';
import { SingleLineTextComponent } from '../ui-elements/single-line-text/single-line-text.component';
import { ParagraphTextComponent } from '../ui-elements/paragraph-text/paragraph-text.component';
import { MultipleChoiceComponent } from '../ui-elements/multiple-choice/multiple-choice.component';
import { DropDownComponent } from '../ui-elements/drop-down/drop-down.component';
import { CheckboxComponent } from '../ui-elements/checkbox/checkbox.component';

@Component({
  selector: 'task-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [DialogService]
})
export class MainComponent implements OnInit {

  constructor(public dialogService: DialogService) { }

  ngOnInit() {
  }

  public openDialogInputSingleLine(): void {
      this.dialogService.open(SingleLineTextComponent, {
        header: 'Add Input Field',
        width: '30%'
      })
  }


  public openDialogInputParagraph(): void {
    this.dialogService.open(ParagraphTextComponent, {
      header: 'Add Text Area',
      width: '30%'
    })
  }

  public openDialogInputMultipleChoice(): void {
    this.dialogService.open(MultipleChoiceComponent, {
      header: 'Add Multiple Choice',
      width: '30%'
    });
  }

  public openDialogInputDropDown(): void {
    this.dialogService.open(DropDownComponent, {
      header: 'Add Dropdown',
      width: '30%'
    });
  }

  public openDialogInputCheckbox(): void {
    this.dialogService.open(CheckboxComponent, {
      header: 'Add checkbox',
      width: '20%'
    });
  }


}
