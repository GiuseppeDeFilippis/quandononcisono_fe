import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Stories } from './core/services/stories';
import { StoryDetail } from './pages/story-detail/story-detail';
import { Podcast } from './core/services/podcast';
import { EpisodeDetail } from './pages/episode-detail/episode-detail';
import { Newsletter } from './core/services/newsletter';
import { Contact } from './core/services/contact';
import { Contatti } from './pages/contatti/contatti';
import { Login } from './admin/login/login';
import { Dashboard } from './admin/dashboard/dashboard';
import { AdminAuth } from './core/services/admin-auth';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'racconti', component: Stories },
  { path: 'racconti/:slug', component: StoryDetail },
  { path: 'podcast', component: Podcast },
  { path: 'podcast/:slug', component: EpisodeDetail },
  { path: 'newsletter', component: Newsletter },
  { path: 'contatti', component: Contatti },

  // Admin
  { path: 'admin/login', component: Login },
  {
    path: 'admin',
    component: Dashboard,
    canActivate: [AdminAuth]
  },

  { path: '**', redirectTo: 'home' }
];
