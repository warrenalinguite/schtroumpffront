import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFriendsComponent } from './item-friends.component';

describe('ItemFriendsComponent', () => {
  let component: ItemFriendsComponent;
  let fixture: ComponentFixture<ItemFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemFriendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
