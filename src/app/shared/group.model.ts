import {User} from './user.model';

export class Group {
  public gID: number;
  public name: string;
  public adminID: string;
  public users: User[];
  public userCount: number;
  public index: number;
  public adminEmail: string;


  constructor(gid, name, adminID, uCount, i, ae, users) {
    this.gID = gid;
    this.name = name;
    this.adminID = adminID;
    this.users = users;
    this.userCount = uCount;
    this.index = i;
    this.adminEmail = ae;
  }
}
