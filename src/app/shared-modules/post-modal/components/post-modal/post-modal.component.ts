import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Post} from '../../../../config/models';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss']
})
export class PostModalComponent implements OnInit, OnChanges {

  @Input() post: Post;
  @Output() update = new EventEmitter<Post>();
  form: FormGroup;

  constructor(public modalService: NgxSmartModalService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    const value = changes.post.currentValue;
    if (value) {
      this.form.patchValue({body: value.body, title: value.title});
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      body: new FormControl('', Validators.minLength(2)),
      title: new FormControl('', Validators.minLength(2)),
    });
  }

  closeModal() {
    this.modalService.close('postModal');
  }

  onSubmit() {
    console.log(this.form.value);
    const post = {
      ...this.post,
      body: this.form.value.body,
      title: this.form.value.title,
    };
    this.update.emit(post);
    this.closeModal();
  }

}
