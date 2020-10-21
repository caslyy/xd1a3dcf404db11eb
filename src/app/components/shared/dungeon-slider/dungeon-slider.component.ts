import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import KeenSlider from 'keen-slider';

@Component({
  selector: 'app-dungeon-slider',
  templateUrl: './dungeon-slider.component.html',
  styleUrls: ['./dungeon-slider.component.css']
})
export class DungeonSliderComponent implements OnDestroy, AfterViewInit {

  @ViewChild('sliderRef') sliderRef: ElementRef<HTMLElement>;

  slider: any = null;

  ngAfterViewInit(): void {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      slidesPerView: 3.5,
      mode: 'free',
      spacing: 15,
      loop: false
    });
  }

  ngOnDestroy(): void {
    if (this.slider) {
      this.slider.destroy();
    }
  }

}
