import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './components/posts/posts.component';
import {ModuleWithProviders} from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  }
];

export const postsRouting: ModuleWithProviders = RouterModule.forChild(
  routes,
);
