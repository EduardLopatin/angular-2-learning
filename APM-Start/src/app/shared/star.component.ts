import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;

  ngOnChanges(): void {
     this.starWidth = this.rating * 100/5;
  }
  onClick(): void {
    console.log(`This rating ${this.rating} was clicked!`)
  }
}
