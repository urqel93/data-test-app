import {Action} from '@ngrx/store';
import {User} from '../../config/models';

export enum UsersActionsTypes {
  GetUsers = '[Users] Get Users',
  GetUsersApiSuccess = '[Users / API] Get Users Success',
  GetUsersApiFail = '[Users /API] Get Users Fail',
}

export class GetUsers implements Action {
  readonly type = UsersActionsTypes.GetUsers;
}

export class GetUsersApiSuccess implements Action {
  readonly type = UsersActionsTypes.GetUsersApiSuccess;

  constructor(public payload: User[]) {
  }
}

export class GetUsersApiFail implements Action {
  readonly type = UsersActionsTypes.GetUsersApiFail;

  constructor(public payload: any) {}

}

export type UsersActions =
  | GetUsers
  | GetUsersApiSuccess
  | GetUsersApiFail;
