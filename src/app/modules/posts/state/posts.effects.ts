import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {GetPostsByUserID, PostsActionsTypes, UpdatePostById} from './posts.actions';
import {PostsService} from '../services/posts.service';
import * as PostActions from '../state/posts.actions';

@Injectable()

export class PostsEffects {

  @Effect() loadPostsByUserId$: Observable<Action> = this.actions$.pipe(
    ofType(PostsActionsTypes.GetPostsByUserID),
    mergeMap((action: GetPostsByUserID) =>
      this.postsService.getPostByUserId(action.userId)
        .pipe(
          map(posts => ({type: PostsActionsTypes.GetPostsByUserIDApiSuccess, payload: posts})),
          catchError(() => of({type: PostsActionsTypes.GetPostsByUserIDApiFail}))
        ))
  );

  @Effect() updatePostById$: Observable<Action> = this.actions$.pipe(
    ofType(PostsActionsTypes.UpdatePostById),
    mergeMap((action: UpdatePostById) =>
      this.postsService.updatePost(action.post)
        .pipe(
          switchMap(post =>
            [
              new PostActions.UpdatePostByIdSuccess(post),
              new PostActions.GetPostsByUserID(post.userId.toString())
            ]),
          catchError(() => of({type: PostsActionsTypes.UpdatePostByIdFail}))
        )
    )
  );

  constructor(
    private postsService: PostsService,
    private actions$: Actions,
  ) {
  }
}
