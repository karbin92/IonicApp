import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export enum SearchType {
  //A service which can be used from everywhere inside the app, separation between view, controller and the data from eachother
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}
@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  url = 'http://www.omdbapi.com/';
  apiKey = '63777606';

  constructor(private http: HttpClient) { }

  searchData (title: string, type: SearchType): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`). //Encodes the URI and uses the defined API Key
    pipe(
      map(results=> { //Maps the results to something else that does not contain meta-data, returns only search results
        console.log('RAW: ', results);
        return results ['Search'];
      }) 
    );
  }

  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`); //calling the url again with ID and passaes "plot full" which gives more information
  }

}
