import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { EventsComponent } from './features/events/events.component';
import { BlogComponent } from './features/blog/blog.component';
import { AuthorsComponent } from './features/authors/authors.component';
import { PublicationsComponent } from './features/publications/publications.component';
import { CreateEventComponent } from './features/events/create-event/create-event.component';
import { EditEventComponent } from './features/events/edit-event/edit-event.component';

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
    },
    {
        path: 'events/create',
        component: CreateEventComponent
    },
    {
        path: 'events/edit',
        component: EditEventComponent
    }
];
