import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { Episode, PodcastService } from '../podcast.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  data$: Observable<Episode>;

  @Input() episodes: Episode[];

  constructor(
    private podcast: PodcastService,
    private route: ActivatedRoute,
    private title: Title
  ) { }

  updateTitle(episode: Episode) {
    this.title.setTitle(`#${episode.episodeNumber} ${episode.title} - Fala Basket`);
  }

  ngOnInit() {
    const id$ = this.route.paramMap.pipe(map(paramMap => paramMap.get('id')));
    this.data$ = id$.pipe(
      mergeMap(id => this.podcast.getEpisode(id)),
      tap(data => this.updateTitle(data)),
      );
  }

}
