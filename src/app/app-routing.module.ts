import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioMainComponent} from '../app/portfolio-main/portfolio-main.component';
import {PortfolioWelcomeScreenComponent} from '../app/portfolio-welcome-screen/portfolio-welcome-screen.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
