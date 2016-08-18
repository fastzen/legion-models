import {Base} from "./Base";
export class Person extends Base {

  public _id: string;
  public firstName: string;
  public lastName: string;
  public dateOfBirth: string;

  constructor(data: any) {
    super();
    Object.assign(this, data);
    if (!this._id) {
      this._id = this.getSlug();
    }
  }

  public getSlug(): string {
    return this.createSlug([
      this.lastName,
      this.firstName,
      this.dateOfBirth.substring(0, 10).replace(/-/gi, ""),
      ]);
  }

  public fullname(): string {
    return this.firstName + " " + this.lastName;
  }

};
