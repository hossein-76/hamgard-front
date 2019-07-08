export class User {
  public uID: number;
  public username: string;
  public password: string;
  public email: string;
  public firstName: string;
  public lastName: string;

  constructor(uid, username, pass, email, fName, lName) {
    this.uID = uid;
    this.username = username;
    this.password = pass;
    this.email = email;
    this.firstName = fName;
    this.lastName = lName;
  }
}
