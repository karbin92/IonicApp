import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.page.html',
  styleUrls: ['./series-details.page.scss'],
})
export class SeriesDetailsPage implements OnInit {
  information = null; //hides the view until it is loaded

  constructor(private activatedRoute: ActivatedRoute, private seriesService: SeriesService) { } //injecting activated route

  ngOnInit() { //is called in the beginning when the component is created, here the activated route snapshot is implemented
    let id = this.activatedRoute.snapshot.paramMap.get('id'); //goes back to the service and grabs the data

    this.seriesService.getDetails(id).subscribe(result => { //get details with the corresponding ID
      console.log('details: ', result); //display result
      this.information = result; //allows access to result inside the view
    });
  }

  openWebsite() { //ensures information is loaded in the app and not in the browser
    window.open(this.information.Website, '_blank');
  }

}
