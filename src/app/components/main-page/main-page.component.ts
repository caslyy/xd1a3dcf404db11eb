import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../../services/player.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  player = this.playerService.getPlayer();

  selectedGod = this.player.selectedGod[0];

  constructor(private playerService: PlayerService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

}
