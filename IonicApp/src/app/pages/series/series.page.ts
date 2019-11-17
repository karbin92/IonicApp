import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchType, SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  results: Observable<any>;
  searchTerm ='';
  type: SearchType = SearchType.all;

  constructor(private seriesService: SeriesService) { }
  

  ngOnInit() {
  }

  searchChanged() {
    this.results = this.seriesService.searchData(this.searchTerm, this.type);

   // this.results.subscribe(res=> {
    
   // })
  }

}
