import * as _ from "lodash";

export class Base {

  protected createSlug (options: Array<String>): string {
    let foo = _.concat(options, [this.fairlyUniqueString()]);
    let slug = _.join(foo);
    return this.constructor.name.toLowerCase() + ":" + this.toId(slug);
  }

  // https://github.com/gr2m/to-id/blob/master/to-id.js
  private toId (input: string): string {

    let nonLetters = /[ !"#\$%&'\(\)\*\+,\-\.\/:;<=>\?@\[\\\]\^_`\{\|\}~’]+/g;
    let dashesAtBeginningOrEnd = /(^-+|-+$)/g;

    input = input.trim().toLowerCase();
    input = input.replace(nonLetters, "-");
    input = input.replace(dashesAtBeginningOrEnd, "");
    return input;
  }

  private fairlyUniqueString(): string {
    return (Math.random() + 1).toString(36).substr(2, 5);
  }

}
