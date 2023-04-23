export declare class Optional<T> {
    private _value?;
    static of<T>(value: T): Optional<T>;
    static empty<T>(): Optional<T>;
    private constructor();
    get isPresent(): boolean;
    get(): T;
    orElse(defaultValue: T): T;
    map<U>(func: (value: T) => U): Optional<U>;
    flatMap<U>(func: (value: T) => Optional<U>): Optional<U>;
}
//# sourceMappingURL=index.d.ts.map