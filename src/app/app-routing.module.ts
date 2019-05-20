import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {postsRoute} from './config/routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: `/${postsRoute}`,
    pathMatch: 'full'
  },
  {
    path: postsRoute,
    loadChildren: './modules/posts/posts.module#PostsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
