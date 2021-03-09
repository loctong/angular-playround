import { CodersxComponent } from './codersx/codersx.component';
import { PlRxjsComponent } from './pl-rxjs/pl-rxjs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  {
    path: 'rxjs',
    component: PlRxjsComponent
  },
  {
    path: 'coders-x',
    component: CodersxComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class PlayGroundRoutingModule { }
