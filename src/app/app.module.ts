import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DynamicDialogModule } from 'primeng/components/dynamicdialog/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadioButtonsTemplateComponent } from './main/form-container/radio-buttons-template/radio-buttons-template.component';
import { FormContainerComponent } from './main/form-container/form-container.component';
import { InputMultiChoiceTemplateComponent } from './main/form-container/input-multi-choice-template/input-multi-choice-template.component';
import { InputParagraphTemplateComponent } from './main/form-container/input-paragraph-template/input-paragraph-template.component';
import { InputSingleLineTemplateComponent } from './main/form-container/input-single-line-template/input-single-line-template.component';
import { SelectTemplateComponent } from './main/form-container/select-template/select-template.component';
import { MainComponent } from './main/main.component';
import { RadioButtonsComponent } from './ui-elements/radio-buttons/radio-buttons.component';
import { DropDownComponent } from './ui-elements/drop-down/drop-down.component';
import { MultipleChoiceComponent } from './ui-elements/multiple-choice/multiple-choice.component';
import { ParagraphTextComponent } from './ui-elements/paragraph-text/paragraph-text.component';
import { SingleLineTextComponent } from './ui-elements/single-line-text/single-line-text.component';
import { ErrorMessageComponent } from './util/error-message/error-message.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DragDropModule } from 'primeng/dragdrop';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SingleLineTextComponent,
    ParagraphTextComponent,
    RadioButtonsComponent,
    DropDownComponent,
    MultipleChoiceComponent,
    FormContainerComponent,
    ErrorMessageComponent,
    RadioButtonsTemplateComponent,
    SelectTemplateComponent,
    InputParagraphTemplateComponent,
    InputSingleLineTemplateComponent,
    InputMultiChoiceTemplateComponent
  ],
  imports: [
    DynamicDialogModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    PanelModule,
    BrowserAnimationsModule,
    InputTextModule,
    FlexLayoutModule,
    CheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    RadioButtonModule,
    ToastModule,
    RadioButtonModule,
    DropdownModule,
    InputTextareaModule,
    DragDropModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  entryComponents: [
    RadioButtonsComponent,
    DropDownComponent,
    MultipleChoiceComponent,
    SingleLineTextComponent,
    ParagraphTextComponent
  ]
})
export class AppModule { }
