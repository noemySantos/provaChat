import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoChatModalPage } from './novo-chat-modal.page';

describe('NovoChatModalPage', () => {
  let component: NovoChatModalPage;
  let fixture: ComponentFixture<NovoChatModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoChatModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoChatModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
