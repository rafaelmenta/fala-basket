import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from './app.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {

  BASE_URL = `${this.config.API_ENDPOINT}/podcast`;

  constructor(
    @Inject(APP_CONFIG) private config: AppConfig,
    protected http: HttpClient,
  ) { }

  getHomeData() {
    return this.http.get<HomeData>(this.BASE_URL);
  }

  getEpisodes() {
    return this.http.get<Episode[]>(`${this.BASE_URL}/episodes`);
  }

  getEpisode(slug: string) {
    return this.http.get<Episode>(`${this.BASE_URL}/episode/${slug}`);
  }
}

export interface Episode {
  episodeNumber: number;
  title: string;
  duration: number;
  publishDate: Date;
  description: string;
  highlight: string;
  permalink: string;
  audio: string;
}

export interface HomeData {
  latest: Episode;
  episodes: Episode[];
}
