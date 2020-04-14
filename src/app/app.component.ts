import {Component} from '@angular/core';
import {UserModel} from '../models/UserModel';
import {UserService} from './services/user.service';
import {PostModel} from '../models/PostModel';
import {PostService} from './services/post.service';

@Component({
  selector: 'app-root',
  template: `<h1>hello {{msg}}!</h1>
    <app-user *ngFor="let u of users" [user]="u"></app-user>
    <app-post *ngFor="let p of posts" [post]="p"></app-post>
  `,
  styles: [`h1 {
    background: silver
  }`]
})
export class AppComponent {
  msg = 'users';
  users: UserModel[];
  posts: PostModel[];
  constructor(private userService: UserService, private postService: PostService) {
    this.userService.getUsers().subscribe(value => this.users = value);
    this.postService.getPosts().subscribe(value => this.posts = value);
  }
}
