import { Component,ViewChild, ElementRef } from '@angular/core';
import * as MotionUI from 'Motion-ui';
import * as $ from 'jquery';

@Component ({
   selector: 'motion-app',
  templateUrl: './motion.component.html',
  styleUrls: ['./motion.component.css']
})
export   class   AppMotion  {
    fullImagePath: string;
 @ViewChild('yeti') myId: ElementRef;

  constructor() {
    this.fullImagePath = 'assets/img/yeti.svg'
  } 
  yetiSpeed = '';
  yetiEase = 'linear';

  setSpeed(yetiSpeed){
    console.log(this.myId.nativeElement.classList+yetiSpeed);
    this.myId.nativeElement.classList = this.yetiEase  + " " + yetiSpeed;
    this.yetiSpeed = yetiSpeed;
  }
  
  setEase(yetiEase){
    console.log(this.myId.nativeElement.classList+yetiEase);
    this.myId.nativeElement.classList = this.yetiSpeed + " " + yetiEase;
    this.yetiEase = yetiEase;
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