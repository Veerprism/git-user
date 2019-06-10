import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UserComponent} from './user/user.component';
import {UserdataModel} from './userdata.model';
import {AppComponent} from './app.component';


@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private url = 'https://api.github.com/users/';
  private access: any = '9f58cdcfbc3b9f2f35471d8b6d5ce1b260296c77';
 public users: UserComponent;
 public src: any;
  constructor(private http: HttpClient) {

  }

  getId(user): Observable<object> {

    return this.http.get<object>(this.url + user );

  }
  getPic(user, id) {

    return this.http.get( 'https://avatars.githubusercontent.com/u/' + id,{ responseType: 'blob' });
  }
  // avatar_url": "https://avatars3.githubusercontent.com/u/439365?v=4",
  // https://avatars.githubusercontent.com/u/YOUR_USER_ID
}
// image.src = 'data:image/png;base64,'+ base64blob;
