import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioMainComponent } from './portfolio-main/portfolio-main.component';
import { PortfolioWelcomeScreenComponent } from './portfolio-welcome-screen/portfolio-welcome-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioMainComponent,
    PortfolioWelcomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
