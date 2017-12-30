import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRoomTypeComponent } from './new-room-type.component';

describe('NewRoomTypeComponent', () => {
  let component: NewRoomTypeComponent;
  let fixture: ComponentFixture<NewRoomTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRoomTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRoomTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
