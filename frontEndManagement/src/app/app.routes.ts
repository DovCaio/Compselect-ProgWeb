import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { EventsComponent } from './features/events/events.component';
import { BlogComponent } from './features/blog/blog.component';
import { AuthorsComponent } from './features/authors/authors.component';
import { PublicationsComponent } from './features/publications/publications.component';
import { CreateEventComponent } from './features/events/create-event/create-event.component';
import { EditEventComponent } from './features/events/edit-event/edit-event.component';
import { CreateNewPostComponent } from './features/blog/create-new-post/create-new-post.component';
import { EditPostComponent } from './features/blog/edit-post/edit-post.component';
import { AddAuthorComponent } from './features/authors/add-author/add-author.component';
import { EditAuthorComponent } from './features/authors/edit-author/edit-author.component';
import { AddPublicationComponent } from './features/publications/add-publication/add-publication.component';
import { EditPublicationComponent } from './features/publications/edit-publication/edit-publication.component';
import { ManageComentsComponent } from './features/blog/manage-coments/manage-coments.component';

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
        path: 'events/create',
        component: CreateEventComponent
    },
    {
        path: 'events/edit',
        component: EditEventComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'blog/create',
        component: CreateNewPostComponent
    },
    {
        path: 'blog/edit',
        component: EditPostComponent
    },
    
    {
        path: 'authors',
        component: AuthorsComponent
    },
    {
        path: 'authors/add',
        component: AddAuthorComponent
    },
    {
        path: 'authors/edit',
        component: EditAuthorComponent
    },
    
    {
        path: 'publications',
        component: PublicationsComponent
    },
    {
        path: 'publications/add',
        component: AddPublicationComponent
    },
    {
        path: 'publications/edit',
        component: EditPublicationComponent
    },
    {
        path: 'blog/comments',
        component: ManageComentsComponent
    }

];
