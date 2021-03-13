import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-main',
  templateUrl: './portfolio-main.component.html',
  styleUrls: ['./portfolio-main.component.css']
})
export class PortfolioMainComponent implements OnInit {

  isActive : Boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  enablePage(){
    this.setActive(true);
  }

  disablePage(){
    this.setActive(false);
  }

  private setActive(active : Boolean){
    this.isActive = active;
  }

}
