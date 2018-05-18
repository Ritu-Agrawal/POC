import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppMotion } from './MotionUI/motion.component';
import { AppWOW } from './WowJS/wow.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
   { path: 'MotionUI', component: AppMotion },
   { path: 'WowJS', component: AppWOW },
];

@NgModule({
  declarations: [
    AppComponent,
    AppMotion,
    AppWOW
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
