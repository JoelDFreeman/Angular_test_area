import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoeltestComponent } from './joeltest.component';

describe('JoeltestComponent', () => {
  let component: JoeltestComponent;
  let fixture: ComponentFixture<JoeltestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoeltestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoeltestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
