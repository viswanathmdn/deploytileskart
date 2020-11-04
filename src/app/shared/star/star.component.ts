import { Component, EventEmitter, Output, OnInit , Input, OnChanges} from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  @Input() rating;
  faStar = faStar;
  @Output() ratingUpdated:EventEmitter<string> = new EventEmitter();
 
  ratingArray:Array<number>=[];
  constructor() { 
    console.log('inside constructor');
  }

  ngOnChanges()
  {
    console.log('inside ng on changes');
   this.ratingArray =[];
    for (let index = 0; index < this.rating; index++) {
      this.ratingArray.push(index);
  }
  }
  
  ngOnInit(): void {
  
   console.log('inside ng on init');
   
  }

  
 newRating:string;
 updateRating(){
    console.log(`new rating value  is ${this.newRating}`);
    this.ratingUpdated.emit(this.newRating);
  }
 

}


