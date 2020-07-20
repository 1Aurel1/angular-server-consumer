import {Component, OnInit} from '@angular/core';
import {Post} from '../../shared/model/Post';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent implements OnInit {

  private url = 'https://jsonplaceholder.typicode.com/posts';
  private post: Post;
  posts: Post[];

  constructor(private http: HttpClient) {
    http.get<Post[]>(this.url).subscribe(
      value => this.posts = value
    );

  }
  ngOnInit(): void {
  }

  createPost(title: HTMLInputElement) {
    const post = {title: title.value};
    this.http.post<Post>(this.url, post).subscribe(
      value => {
        this.posts.splice(0, 0, value);
      });
  }

  updatePost(post: Post) {
    this.http.put<Post>(this.url + '/' + post.id, post).subscribe(value => console.log(value));
  }

  deletePost(post: Post) {
    this.http.delete(this.url + '/' + post.id).subscribe(
      value => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }
    );
  }
}
