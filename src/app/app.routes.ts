import { Routes } from '@angular/router';
import { ContactPageComponent } from './Components/contact/contact-page.component';
import { PageNotFoundComponent } from './Components/notfound/page-not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { BlogComponent } from './Components/blog/blog.component';

export const routes: Routes = [
    {path: '', title: 'Home', component: HomeComponent},
    {path: 'projects', title: 'Projects', component: ProjectsComponent },
    {path: 'blog', title: 'Blog', component: BlogComponent },
    {path: 'contact', title: 'Contact', component: ContactPageComponent },
    {path: '**', component: PageNotFoundComponent}
];
