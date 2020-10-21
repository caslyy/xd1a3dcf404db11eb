import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-god',
  templateUrl: './god.component.html',
  styleUrls: ['./god.component.css']
})
export class GodComponent implements OnInit {


  @Input() god: string;
  @Input() name: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}
