import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContainersComponent } from './main-containers.component';

describe('MainContainersComponent', () => {
  let component: MainContainersComponent;
  let fixture: ComponentFixture<MainContainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainContainersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
