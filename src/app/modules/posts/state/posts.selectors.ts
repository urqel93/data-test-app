import {createFeatureSelector, createSelector} from '@ngrx/store';
import {posts, PostsState} from './posts.reducer';

const getPostsFeatureState = createFeatureSelector<PostsState>(posts);

export const getPosts = createSelector(
  getPostsFeatureState,
  state => state.posts
);

export const getPostsLoading = createSelector(
  getPostsFeatureState,
  state => state.isLoading
);

export const getPostsError = createSelector(
  getPostsFeatureState,
  state => state.isError
);
