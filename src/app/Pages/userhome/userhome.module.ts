import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { UserhomePage } from './userhome.page';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';


const routes: Routes = [
  {
    path: '',
    component: UserhomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ScrollDispatchModule
  ],
  declarations: [UserhomePage]
})
export class UserhomePageModule {}

