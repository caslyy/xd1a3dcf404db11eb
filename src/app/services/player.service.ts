import {Injectable} from '@angular/core';
import {Player} from '../models/player.model';


@Injectable({
  providedIn: 'root'
})

// @ts-ignore
export class PlayerService {

  private player: Player = new Player('Testplayer', 8000, 1233, null, null, null);

  getPlayer(): Player {
    return this.player;
  }

}
