"use strict";
const _ = require("lodash");
class Base {
    createSlug(options) {
        let foo = _.concat(options, [this.fairlyUniqueString()]);
        let slug = _.join(foo);
        return this.constructor.name.toLowerCase() + ":" + this.toId(slug);
    }
    toId(input) {
        let nonLetters = /[ !"#\$%&'\(\)\*\+,\-\.\/:;<=>\?@\[\\\]\^_`\{\|\}~’]+/g;
        let dashesAtBeginningOrEnd = /(^-+|-+$)/g;
        input = input.trim().toLowerCase();
        input = input.replace(nonLetters, "-");
        input = input.replace(dashesAtBeginningOrEnd, "");
        return input;
    }
    fairlyUniqueString() {
        return (Math.random() + 1).toString(36).substr(2, 5);
    }
}
exports.Base = Base;
