import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-novo-chat-modal',
  templateUrl: './novo-chat-modal.page.html',
  styleUrls: ['./novo-chat-modal.page.scss'],
})
export class NovoChatModalPage implements OnInit {

  novo_chat = {
    'contato': '',
    'url': ''
  }

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  add() {
    this.modalController.dismiss(this.novo_chat);
  }
}
