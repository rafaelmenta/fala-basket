import { Component, OnInit } from '@angular/core';
import { PodcastService, Episode } from '../podcast.service';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  data$: Observable<Episode[]>;

  constructor(
    private podcast: PodcastService,
    private title: Title,
  ) { }

  ngOnInit() {
    this.title.setTitle(`Arquivo - Fala Basket`);
    this.data$ = this.podcast.getEpisodes();
  }

}
