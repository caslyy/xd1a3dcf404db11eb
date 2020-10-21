import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-button-text',
  templateUrl: './image-button-text.component.html',
  styleUrls: ['./image-button-text.component.css']
})
export class ImageButtonTextComponent implements OnInit {

  private images = {
    navigate: 'assets/general/content/main-page/Content_Navigation.png',
    arena: 'assets/general/content/main-page/Content_Arena.png',
  };

  @Input() text: string;
  @Input() image: string;

  currentImage: string;

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
