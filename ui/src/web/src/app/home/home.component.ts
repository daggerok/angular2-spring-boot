import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  name = 'badass';
  constructor() {}
  public ngOnInit() {}
}
