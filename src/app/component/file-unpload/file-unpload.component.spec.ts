import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUnploadComponent } from './file-unpload.component';

describe('FileUnploadComponent', () => {
  let component: FileUnploadComponent;
  let fixture: ComponentFixture<FileUnploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUnploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUnploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
