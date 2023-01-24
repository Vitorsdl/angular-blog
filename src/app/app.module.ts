import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { SubContentComponent } from './sub-content/sub-content.component';
import { ExtraContentComponent } from './extra-content/extra-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SubContentComponent,
    ExtraContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
