import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() headerText: string;
  @Input() isHeader = true;
  @Input() isPointer = false;

  constructor() {
  }

  ngOnInit() {
  }

}
