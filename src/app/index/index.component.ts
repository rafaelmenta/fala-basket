import { Component, OnInit } from '@angular/core';
import { PodcastService, HomeData } from '../podcast.service';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  data$: Observable<HomeData>;

  constructor(
    private podcast: PodcastService,
    private title: Title,
  ) { }

  ngOnInit() {
    this.data$ = this.podcast.getHomeData();
    this.title.setTitle('Fala Basket');
  }

}
