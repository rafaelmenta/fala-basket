import { Component, OnInit, Input } from '@angular/core';
import { PodcastService, Episode } from '../podcast.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {

  @Input() episode: Episode;

  ngOnInit() {
  }

}
