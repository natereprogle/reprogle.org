import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeysComponent } from './components/keys/keys.component';
import { MainComponent } from './components/main/main.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { ResumeItemComponent } from './components/resume-item/resume-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { PopupComponent } from './components/popup/popup.component';

import { NgxTurnstileModule } from 'ngx-turnstile';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    KeysComponent,
    MainComponent,
    PageNotFoundComponent,
    HeaderComponent,
    ResumeItemComponent,
    FooterComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxTurnstileModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
