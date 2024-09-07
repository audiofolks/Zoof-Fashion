import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
  fakeAsync,
  tick,
  waitForAsync,
} from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { AuthService } from 'src/app/shared/services/auth';
import {
  AngularFireAuth,
  AngularFireAuthModule,
} from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreModule,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import {
  AngularFireStorage,
  AngularFireStorageModule,
} from '@angular/fire/compat/storage';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { Location } from '@angular/common';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let spy: jasmine.Spy;
  let authServiceMock: Partial<AuthService>;
  let el: DebugElement;
  let router: Router;
  let location: Location;
  let navigateSpy: jasmine.Spy;
  beforeEach(waitForAsync(() => {
    authServiceMock = {
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
      declarations: [HomeComponent],
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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    navigateSpy = spyOn(router, 'navigate');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain Login title', () => {
    expect(el.query(By.css('.title')).nativeElement.textContent).toBe('Login');
  });

  it('should not go to dashboard page', fakeAsync(() => {
    router.navigate(['dashboard']);
    tick(2000);
    expect(location.path()).toBe('');
  }))

  it('should trigger SignIn method from AuthService after filling credentials', fakeAsync(() => {
    const email = el.query(By.css('.login-email')).nativeElement;
    const password = el.query(By.css('.login-password')).nativeElement;
    const button = el.query(By.css('.login-button')).nativeElement;

    email.setAttribute('value', 'vasen2353@gmail.com');
    password.setAttribute('value', '12345678');
    button.click();

    expect(authServiceMock.SignIn).toHaveBeenCalledWith(
      email.value,
      password.value
    );

    tick(3000);

    fixture.detectChanges();
    /* BUG: need to test the navigation to dashboard path after signing in */
    // // fixture.whenStable().then(() => {
    //   expect(navigateSpy).toHaveBeenCalledWith(['dashboard']);
    // // });
    // console.log(localStorage, location.path());
    

    
  }));
});
