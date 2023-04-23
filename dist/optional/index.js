"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Optional = void 0;
class Optional {
    constructor(value) {
        this._value = value;
    }
    isPresent() {
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
    map(fn) {
        if (this._value !== undefined) {
            const newValue = fn(this._value);
            return new Optional(newValue);
        }
        else {
            return new Optional();
        }
    }
    flatMap(fn) {
        if (this._value !== undefined) {
            const newOptional = fn(this._value);
            return newOptional;
        }
        else {
            return new Optional();
        }
    }
}
exports.Optional = Optional;
