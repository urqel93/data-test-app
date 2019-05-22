import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PostModalComponent} from './post-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxSmartModalModule} from 'ngx-smart-modal';

describe('PostModalComponent', () => {
  let component: PostModalComponent;
  let fixture: ComponentFixture<PostModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        NgxSmartModalModule.forRoot(),
      ],
      declarations: [PostModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('title field validity', () => {
    const title = component.form.controls.title;
    expect(title.valid).toBeFalsy();
  });

  it('body field validity', () => {
    const body = component.form.controls.body;
    expect(body.valid).toBeFalsy();
  });

  it('submitting a form emits a updated post', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['title'].setValue('Test Title');
    component.form.controls['body'].setValue('Lorem ipsum');
    expect(component.form.valid).toBeTruthy();

    let post = {
      ...component.post,
      title: component.form.value.title,
      body: component.form.value.body,
    };

    component.onSubmit();

    expect(post.title).toBe('Test Title');
    expect(post.body).toBe('Lorem ipsum');
  });

});
