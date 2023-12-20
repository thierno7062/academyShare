import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gesture',
  templateUrl: './gesture.page.html',
  styleUrls: ['./gesture.page.scss'],
})
export class GesturePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onTap(event: any){
    console.log('tap: ', event);

  }
  onDoubleTap(event: any){
    console.log('double tap: ', event);

  }
  onPress(event: any){
    console.log(event);

  }
  onSwipe(event: any){
    console.log(event);

  }

}
