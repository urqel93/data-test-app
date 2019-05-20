import {Action} from '@ngrx/store';

export interface AppState {
  app: string;
}

export const initialState: AppState = {
  app: 'DataWalk Test App',
};

export function appReducer(state = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
