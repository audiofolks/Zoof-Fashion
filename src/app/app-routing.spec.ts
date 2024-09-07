// import { Location } from '@angular/common';
// import {
//   ComponentFixture,
//   TestBed,
//   fakeAsync,
//   tick,
//   waitForAsync,
// } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { Router } from '@angular/router';

// import { routes } from './app-routing.module';
// import { HomeComponent } from './components/home/home.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { AppComponent } from './app.component';
// import {
//   AngularFireAuth,
//   AngularFireAuthModule,
// } from '@angular/fire/compat/auth';
// import {
//   AngularFireStorage,
//   AngularFireStorageModule,
// } from '@angular/fire/compat/storage';
// import { AuthService } from './shared/services/auth';
// import {
//   AngularFirestore,
//   AngularFirestoreModule,
// } from '@angular/fire/compat/firestore';

// describe('Router App', () => {
//   let location: Location;
//   let router: Router;
//   let fixture: ComponentFixture<AppComponent>;
//   let homeFixture: ComponentFixture<HomeComponent>;
//   let authServiceMock: Partial<AuthService>;

//   beforeEach(waitForAsync(() => {
//     authServiceMock = {
//       SignIn: jasmine.createSpy('SignIn').and.returnValue(Promise.resolve()),
//       SignUp: jasmine.createSpy('SignUp').and.returnValue(Promise.resolve()),
//       SignOut: jasmine.createSpy('SignOut').and.returnValue(Promise.resolve()),
//       SendForgotPasswordLink: jasmine
//         .createSpy('SendForgotPasswordLink')
//         .and.returnValue(Promise.resolve()),
//       UploadImage: jasmine
//         .createSpy('UploadImage')
//         .and.returnValue(Promise.resolve()),
//     };
//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule.withRoutes(routes),
//         AngularFireAuthModule,
//         AngularFireStorageModule,
//         AngularFirestoreModule,
//       ],
//       declarations: [HomeComponent, DashboardComponent],
//       providers: [
//         { provide: AuthService, useValue: authServiceMock },
//         {
//           provide: AngularFireAuth,
//           useValue: {},
//         },
//         { provide: AngularFireStorage, useValue: {} },
//         // {provide: AngularFirestore, useValue: {}}
//       ],
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     router = TestBed.inject(Router);
//     location = TestBed.inject(Location);
//     router.initialNavigation();
//     fixture = TestBed.createComponent(AppComponent);
//   });

// //   it('should navigate to default path `/`', () => {
// //     fixture.detectChanges();
// //     fixture.whenStable().then(() => {
// //       expect(location.path()).toBe('');
// //     });
// //   });

//   it('should create a HomeComponent', () => {
//     const home = TestBed.createComponent(HomeComponent);
//     const homeComponent = home.componentInstance;
//     expect(homeComponent).toBeTruthy();
//   });
// });
