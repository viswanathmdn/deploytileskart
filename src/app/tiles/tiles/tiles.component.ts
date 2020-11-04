import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ITile } from '../../interface/itile';
import {TileService} from '../tile.service';


@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

  imagePath: string = "/assets/images/";
  filterOptions: Array<string> = ["name", "model", "price", "stock"];
  selectedFilter:string = '';
  filterText: string = "";
  shoppingDate:Date = new Date();
  filteredTiles:Array<ITile>;
  tiles:Array<ITile>;
 
  
// tile :any = {
//   name: 'kajaria',
//   model: 'nit-01',
//   price: 200,
//   rating: 2,
//   image: 'tile1.jpg',
//   status: 1,
//   Id: 1
// };






  constructor(public tileService:TileService) {
   

    this.tileService.getTiles().subscribe((tiles)=>{
      this.tiles = tiles;
      this.filteredTiles = this.tiles;
      },(error)=>{
  console.log(`error ${error}`);
    });

  
  // if(sessionStorage.getItem("user")!=null && sessionStorage.getItem("user")!=""){
  //   tileService.getTiles().subscribe(
  //     tiles =>{
  //       this.tiles = tiles;
  //       this.filteredTiles = this.tiles;
  //     }
  //   );
  // }

   }


   //   this.tileService.getTiles().subscribe((tilesData)=>{
//     this.tiles = tilesData;
//     this.filtedTiles = this.tiles;
// },(error)=>{
//   console.log(`error ${error}`);
// })

  ngOnInit(): void {

  }

 


  // let filteredMobiles = mobiles.filter(function(mobile)
  // {
  //     return mobile.price > 15000;
  // });
  // console.log(mobiles);
  // console.log(filteredMobiles);


  // performFilter(filterOption:string,filterText:string,tilesArray:Array<ITile>){
  //   let filteredTilesArray:Array<ITile>;
  //   filteredTilesArray =  tilesArray.filter((tile)=>{
  //       if(filterOption =="name"){
  //        return  tile.name.toLocaleUpperCase().indexOf(filterText.toLocaleUpperCase())>= 0;
  //       }
  //   })
  //   return filteredTilesArray;
  // }
 
  
  

  
 filter() {
  this.filteredTiles = this.tileService.performFilter(this.selectedFilter,this.filterText,this.tiles);
  
 }

 

}
