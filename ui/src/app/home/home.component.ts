import { Component, OnInit } from '@angular/core';

import './home.component.styl';

@Component({
  selector: 'a2sb-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  name = 'badass';
  constructor() {}
  public ngOnInit() {}
}
