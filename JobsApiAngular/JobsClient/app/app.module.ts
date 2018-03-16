import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';

import { JobsComponent } from '../jobs/jobs.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent, JobsComponent
  ],
  imports: [
    BrowserModule, FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
