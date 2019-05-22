import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromUsers from '../../../../state/user/users.reducer';
import {getUsers} from '../../../../state/user/users.selectors';
import {Observable} from 'rxjs';
import {Post, User} from '../../../../config/models';
import {GetUsers} from '../../../../state/user/users.actions';
import {getPosts, getPostsError, getPostsLoading} from '../../state/posts.selectors';
import * as PostActions from '../../state/posts.actions';
import {GetPostsByUserID} from '../../state/posts.actions';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  users$ = this.store.pipe(select(getUsers)) as Observable<User[]>;
  posts$ = this.store.pipe(select(getPosts)) as Observable<Post[]>;
  isPostsLoading$ = this.store.pipe(select(getPostsLoading)) as Observable<any>;
  isPostsError$ = this.store.pipe(select(getPostsError)) as Observable<any>;

  userId;
  post;

  constructor(
    public modalService: NgxSmartModalService,
    private store: Store<fromUsers.State>,
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new GetUsers());
  }

  selectUser(userId) {
    this.userId = userId;
    this.store.dispatch(new GetPostsByUserID(userId));
  }

  openPostModal(post: Post) {
    this.post = post;
    this.modalService.open('postModal');
  }

  updatePost(value: Post) {
    /* This dispatch action use effect middleware but API don't return changed values */
    // this.store.dispatch(new PostActions.UpdatePostById(value));

    /* This action change value of post in state using reducer */
    this.store.dispatch(new PostActions.UpdatePostByIdNoAPI(value));
  }

}
