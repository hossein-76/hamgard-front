import {Group} from '../shared/group.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class GroupsService {
  host = 'http://192.168.43.124:8001';
  headers = new HttpHeaders({Authorization: this.authService.getToken()});
  public selectedIndex: number;

  constructor(private  router: Router,
              private  http: HttpClient,
              private  authService: AuthService) {}

  public groupSelected = new EventEmitter<Group>();

  groups: Group[] = [];

  public getGroups() {
    return this.http.get(this.host + '/api/groups/all/', { headers: this.headers});
  }

  public getGroup(index: number) {
    return this.groups[index];
  }

  public createGroup(n: string, email1: string, email2: string, email3: string) {
    return this.http.post(this.host + '/api/groups/create/', {
      name: n,
      emails: [email1, email2, email3]
    }, { headers: this.headers});
    this.router.navigate(['/']);
  }

  public getUsersOfTheGroup(gid: number) {
    return this.http.get(this.host + '/api/groups/detail/' + gid + '/', {headers: this.headers});
  }

  public leaveGroup(gid: number) {
    return this.http.post(this.host + '/api/groups/leave/', { group_id: gid}, {headers: this.headers} );
  }

/*  public getIDbyIndex(index: number) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.groups.length; i++) {
      if (this.groups[i].gID === index) {
        console.log('found');
        return this.groups[i].gID;
      }
    }
  }*/

  public addGroup(g) {
    const obj = new Group(g.id, g.name, g.admin_id, g.members_count, g.index, g.admin_email, null);
    this.groups.push(obj);
  }

  public getSelected() {
    return this.getGroup(this.selectedIndex);
  }
}
