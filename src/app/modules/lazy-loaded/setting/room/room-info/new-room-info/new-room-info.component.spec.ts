import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRoomInfoComponent } from './new-room-info.component';

describe('NewRoomInfoComponent', () => {
  let component: NewRoomInfoComponent;
  let fixture: ComponentFixture<NewRoomInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRoomInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRoomInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
