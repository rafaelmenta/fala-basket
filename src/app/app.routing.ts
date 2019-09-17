import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { EpisodeComponent } from './episode/episode.component';
import { ArchiveComponent } from './archive/archive.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'episodio/:id',
    component: EpisodeComponent,
  }
  {
    path: 'arquivo',
    component: ArchiveComponent,
  }
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
  declarations: [],
})
export class AppRouting { }
