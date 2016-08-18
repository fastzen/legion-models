"use strict";
const Base_1 = require("./Base");
class Person extends Base_1.Base {
    constructor(data) {
        super();
        Object.assign(this, data);
        if (!this._id) {
            this._id = this.getSlug();
        }
    }
    getSlug() {
        return this.createSlug([
            this.lastName,
            this.firstName,
            this.dateOfBirth.substring(0, 10).replace(/-/gi, ""),
        ]);
    }
    fullname() {
        return this.firstName + " " + this.lastName;
    }
}
exports.Person = Person;
;
