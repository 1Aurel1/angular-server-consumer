import {Component, OnInit} from '@angular/core';
import {Post} from '../../shared/model/Post';
import {HttpClient} from '@angular/common/http';
import {PostService} from "../../service/post.service";

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent implements OnInit {

  private post: Post;
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
      });
  }

  updatePost(post: Post) {
      this.service.updatePost(post)
      .subscribe(value => console.log(value));
  }

  deletePost(post: Post) {
      this.service.deletePost(post)
      .subscribe(
      value => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }
    );
  }
}
