import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localePt from '@angular/common/locales/pt';

import {  Angulartics2Module } from 'angulartics2';
import {  Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { APP_CONFIG, AppConfig } from './app.config';

import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { AboutComponent } from './about/about.component';
import { RecentComponent } from './recent/recent.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { HostsComponent } from './hosts/hosts.component';
import { EpisodeComponent } from './episode/episode.component';
import { EpisodeInfoComponent } from './episode-info/episode-info.component';
import { ArchiveComponent } from './archive/archive.component';
import { PlayerComponent } from './player/player.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    MenuComponent,
    SubscribeComponent,
    AboutComponent,
    RecentComponent,
    EpisodesComponent,
    HostsComponent,
    EpisodeComponent,
    EpisodeInfoComponent,
    ArchiveComponent,
    PlayerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),

    AppRouting,
  ],
  entryComponents: [],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
