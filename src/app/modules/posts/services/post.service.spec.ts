import {getTestBed, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {PostsService} from './posts.service';

describe('PostsService', () => {
  let injector: TestBed;
  let service: PostsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService]
    });
    injector = getTestBed();
    service = injector.get(PostsService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('returned Observable should contain posts data of user with id = 1', () => {

    service.getPostByUserId(1).subscribe(
      data => {
        expect(data.length).toBe(10);
      });

  });

  it('should update the post with new values', () => {
    const post = {
      title: 'Test one two three',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      userId: 1,
      id: 1
    };

    service.updatePost(post).subscribe(
      data => {
        expect(data).toBe(post);
      });

  });

});
