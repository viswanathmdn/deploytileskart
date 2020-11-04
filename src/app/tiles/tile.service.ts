import { HttpClient , HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ITile } from 'src/app/interface/itile';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TileService {
  
 
  constructor(private httpClient:HttpClient) {  
    
  }

  
  private tilesURL:string = 'http://demo8499217.mockable.io/tiles'; //url for the mockable io

  //private tilesURL:string = 'http://demo3058651.mockable.io/tilesdemo'; 

  // private URL = 'http://localhost:3000/'

  private handleError(errorResponse:HttpErrorResponse){
    if(errorResponse.error  instanceof ErrorEvent){
      console.error(`client side error ${errorResponse.error.message}`);
    }
    else
    {
      console.error(`server side error ${errorResponse}`)
    }
    return  throwError('Problem in Back End. Will get resumed soon');
  }
  

 getTiles(): Observable<Array<ITile>>{
     return this.httpClient.get<Array<ITile>>(this.tilesURL).pipe(catchError(this.handleError));
 }

 getTile(Id){
   return this.httpClient.get<ITile>(this.tilesURL+`/${Id}`);
 }



 



  // getTiles():Array<ITile>{
  //   return this.tiles;
  // }

// hello(){
//   return this.httpClient.get(this.URL+'hello')
// }
// name(){
//   return this.httpClient.get(this.URL+"name")
// }

  performFilter(filterOption:string,filterText:string,tileArray:Array<ITile>){
    let fTiles = tileArray.filter((tile:ITile)=>{
      let isMatch = false;
     if(tile.name.startsWith(filterText)){
       isMatch = true;
     }
     return isMatch;
    });
    return fTiles;
  } 



 

  getCurrentLocale(){
    return navigator.language;
  }

 
}
 