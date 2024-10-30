import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { MenuComponent } from './menu/menu.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent},
    { path: 'home', component: HomeComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'blog', component: BlogComponent },
    {path:'about',component:AboutComponent}
];
