import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponentComponent} from './pages/posts/posts-component.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  {
    path: 'posts',
    // component: PostsComponentComponent
    loadChildren: () => import('./pages/posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: '',
    children: [
      {
        path: '**',
        component: NotFoundComponent
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
