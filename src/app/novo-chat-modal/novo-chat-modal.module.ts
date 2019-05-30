import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NovoChatModalPage } from './novo-chat-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NovoChatModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NovoChatModalPage]
})
export class NovoChatModalPageModule {}
