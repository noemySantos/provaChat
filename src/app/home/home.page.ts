import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { NovoChatModalPage } from '../novo-chat-modal/novo-chat-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = "Lista de chat";
  chats = [];
  CHATS_KEY = 'chats'

  constructor(public modalController: ModalController, public toastController: ToastController, public storage: Storage) { 
    this.storage.get('CHATS_KEY').then((data) => {
      if (data) {
    
        this.chats = data;
      }
    });
  }
  
 

async add(chat) {

  this.chats.push(chat);
  this.storage.set('CHATS_KEY', this.chats);

  //# Cria o toast
  const toast = await this.toastController.create({
    message: 'Novo contato cadastrado com sucesso!',
    duration: 5000,
    position: 'top'
  });

  //# Exibir a mensagem na tela
  toast.present();
}

async exibir_modal() {
  const modal = await this.modalController.create({
    component: NovoChatModalPage
  });

  await modal.present();

  modal.onDidDismiss().then((retorno) => {
    this.add(retorno.data);
  });

}


}
