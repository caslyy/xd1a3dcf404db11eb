import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-god',
  templateUrl: './god.component.html',
  styleUrls: ['./god.component.css']
})
export class GodComponent implements OnInit {


  private gods = {
    ullr: 'assets/general/gods/God_Ullr.png',
  };


  @Input() god: string;
  @Input() name: string;

  currentGod: string;

  constructor() {
  }

  ngOnInit(): void {
    this.currentGod = this.getGodbyName(this.god);
  }

  getGodbyName(god: string): string {
    const gods = this.gods;
    if (god in gods) {
      return (gods[god]);
    }
  }
}
