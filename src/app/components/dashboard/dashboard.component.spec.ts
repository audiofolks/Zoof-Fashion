import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/shared/services/auth';
import {
  AngularFirestore,
  AngularFirestoreModule,
} from '@angular/fire/compat/firestore';
import {
  AngularFireAuth,
  AngularFireAuthModule,
} from '@angular/fire/compat/auth';
import {
  AngularFireStorage,
  AngularFireStorageModule,
} from '@angular/fire/compat/storage';
import { routes } from 'src/app/app-routing.module';
import { ContentComponent } from '../content/content.component';
import { DebugElement, WritableSignal, signal } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let authServiceMock: Partial<AuthService>;
  let el: DebugElement;
  beforeEach(waitForAsync(() => {
    authServiceMock = {
      //   userData: jasmine.createSpy('userData').and.returnValue(signal(null)),
      SignIn: jasmine.createSpy('SignIn').and.returnValue(Promise.resolve()),
      SignUp: jasmine.createSpy('SignUp').and.returnValue(Promise.resolve()),
      SignOut: jasmine.createSpy('SignOut').and.returnValue(Promise.resolve()),
      SendForgotPasswordLink: jasmine
        .createSpy('SendForgotPasswordLink')
        .and.returnValue(Promise.resolve()),
      UploadImage: jasmine
        .createSpy('UploadImage')
        .and.returnValue(Promise.resolve()),
    };
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, ContentComponent],
      imports: [
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        RouterTestingModule.withRoutes(routes),
      ],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: AngularFireAuth, useValue: {} },
        { provide: AngularFirestore, useValue: {} },
        // { provide: Router, useValue: {} },
        { provide: AngularFireStorage, useValue: {} },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
