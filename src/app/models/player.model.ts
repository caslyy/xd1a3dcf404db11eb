import {God} from './god.model';

export class Player {
  constructor(
    public name: string,
    public gold: number,
    public repute: number,
    public gods: God[],
    public achievments: [],
    public selectedGod: [],
  ) {
  }
}
