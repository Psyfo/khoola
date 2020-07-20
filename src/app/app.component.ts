import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'khoola-client';
  item1Show = true;
  item2Show = false;
  item3Show = false;
  item4Show = false;
  item5Show = false;

  ngOnInit() {}

  click1() {
    this.item1Show = true;
    this.item2Show = false;
    this.item3Show = false;
    this.item4Show = false;
    this.item5Show = false;
  }
  click2() {
    this.item1Show = false;
    this.item2Show = true;
    this.item3Show = false;
    this.item4Show = false;
    this.item5Show = false;
  }
  click3() {
    this.item1Show = false;
    this.item2Show = false;
    this.item3Show = true;
    this.item4Show = false;
    this.item5Show = false;
  }
  click4() {
    this.item1Show = false;
    this.item2Show = false;
    this.item3Show = false;
    this.item4Show = true;
    this.item5Show = false;
  }
  click5() {
    this.item1Show = false;
    this.item2Show = false;
    this.item3Show = false;
    this.item4Show = false;
    this.item5Show = true;
  }
}
