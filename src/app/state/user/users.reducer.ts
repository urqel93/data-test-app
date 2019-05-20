import {User} from '../../config/models';
import {UsersActions, UsersActionsTypes} from './users.actions';

export const users = 'users';


export interface UsersState {
  users: User[];
  isLoading: boolean;
  isError: boolean;
}

export interface State {
  users: UsersState;
}

export const initialState: UsersState = {
  users: [],
  isLoading: false,
  isError: false,
};


export function usersReducer(state = initialState, action: UsersActions): UsersState {
  switch (action.type) {

    case UsersActionsTypes.GetUsers:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case UsersActionsTypes.GetUsersApiSuccess:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
        isError: false,
      };

    case UsersActionsTypes.GetUsersApiFail:
      return {
        ...state,
        users: [],
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
}
