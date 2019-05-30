import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'novo-chat-modal', loadChildren: './novo-chat-modal/novo-chat-modal.module#NovoChatModalPageModule' },
  { path: 'lista-chat', loadChildren: './lista-chat/lista-chat.module#ListaChatPageModule' },
  { path: 'chat-detail', loadChildren: './chat-detail/chat-detail.module#ChatDetailPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
