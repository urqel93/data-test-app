import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PostModalComponent} from './components/post-modal/post-modal.component';
import {NgxSmartModalModule} from 'ngx-smart-modal';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxSmartModalModule.forRoot(),
  ],
  declarations: [
    PostModalComponent
  ],
  exports: [
    PostModalComponent
  ]
})
export class PostModalModule {}
