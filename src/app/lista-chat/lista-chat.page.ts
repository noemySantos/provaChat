import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-lista-chat',
  templateUrl: './lista-chat.page.html',
  styleUrls: ['./lista-chat.page.scss'],
})
export class ListaChatPage {
  title = "chats";
  chats = [];
  CHATS_KEY = 'alunos';

  //# Declara uma instancia no construtor
  constructor(public toastController: ToastController, public alertController: AlertController, private storage: Storage, public modalController: ModalController) {
    this.storage.get(this.CHATS_KEY).then((data) => {
      this.chats = data;
    });
  }

  async add(chat) {
    this.chats.push(chat);
    this.storage.set(this.CHATS_KEY, this.chats);

    //# Cria o toast
    const toast = await this.toastController.create({
      message: 'Novo contato cadastrado com sucesso!',
      duration: 5000,
      position: 'top'
    });

    //# Exibir a mensagem na tela
    toast.present();
  }

  criar_novo_chat() {
    return {
      "contato": "",
      "url": ""
    }
  }

  async excluir(chat) {

    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Deseja excluir o chat?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => { }
        },
        {
          text: 'Sim',
          handler: async () => {
            var i = this.chats.indexOf(chat);
            this.chats.splice(i, 1);
            this.storage.set('CHATS_KEY', this.chats)
            //# Cria o toast
            const toast = await this.toastController.create({
              message: 'Chat excluido com sucesso!',
              duration: 5000,
              position: 'top'
            });

            //# Exibir a mensagem na tela
            toast.present();

          }

        }
      ]
    });

    await alert.present();
  }

  async exibir_modal() {
    const modal = await this.modalController.create({
      component: ListaChatPage
    });
    modal.onDidDismiss().then((retorno) => {
      this.add(retorno.data);

    });

    await modal.present();
  }
}

