import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikisearchComponent } from './wikisearch.component';

describe('WikisearchComponent', () => {
  let component: WikisearchComponent;
  let fixture: ComponentFixture<WikisearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikisearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikisearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
