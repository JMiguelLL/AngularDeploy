import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { HomeComponent } from './pages/home/home.component';
import { CommentsComponent } from './pages/nosotros/comments/comments.component';

const routes: Routes = 
[
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'courses', component: CoursesComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'nosotros', component: CommentsComponent
  },
  {
    path: 'admin', 
    loadChildren: () => import('./pages/prueba/prueba.module').then(m => m.PruebaModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
