import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { PlayerListComponent } from './player-list/player-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'players',
    component: PlayerListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
