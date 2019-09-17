import { Component, OnInit, Input } from '@angular/core';
import { Episode } from '../podcast.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  @Input() episodes: Episode[];

  constructor() { }

  ngOnInit() {
  }

}
