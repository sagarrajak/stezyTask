import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormContainerComponent } from './main/form-container/form-container.component';
import { MainComponent } from './main/main.component';
import { CheckboxComponent } from './ui-elements/checkbox/checkbox.component';
import { DropDownComponent } from './ui-elements/drop-down/drop-down.component';
import { MultipleChoiceComponent } from './ui-elements/multiple-choice/multiple-choice.component';
import { ParagraphTextComponent } from './ui-elements/paragraph-text/paragraph-text.component';
import { SingleLineTextComponent } from './ui-elements/single-line-text/single-line-text.component';
import { DynamicDialogModule } from 'primeng/components/dynamicdialog/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CheckboxModule } from 'primeng/checkbox';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ErrorMessageComponent } from './util/error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SingleLineTextComponent,
    ParagraphTextComponent,
    CheckboxComponent,
    DropDownComponent,
    MultipleChoiceComponent,
    FormContainerComponent,
    ErrorMessageComponent

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
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  entryComponents: [
    CheckboxComponent,
    DropDownComponent,
    MultipleChoiceComponent,
    SingleLineTextComponent,
    ParagraphTextComponent
  ]
})
export class AppModule { }
