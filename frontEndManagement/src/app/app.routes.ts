import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { EventsComponent } from './features/events/events.component';
import { BlogComponent } from './features/blog/blog.component';
import { AuthorsComponent } from './features/authors/authors.component';
import { PublicationsComponent } from './features/publications/publications.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'events',
        component: EventsComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'authors',
        component: AuthorsComponent
    },
    {
        path: 'publications',
        component: PublicationsComponent
    }
];
