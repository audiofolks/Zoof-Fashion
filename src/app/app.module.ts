import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthGuardModule } from '@angular/fire/compat/auth-guard';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { config } from 'src/environments/environment';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularFireAuthGuardModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(config.firebase),
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
