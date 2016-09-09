/* tslint:disable:no-unused-variable */

import {
  TestBed,
  async
} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ApiService } from './shared/ApiService';

describe('App: Ui', () => {
  let fixture = null;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpModule],
      providers: [ApiService]
    });

    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', async(() => {

    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {

    const app = fixture.debugElement.componentInstance;

    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {

    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
