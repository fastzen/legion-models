import { Person } from "../src/Person";
import * as chai from "chai";

const expect = chai.expect;

describe("Person", () => {

  const person = new Person({ lastName: "Aitken", firstName: "Al", dateOfBirth: "1968-04-08"});

  it("should return the full name", () => {
    expect(person.fullname()).to.equal("Al Aitken");
  });

  it("should have an id", () => {
    expect(person._id.substr(0, 26)).to.equal("person:aitken-al-19680408-");
    expect(person._id.length).to.equal(31);
  });
});
