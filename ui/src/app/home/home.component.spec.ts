/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as name 'cc'`, async(() => {
    let home = TestBed.createComponent(HomeComponent);
    let app = home.debugElement.componentInstance;
    expect(app.name).toEqual('cc');
  }));

  it('should render title in a h3 tag', async(() => {
    let home = TestBed.createComponent(HomeComponent);
    home.detectChanges();
    let compiled = home.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('hi, cc!');
  }));
});
