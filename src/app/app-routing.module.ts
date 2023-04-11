import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {GreetingComponent} from "./components/greeting/greeting.component";

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'greeting', component: GreetingComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
