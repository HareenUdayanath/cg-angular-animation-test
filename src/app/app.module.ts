import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import { AppComponent } from './app.component';
import { RouteTestComponent } from './route-test/route-test.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
   { path: 'tiger',   component: HomeComponent,   data: { animation: 'tiger' } },
    { path: 'dolphin', component: RouteTestComponent, data: { animation: 'dolphin' } }

];


@NgModule({
  declarations: [
    AppComponent,
    RouteTestComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
