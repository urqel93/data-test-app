import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {UserService} from '../../services/user.service';
import {Action} from '@ngrx/store';
import {UsersActionsTypes} from './users.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';

@Injectable()

export class UsersEffects {

  @Effect() loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(UsersActionsTypes.GetUsers),
    mergeMap(() =>
      this.usersService.getUsers()
        .pipe(
          map(users => ({type: UsersActionsTypes.GetUsersApiSuccess, payload: users})),
          catchError(() => of({type: UsersActionsTypes.GetUsersApiFail}))
        ))
  );

  constructor(
    private usersService: UserService,
    private actions$: Actions,
  ) {
  }
}
