import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../../services/player.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  player = this.playerService.getPlayer();

  constructor(private playerService: PlayerService) {
  }

  ngOnInit(): void {
  }
}
