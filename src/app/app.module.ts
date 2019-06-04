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
  ],
  imports: [
    DynamicDialogModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    PanelModule,
    BrowserAnimationsModule
  ],
  providers: [],
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
