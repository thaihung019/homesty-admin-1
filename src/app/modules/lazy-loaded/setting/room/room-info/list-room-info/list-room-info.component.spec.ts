import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRoomInfoComponent } from './list-room-info.component';

describe('ListRoomInfoComponent', () => {
  let component: ListRoomInfoComponent;
  let fixture: ComponentFixture<ListRoomInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRoomInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRoomInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
