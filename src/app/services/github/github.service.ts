import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService {

    private username: string;
    private clientId: 'a93b99c3c0f7c001ab8c';
    private clientSecret: '026cfd13d1cd017a34dd1275314ba4a17f4b739d';

  constructor(private _http: Http) {
    this.username = 'bradtraversy';
  }
  getUser() {

    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.clientId +
        '&client_secret=' + this.clientSecret).map(res => res.json());
  }

  getRepos() {
    return this._http.get('http://api.github.com/users/' + this.username + '/repos' + '?client_id=' + this.clientId +
        '&client_secret=' + this.clientSecret).map(res => res.json());
  }

  updateUser(username) {
      this.username = username;
  }

}
