/* tslint:disable:no-unused-variable */

import {
  TestBed,
  async
} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS } from '@angular/http';

describe('App: Ui', () => {
  let fixture = null;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [HTTP_PROVIDERS]
    });

    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', async(() => {

    let app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {

    let app = fixture.debugElement.componentInstance;

    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {

    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
