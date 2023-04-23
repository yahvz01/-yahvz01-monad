export declare class Result<T, E> {
    private _value?;
    private _error?;
    private constructor();
    static success<T>(value: T): Result<T, never>;
    static failure<E>(error: E): Result<never, E>;
    isFailure(): boolean;
    isSuccess(): boolean;
    getValue(): T;
    getError(): E;
    fold<U>(onSuccess: (value: T) => U, onError: (error: E) => U): U;
    map<U>(func: (value: T) => U): Result<U, E>;
    flatMap<U, F>(func: (value: T) => Result<U, F>): Result<U, E | F>;
}
//# sourceMappingURL=index.d.ts.map