"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
class Result {
    constructor() { }
    static success(value) {
        const result = new Result();
        result._value = value;
        return result;
    }
    static failure(error) {
        const result = new Result();
        result._error = error;
        return result;
    }
    isFailure() {
        return this._error !== undefined;
    }
    isSuccess() {
        return this._value !== undefined;
    }
    getValue() {
        if (this._value === undefined) {
            throw new Error('Result does not contain a value');
        }
        return this._value;
    }
    getError() {
        if (this._error === undefined) {
            throw new Error('Result does not contain an error');
        }
        return this._error;
    }
    fold(onSuccess, onError) {
        if (this._value !== undefined) {
            return onSuccess(this._value);
        }
        else {
            return onError(this._error);
        }
    }
    map(fn) {
        if (this._value !== undefined) {
            const newValue = fn(this._value);
            return Result.success(newValue);
        }
        else {
            return Result.failure(this._error);
        }
    }
    flatMap(fn) {
        if (this._value !== undefined) {
            const newResult = fn(this._value);
            if (newResult.isFailure()) {
                return Result.failure(newResult.getError());
            }
            else {
                return Result.success(newResult.getValue());
            }
        }
        else {
            return Result.failure(this._error);
        }
    }
}
exports.Result = Result;
