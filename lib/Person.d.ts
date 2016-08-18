import { Base } from "./Base";
export declare class Person extends Base {
    _id: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    constructor(data: any);
    getSlug(): string;
    fullname(): string;
}
