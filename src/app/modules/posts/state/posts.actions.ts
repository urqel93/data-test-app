import {Action} from '@ngrx/store';
import {Post} from '../../../config/models';

export enum PostsActionsTypes {
  GetPostsByUserID = '[Posts] Get Posts By User Id',
  GetPostsByUserIDApiSuccess = '[Posts / API] Get Posts By User Id Success',
  GetPostsByUserIDApiFail = '[Posts /API] Get Posts By User Id Fail',
  UpdatePostById = '[Post] Update Post',
  UpdatePostByIdSuccess = '[Post / API] Update Post Success',
  UpdatePostByIdFail = '[Post /API] Update Post Fail',
  UpdatePostByIdNoAPI = '[Post] Update Post No API',
}

export class GetPostsByUserID implements Action {
  readonly type = PostsActionsTypes.GetPostsByUserID;

  constructor(public userId: string) {
  }
}

export class GetPostsByUserIDApiSuccess implements Action {
  readonly type = PostsActionsTypes.GetPostsByUserIDApiSuccess;

  constructor(public payload: Post[]) {
  }
}

export class GetPostsByUserIDApiFail implements Action {
  readonly type = PostsActionsTypes.GetPostsByUserIDApiFail;

  constructor(public payload: any) {
  }

}

export class UpdatePostById implements Action {
  readonly type = PostsActionsTypes.UpdatePostById;

  constructor(public post: Post) {
  }
}


export class UpdatePostByIdSuccess implements Action {
  readonly type = PostsActionsTypes.UpdatePostByIdSuccess;

  constructor(public payload: any) {
  }
}


export class UpdatePostByIdFail implements Action {
  readonly type = PostsActionsTypes.UpdatePostByIdFail;

  constructor(public payload: any) {
  }
}

export class UpdatePostByIdNoAPI implements Action {
  readonly type = PostsActionsTypes.UpdatePostByIdNoAPI;

  constructor(public post: Post) {
  }
}

export type PostsActions =
  | GetPostsByUserID
  | GetPostsByUserIDApiSuccess
  | GetPostsByUserIDApiFail
  | UpdatePostById
  | UpdatePostByIdSuccess
  | UpdatePostByIdFail
  | UpdatePostByIdNoAPI;
