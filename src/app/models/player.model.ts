import {God} from './god.model';
import {Achievment} from './achievment.model';

export class Player {
  constructor(
    public name: string,
    public gold: number,
    public repute: number,
    public selectedGod: God[],
    public achievments: Achievment[],
    public unlocks: {},
  ) {}
}
