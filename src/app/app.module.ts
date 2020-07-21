import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {PostService} from './shared/service/post.service';
import {ErrorInterceptor} from './shared/interceptors/error.interceptor';
import {PostsModule} from './pages/posts/posts.module';
import {RouterModule} from '@angular/router';
import {PostsComponentComponent} from './pages/posts/posts-component.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        PostsComponentComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule,
        PostsModule,
        AppRoutingModule,
    ],
    providers: [
        PostService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        }
    ],
  exports: [
    PostsComponentComponent
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
