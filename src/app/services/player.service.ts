import {Injectable} from '@angular/core';
import {Player} from '../models/player.model';
import {God} from '../models/god.model';


@Injectable({
  providedIn: 'root'
})

// @ts-ignore
export class PlayerService {

  private player: Player = new Player(
    'Testuser',
    10400,
    123,
    [
      new God(50, 'Ullr', 500, 3, 'assets/general/gods/God_Ullr.png')
    ],
    null,
    {
      arena: false,
      navigate: false,
      // dungeons
      skulls_island: false,
      souls_rift: false,
      lost_island: false
    }
  );

  getPlayer(): Player {
    return this.player;
  }

  getUnlockByName(unlock: string): boolean {
    const unlocks = this.player.unlocks;
    if (unlock in unlocks) {
      return (unlocks[unlock]);
    }
  }

  byUnlockableByName(unlock: string): void {
    const unlocks = this.player.unlocks;
    if (unlock in unlocks) {
      unlocks[unlock] = !unlocks[unlock];
    }
  }

}
