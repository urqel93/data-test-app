import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PostsComponent} from './posts.component';
import {CardModule} from '../../../../shared-modules/card/card.module';
import {ItemModule} from '../../../../shared-modules/item/item.module';
import {LoaderModule} from '../../../../shared-modules/loader/loader.module';
import {PostModalModule} from '../../../../shared-modules/post-modal/post-modal.module';
import {Store, StoreModule} from '@ngrx/store';
import {PostsState} from '../../state/posts.reducer';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let store: Store<PostsState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CardModule,
        ItemModule,
        LoaderModule,
        PostModalModule,
        StoreModule.forRoot({})
      ],
      declarations:
        [
          PostsComponent,
        ],
      providers: [Store]

    })
      .compileComponents();
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    spyOn(store, 'dispatch');
    fixture.detectChanges();
  }));

});
