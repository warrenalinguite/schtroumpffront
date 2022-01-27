import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualFriendComponent } from './virtual-friend.component';

describe('VirtualFriendComponent', () => {
  let component: VirtualFriendComponent;
  let fixture: ComponentFixture<VirtualFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualFriendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
