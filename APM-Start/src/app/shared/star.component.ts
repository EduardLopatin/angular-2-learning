import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<number> = 
    new EventEmitter<number>();
  ngOnChanges(): void {
     this.starWidth = this.rating * 100/5;
  }
  onClick(): void {
    this.ratingClicked.emit(this.rating)
  }
}
