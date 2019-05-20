import {PostsActions, PostsActionsTypes} from './posts.actions';
import {Post} from '../../../config/models';

export const posts = 'posts';


export interface PostsState {
  posts: Post[];
  isLoading: boolean;
  isError: boolean;
}

export interface State {
  Posts: PostsState;
}

export const initialState: PostsState = {
  posts: [],
  isLoading: false,
  isError: false,
};


export function postsReducer(state = initialState, action: PostsActions): PostsState {
  switch (action.type) {

    case PostsActionsTypes.GetPostsByUserID:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case PostsActionsTypes.GetPostsByUserIDApiSuccess:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
        isError: false,
      };

    case PostsActionsTypes.GetPostsByUserIDApiFail:
      return {
        ...state,
        posts: [],
        isLoading: false,
        isError: true,
      };

    case PostsActionsTypes.UpdatePostById:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case PostsActionsTypes.UpdatePostByIdSuccess:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case PostsActionsTypes.UpdatePostByIdFail:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
}
