import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ButtonSolidComponent } from 'src/components/button-solid/button-solid.component';
import { CardsComponent } from 'src/components/cards/cards.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { DashboardComponent } from 'src/pages/dashboard/dashboard.component';
import { ProjectComponent } from 'src/pages/project/project.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ButtonSolidComponent,
    NavbarComponent,
    ProjectComponent,
    CardsComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
