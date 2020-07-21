import { Injectable } from '@angular/core';
import {Post} from '../model/Post';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {NotFoundError} from '../errors/not-found-error';
import {AppError} from '../errors/app-error';
import {BadInput} from '../errors/bad-input';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(){

    return this.http.get<Post[]>(this.url);
  }

  createPost(post) {

      return this.http.post<Post>(this.url, post);
  }

  updatePost(post: Post) {

      return this.http.put<Post>(this.url + '/' + post.id, post);
  }

  deletePost(post: Post) {

      return this.http.delete(this.url + '/' + post.id);
  }

}
