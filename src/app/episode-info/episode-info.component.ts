import { Component, OnInit, Input } from '@angular/core';
import { Episode } from '../podcast.service';

@Component({
  selector: 'app-episode-info',
  templateUrl: './episode-info.component.html',
  styleUrls: ['./episode-info.component.css']
})
export class EpisodeInfoComponent implements OnInit {

  @Input() episode: Episode;

  constructor() { }

  ngOnInit() {
  }

}
