export declare class Optional<T> {
    private _value?;
    constructor(value?: T);
    isPresent(): boolean;
    get(): T;
    orElse(defaultValue: T): T;
    map<U>(fn: (value: T) => U): Optional<U>;
    flatMap<U>(fn: (value: T) => Optional<U>): Optional<U>;
}
//# sourceMappingURL=index.d.ts.map