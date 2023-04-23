export class Result<T, E> {
    private _value?: T;
    private _error?: E;
  
    private constructor() {}
  
    static success<T>(value: T): Result<T, never> {
        const result = new Result<T, never>();
        result._value = value;
        return result;
    }
  
    static failure<E>(error: E): Result<never, E> {
        const result = new Result<never, E>();
        result._error = error;
        return result;
    }
  
    isFailure(): boolean {
        return this._error !== undefined;
    }
  
    isSuccess(): boolean {
        return this._value !== undefined;
    }
  
    getValue(): T {
        if (this._value === undefined) {
            throw new Error('Result does not contain a value');
        }
    
        return this._value;
    }
  
    getError(): E {
        if (this._error === undefined) {
            throw new Error('Result does not contain an error');
        }
    
        return this._error;
    }
  
    fold<U>(onSuccess: (value: T) => U, onError: (error: E) => U): U {
        if (this._value !== undefined) {
            return onSuccess(this._value);
        } else {
            return onError(this._error as E);
        }
    }
    map<U>(func: (value: T) => U): Result<U, E> {
        if (this._value !== undefined) {
            const newValue = func(this._value);
            return Result.success(newValue);
        } else {
            return Result.failure(this._error as E);
        }
    }

    flatMap<U, F>(func: (value: T) => Result<U, F>): Result<U, E | F> {
        if (this._value !== undefined) {
            const newResult = func(this._value);
            if (newResult.isFailure()) {
                return Result.failure(newResult.getError() as E | F);
            } else {
                return Result.success(newResult.getValue());
            }
        } else {
            return Result.failure(this._error as E);
        }
    }
}