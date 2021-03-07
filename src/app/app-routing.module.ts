import { NoContentComponent } from './no-content/no-content.component';
import { PlayGroundModule } from './play-ground/play-ground.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'play-ground',
    loadChildren: () => import('./play-ground/play-ground-routing.module').then( m => m.PlayGroundRoutingModule)
  },
  {
    path: '**',
    component: NoContentComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
