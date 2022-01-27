import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemVirtualComponent } from './item-virtual.component';

describe('ItemVirtualComponent', () => {
  let component: ItemVirtualComponent;
  let fixture: ComponentFixture<ItemVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemVirtualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
