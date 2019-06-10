import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ServerService} from '../server.service';
import { HttpClient} from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import {Observable} from 'rxjs';
import {basename} from 'path';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title = 'git-user';
  @ViewChild('username') name: ElementRef;
  public Userdata: any = [{



  }];
  public id: number ;
  public login: string ;
  public profile: any ;
  public repos: number ;
  public followers: number ;
  public following: number ;
  public image: any;
  public bio: string;
  public url:any;
  public istrue:boolean=false;
  public base:any='base64data'

  constructor(private hp: ServerService , private http: HttpClient,private sanitizer : DomSanitizer) {
//     var stmt = db.prepare("SELECT image FROM test WHERE id=$id"); // SQL statement
//     var uarray = stmt.getAsObject({$id:1})['image']; // UInt8Array containing the bytes of the image
// // (of course you can use other API methods to query your database
//     stmt.free(); // Free the memory used by the statement
//
// // The tricky part : create a blob url to your image, that you can use anywhere
//     var objurl = window.URL.createObjectURL(new Blob([uarray]));
//     var img = new Image();
//     img.src = objurl;
//     img.onload = function() {
//       // do something with your image
//     }

  }
  ngOnInit() {

  }

  getUser(user, forms) {
    this.hp.getId(user).subscribe((data) => {

      console.log(data);
      this.Userdata = data;
      this.login = this.Userdata.login;
      this.profile = this.Userdata.avatar_url;
      this.repos = this.Userdata.public_repos;
      this.followers = this.Userdata.followers;
      this.id = this.Userdata.id;
      this.following = this.Userdata.following;
      this.url=this.Userdata.html_url;

      if(this.Userdata.bio == " "){
        this.bio = 'Null';
      } else{
        this.bio = this.Userdata.bio;
      }


      console.log(this.Userdata.id);
      console.log(this.Userdata.bio);
      console.log(this.Userdata.login);
      console.log(this.Userdata.profile);

    }

    );
    this.hp.getPic(user, 1668).subscribe((data) => {
      this.image = window.URL.createObjectURL(data);
      let mySrc = this.sanitizer.bypassSecurityTrustUrl('this.image' + this.base);
      console.log(data);

});






  }
  transform(value: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
  // getPic(user): Observable<object> {
  //   return this.http.get<object>(this.url + user + '?access_token=' + this.access + '/avatar_url' );
  // }
  // "login": "daneden",
  // "id": 439365,
  // "node_id": "MDQ6VXNlcjQzOTM2NQ==",
  // "avatar_url": "https://avatars3.githubusercontent.com/u/439365?v=4",
  // "gravatar_id": "",
  // "url": "https://api.github.com/users/daneden",
  // "html_url": "https://github.com/daneden",
  // "followers_url": "https://api.github.com/users/daneden/followers",
  // "following_url": "https://api.github.com/users/daneden/following{/other_user}",
  // "gists_url": "https://api.github.com/users/daneden/gists{/gist_id}",
  // "starred_url": "https://api.github.com/users/daneden/starred{/owner}{/repo}",
  // "subscriptions_url": "https://api.github.com/users/daneden/subscriptions",
  // "organizations_url": "https://api.github.com/users/daneden/orgs",
  // "repos_url": "https://api.github.com/users/daneden/repos",
  // "events_url": "https://api.github.com/users/daneden/events{/privacy}",
  // "received_events_url": "https://api.github.com/users/daneden/received_events",
  // "type": "User",
  // "site_admin": false,
  // "name": "Daniel Eden",
  // "company": "Facebook",
  // "blog": "https://daneden.me",
  // "location": "Oakland, CA",
  // "email": "dan.eden@me.com",
  // "hireable": null,
  // "bio": "Designer, writing & thinking about Design Systems.",
  // "public_repos": 66,
  // "public_gists": 162,
  // "followers": 5515,
  // "following": 91,
  // "created_at": "2010-10-14T13:35:34Z",
  // "updated_at": "2019-06-01T17:58:23Z"
}
