import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsComponent} from './components/posts/posts.component';
import {postsRouting} from './posts.routing';
import {CardModule} from '../../shared-modules/card/card.module';
import {ItemModule} from '../../shared-modules/item/item.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {UsersEffects} from '../../state/user/users.effects';
import {PostsService} from './services/posts.service';
import {PostsEffects} from './state/posts.effects';
import {posts, postsReducer} from './state/posts.reducer';
import {LoaderModule} from '../../shared-modules/loader/loader.module';
import {PostModalModule} from '../../shared-modules/post-modal/post-modal.module';

@NgModule({
  imports: [
    CommonModule,
    postsRouting,
    CardModule,
    ItemModule,
    LoaderModule,
    PostModalModule,
    StoreModule.forFeature(posts, postsReducer),
    EffectsModule.forFeature([UsersEffects, PostsEffects]),
  ],
  declarations: [PostsComponent],
  exports: [],
  providers: [PostsService]
})

export class PostsModule {}
