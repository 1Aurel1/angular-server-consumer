import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsComponent} from './posts.component';
import {NavComponentComponent} from '../../components/nav-component/nav-component.component';
import {PostsRouts} from './posts.routing';
import {AppModule} from '../../app.module';

@NgModule({
  declarations: [
    PostsComponent,
    NavComponentComponent
  ],
  imports: [
    CommonModule,
    PostsRouts,
  ]
})
export class PostsModule { }
