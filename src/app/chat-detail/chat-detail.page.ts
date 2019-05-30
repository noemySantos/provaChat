import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.page.html',
  styleUrls: ['./chat-detail.page.scss'],
})
export class ChatDetailPage implements OnInit {
  task; 

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.task= this.route.snapshot.paramMap.get('task');
  }

}
