import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RandomClicksComponent } from './random-clicks/random-clicks.component';
import { NgxTimerModule } from 'ngx-timer';
import { MainComponent } from './main/main.component';
import { GameOverComponent } from './game-over/game-over.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { NextLevelComponent } from './next-level/next-level.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    DialogBoxComponent,
    RandomClicksComponent,
    MainComponent,
    GameOverComponent,
    ThankYouComponent,
    NextLevelComponent,
  ],
  entryComponents: [
    DialogBoxComponent,
    GameOverComponent,
    NextLevelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxTimerModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
