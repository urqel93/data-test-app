import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apiUrl, usersUrl} from '../config/routes';
import {Observable} from 'rxjs';
import {User} from '../config/models';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private httpClient: HttpClient) {

  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(apiUrl + '/' + usersUrl);
  }

}
