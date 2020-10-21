import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {PlayerService} from '../services/player.service';
import {Player} from '../models/player.model';
import {ToastrService} from 'ngx-toastr';

@Directive({
  selector: '[appEnoughGold]'
})

// @ts-ignore
export class EnoughGoldDirective {

  constructor(private element: ElementRef, private renderer: Renderer2, private player: PlayerService, private toastr: ToastrService) {
  }

  @Input() currencyNeeded: number;
  @Input() currencyType: number; // 0 is gold 1 is repute
  @Input() unlockable: string;

  currentPlayer: Player = this.player.getPlayer();


  // tslint:disable-next-line:no-inferrable-types
  enough: boolean = false;


  // check ob der player schon den dungeon freigeschaltet hat
  // ansonsten ob er genug gold/repute hat sonst toastr
  // wenn ja, kaufen und beim player unlocken


  @HostListener('click') onElementClicked(): void {
    if (this.player.getUnlockByName(this.unlockable)) {
      console.log('Already bought -> navigate to...');
    } else {
      if (this.currencyType === 0) {
        if (this.currentPlayer.gold >= this.currencyNeeded) {
          console.log('Buying');
          this.player.byUnlockableByName(this.unlockable);
          this.currentPlayer.gold = (this.currentPlayer.gold - this.currencyNeeded);
        } else {
          this.toastr.error('', 'Not enough Gold', {positionClass: 'goldPosition'});
        }
      } else {
        if (this.currentPlayer.repute >= this.currencyNeeded) {
          this.toastr.error('', 'Buyable with Repute', {positionClass: 'reputePosition'});
        } else {
          this.toastr.error('', 'Not enough Repute', {positionClass: 'reputePosition'});
        }
      }
    }
  }


}

