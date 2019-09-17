import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Angulartics2 } from 'angulartics2';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() id: string;
  @Input() src: string;

  @ViewChild('audioPlayer') audio: ElementRef<HTMLAudioElement>;

  logEvent(action: string) {
    const currentTime = this.audio.nativeElement.currentTime;

    this.angulartics2.eventTrack.next({
      action,
      properties: {
        category: this.id,
        label: `[${action}] - ${this.id}`,
        value: Math.floor(currentTime),
      },
    });
  }

  constructor(
    private angulartics2: Angulartics2,
  ) { }

  ngOnInit() {
  }

}
