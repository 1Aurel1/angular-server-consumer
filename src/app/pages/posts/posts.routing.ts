import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './posts.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  }
];
export const PostsRouts = RouterModule.forChild(routes);
