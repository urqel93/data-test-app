import {HttpClient, HttpParams} from '@angular/common/http';
import {apiUrl, postsUrl, userIdUrl} from '../../../config/routes';
import {Post} from '../../../config/models';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class PostsService {

  constructor(public httpClient: HttpClient) {
  }

  getPostByUserId(userId): Observable<Post[]> {
    const options = {params: new HttpParams().set(userIdUrl, userId)};

    return this.httpClient.get<Post[]>(apiUrl + '/' + postsUrl, options);
  }

  updatePost(post: Post): Observable<Post> {
    return this.httpClient.put<Post>(apiUrl + '/' + postsUrl + '/' + post.id, post);
  }

}
