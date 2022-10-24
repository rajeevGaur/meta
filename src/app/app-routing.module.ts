import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestChildComponent } from './test-child/test-child.component';
import { TestParentComponent } from './test-parent/test-parent.component';

const routes: Routes = [
  { path: '', component: TestParentComponent },
  { path: 'parent', component: TestParentComponent },
  { path: 'child', component: TestChildComponent },
  //wild card route
    { path: '**', component: TestChildComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
