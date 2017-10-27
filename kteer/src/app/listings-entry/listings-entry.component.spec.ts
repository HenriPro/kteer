import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsEntryComponent } from './listings-entry.component';

describe('ListingsEntryComponent', () => {
  let component: ListingsEntryComponent;
  let fixture: ComponentFixture<ListingsEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
