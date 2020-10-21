import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dungeon-card',
  templateUrl: './dungeon-card.component.html',
  styleUrls: ['./dungeon-card.component.css']
})
export class DungeonCardComponent implements OnInit {

  private images = {
    skulls_island: 'assets/general/content/dungeon-page/Dungeon_Card_Skulls_Island.png',
    souls_rift: 'assets/general/content/dungeon-page/Dungeon_Card_Souls_Rift.png',
    lost_island: 'assets/general/content/dungeon-page/Dungeon_Card_Lost_Islands.png',
  };

  currentImage: string;

  @Input() name: string;
  @Input() image: string;
  @Input() goldPrice: number;
  @Input() reputePrice: number;

  constructor() {
  }

  ngOnInit(): void {
    this.currentImage = this.getImagebyName(this.image);
  }

  getImagebyName(image: string): string {
    const images = this.images;
    if (image in images) {
      return (images[image]);
    }
  }
}
