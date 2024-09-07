import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponent } from './content.component';
import { AuthService } from 'src/app/shared/services/auth';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;
  let el: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentComponent],
      imports: [RouterTestingModule],
      providers: [],
    });
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the product section', () => {
    expect(el.query(By.css('#product1'))).toBeTruthy();
  });
});
