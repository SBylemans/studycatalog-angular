import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudycatalogAddComponent } from './studycatalog-add.component';

describe('StudycatalogAddComponent', () => {
  let component: StudycatalogAddComponent;
  let fixture: ComponentFixture<StudycatalogAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudycatalogAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudycatalogAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
