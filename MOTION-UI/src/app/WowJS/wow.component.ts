import { Component,AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';
import * as $ from 'jquery';

@Component ({
   selector: 'wow-app',
  templateUrl: './wow.component.html',
  styleUrls: ['./wow.component.css']
})
export   class   AppWOW  {
    
  ngAfterViewInit(){
   new WOW().init();
 }
 
  // function testAnim(x) {
  //   $('#animationSandbox').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  //     $(this).removeClass();
  //   });
  // };

  // $(document).ready(function(){
  //   $('.js--triggerAnimation').click(function(e){
  //     e.preventDefault();
  //     var anim = $('.js--animations').val();
  //     testAnim(anim);
  //   });

  //   $('.js--animations').change(function(){
  //     var anim = $(this).val();
  //     testAnim(anim);
  //   });
  // });
changeStyle(){
  var anim = $('.js--animations').val();
  $('#animationSandbox').removeClass().addClass(anim + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
     $(this).removeClass();
  });
}

}