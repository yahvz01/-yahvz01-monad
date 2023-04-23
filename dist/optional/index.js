"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Optional = void 0;
class Optional {
    static of(value) {
        return new Optional(value);
    }
    static empty() {
        return new Optional();
    }
    constructor(value) {
        this._value = value;
    }
    get isPresent() {
        return this._value !== undefined;
    }
    get() {
        if (this._value === undefined) {
            throw new Error('Value is not present');
        }
        return this._value;
    }
    orElse(defaultValue) {
        if (this._value === undefined) {
            return defaultValue;
        }
        else {
            return this._value;
        }
    }
    map(func) {
        if (this._value !== undefined) {
            const newValue = func(this._value);
            return new Optional(newValue);
        }
        else {
            return new Optional();
        }
    }
    flatMap(func) {
        if (this._value !== undefined) {
            const newOptional = func(this._value);
            return newOptional;
        }
        else {
            return new Optional();
        }
    }
}
exports.Optional = Optional;
