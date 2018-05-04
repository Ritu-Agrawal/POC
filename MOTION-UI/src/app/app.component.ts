import { Component,ViewChild, ElementRef, AfterViewInit  } from '@angular/core';
import * as MotionUI from 'Motion-ui';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fullImagePath: string;
 @ViewChild('yeti') myId: ElementRef;

  constructor() {
    this.fullImagePath = 'assets/img/yeti.svg'
  }
  setSpeed(speed){
    console.log(this.myId.nativeElement+speed);
  }
  transition(transitionName){
    //MotionUI.animateIn(this.myId.nativeElement,transitionName );
    if (transitionName.match(/-in/)) {
      MotionUI.animateIn(this.myId.nativeElement,transitionName );
    }
    else {
      MotionUI.animateOut(this.myId.nativeElement,transitionName , function() {
        $("#yeti").show();
      });
    }
  }
}
