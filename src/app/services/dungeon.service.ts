import {Injectable} from '@angular/core';
import {Player} from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class DungeonService {

  constructor() {
  }

  // ein 4er array mit  1-n
  // bei der weiteren ebene maximal 2 verbindungen je punkt
  // tslint:disable-next-line:max-line-length
  // 4er chunks ersten 4 höhre wahrscheinlicht battle 2ter 4er chunk höhre wahrscheinlicht battle/events 3er vierer chunk höhre wahrscheinlichkeit market/taverne und dann boss



  generateRandomInteger(min, max): number {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }

  generateChunk(chunkLength: number): void {
    for (let i = 0; i < chunkLength; i++) {
      console.log(i);
    }
  }

}
