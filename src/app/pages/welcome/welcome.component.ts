import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public currentUser;
constructor(config: NgbCarouselConfig) {
this.currentUser = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')) : '';
    config.interval = 2000;  
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
}

  ngOnInit() {
  }

}
