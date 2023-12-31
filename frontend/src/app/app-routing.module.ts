import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Import Event component
import { EventComponent } from './event/event.component'


const routes: Routes = [
  { path: '', component: EventComponent },
  { path: 'events', component: EventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
