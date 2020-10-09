import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-button-text',
  templateUrl: './icon-button-text.component.html',
  styleUrls: ['./icon-button-text.component.css']
})
export class IconButtonTextComponent implements OnInit {


  private icons = {
    quest: 'assets/general/icons/Button_Icon_Quest.png',
    shop: 'assets/general/icons/Button_Icon_Shop.png',
    god: 'assets/general/icons/Button_Icon_God.png',
  };

  @Input() icon: string;
  @Input() iconPosition: number;
  @Input() text: string;
  @Input() color: string;

  currentIcon: string;

  constructor() { }

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
