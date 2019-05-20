import {createFeatureSelector, createSelector} from '@ngrx/store';
import {users, UsersState} from './users.reducer';

const getUsersFeatureState = createFeatureSelector<UsersState>(users);

export const getUsers = createSelector(
  getUsersFeatureState,
  state => state.users
);

export const getUsersLoading = createSelector(
  getUsersFeatureState,
  state => state.isLoading
);

export const getUsersError = createSelector(
  getUsersFeatureState,
  state => state.isError
);
