import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudycatalogComponent } from './studycatalog.component';

describe('StudycatalogComponent', () => {
  let component: StudycatalogComponent;
  let fixture: ComponentFixture<StudycatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudycatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudycatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
