import { Component, OnInit } from '@angular/core';

import { CommunicationServiceService } from '../communication-service.service';

@Component({
  selector: 'app-portfolio-welcome-screen',
  templateUrl: './portfolio-welcome-screen.component.html',
  styleUrls: ['./portfolio-welcome-screen.component.css']
})
export class PortfolioWelcomeScreenComponent implements OnInit {
  isClicked = false;
  constructor(private communicationService:CommunicationServiceService) { }
  
  ngOnInit(): void {
  }

  enableMainPageClickEvent(): void{
    this.isClicked = true;
    this.communicationService.getIsActive();
    
  }

}
