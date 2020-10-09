import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-info-text',
  templateUrl: './icon-info-text.component.html',
  styleUrls: ['./icon-info-text.component.css']
})
export class IconInfoTextComponent implements OnInit {

  // icons from https://friconix.com/
  private icons = {
    collection: 'assets/general/icons/Icon_Collection.png',
    achievements: 'assets/general/icons/Icon_Achievements.png',
    gold: 'assets/general/icons/Icon_Gold.png',
    repute: 'assets/general/icons/Icon_Repute.png',
  };

  @Input() icon: string;
  @Input() iconPosition: number;
  @Input() headline: string;
  @Input() subline: string;

  currentIcon: string;

  constructor() {
  }

  ngOnInit(): void {
    this.currentIcon = this.getIconByName(this.icon);
  }

  getIconByName(icon: string): string {
    const icons = this.icons;
    if (icon in icons) {
      return (icons[icon]);
    }
  }

}
