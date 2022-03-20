import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivePractice';
  pVisibility = false;
  isGreaterThan5 = false;
  recordedClicks = [''];
  recordedNumClicks = [0];
  currentClick = 0;
  buttonText = "Display Details";

  checkVisibility() {
    this.pVisibility = !this.pVisibility;
    return this.pVisibility;
  }
  buttonClicked() {
    this.currentClick++;
    if(this.currentClick >= 5) this.isGreaterThan5 = true;
    this.checkVisibility();
    this.recordedClicks.push('Number of times button has been pushed: ' + this.currentClick.toString());
    this.recordedNumClicks.push(this.recordedNumClicks.length);
  }
  setStyle() {
    if(this.currentClick >= 5) {
        return 'blue';
    } else {
        return 'red';
    }
  }
  setClass() {
    if(this.currentClick >= 5) {
      return 'dataColor'
    } else {
      return '';
    }
  }
}
