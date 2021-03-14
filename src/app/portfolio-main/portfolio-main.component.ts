import { Component, OnInit } from '@angular/core';
import { CommunicationServiceService } from '../communication-service.service';

@Component({
  selector: 'app-portfolio-main',
  templateUrl: './portfolio-main.component.html',
  styleUrls: ['./portfolio-main.component.css']
})
export class PortfolioMainComponent implements OnInit {

  isActive : Boolean = false;
  
  constructor(private communicationService:CommunicationServiceService) {
      this.communicationService.componentMethodCalled$.subscribe(() => {this.enablePage();})
  }

  ngOnInit(): void {
    this.disablePage();
  
  }

  private enablePage(): void{
    this.setActive(true);
    console.log('Setting active' + this.isActive);
  }

  disablePage(): void{
    this.setActive(false);
  }

  private setActive(active : Boolean): void{
    this.isActive = active;
  }

}
