import {Component, OnInit} from '@angular/core';
import {Post} from '../../shared/model/Post';
import {PostService} from '../../shared/service/post.service';

@Component({
  selector: 'app-posts-component',
  templateUrl: '../../components/posts-component/posts-component.component.html',
  styleUrls: ['../../components/posts-component/posts-component.component.css']
})
export class PostsComponentComponent implements OnInit {
  posts: Post[];

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getPosts().subscribe(
      value => this.posts = value
    );
  }

  createPost(title: HTMLInputElement) {
    const post = {title: title.value};
    this.service.createPost(post)
      .subscribe(
      value => {
        this.posts.splice(0, 0, value);
      }
    );
  }

  updatePost(post: Post) {
      this.service.updatePost(post)
      .subscribe(
        value => console.log(value)
      );
  }

  deletePost(post: Post) {
      this.service.deletePost(post)
      .subscribe(
        () => {
          const index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        }
    );
  }
}
