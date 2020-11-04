import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ITile } from 'src/app/interface/itile';
import {TileService} from 'src/app/tiles/tile.service';


@Component({
  selector: 'app-tile-detail',
  templateUrl: './tile-detail.component.html',
  styleUrls: ['./tile-detail.component.css']
})
export class TileDetailComponent implements OnInit {
  
  
  imagePath:string = "assets/images/";
  tile:ITile;
 ;
 constructor(private activateRoute:ActivatedRoute,private tileService:TileService, private router:Router) { 
    let id = +this.activateRoute.snapshot.paramMap.get('Id');
    // let name =  this.activateRoute.snapshot.paramMap.get("Name");
    //httpsService.get(`/assets/myjson/${id}.json`).subscribe

    let name = this.activateRoute.snapshot.queryParamMap.get("name");
  let model = this.activateRoute.snapshot.queryParamMap.get("model");
    this.tileService.getTile(id).subscribe((tile) => {
        this.tile = tile;
    });

 }
 ngOnInit() {
   
}
navigateBack(): void {
  this.router.navigate(['/tiles']);
}

}