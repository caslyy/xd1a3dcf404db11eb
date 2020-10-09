import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../../services/player.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  player = this.playerService.getPlayer();

  constructor(private playerService: PlayerService) {
  }

  ngOnInit(): void {
    console.log(this.player);
  }

}
