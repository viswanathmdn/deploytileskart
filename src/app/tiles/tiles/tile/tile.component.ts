import { Component, OnInit, Input } from '@angular/core';
import { ITile } from 'src/app/interface/itile';

@Component({
  selector: '[app-tile]',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  imagePath: string = "/assets/images/";

 
  
  @Input() tile:ITile;
 

  constructor() { }

  ngOnInit(): void {
  
   
    }
  
 
    // changeRating(){
    //   this.tile.rating = 3;
    // }

    updateRatingValue(newRating){
      console.log('new rating value is ' + newRating);
    }
   
  
  



}
