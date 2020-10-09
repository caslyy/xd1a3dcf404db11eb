import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.css']
})
export class MainFooterComponent implements OnInit {

  @Input() text: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
