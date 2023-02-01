import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RandomClicksComponent } from './random-clicks/random-clicks.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'random-clicks/:level', component: RandomClicksComponent },
  { path: 'thank-you/:prevState', component: ThankYouComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
