import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConstituenciesPage } from './constituencies.page';

const routes: Routes = [
  {
    path: '',
    component: ConstituenciesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConstituenciesPage]
})
export class ConstituenciesPageModule {}
