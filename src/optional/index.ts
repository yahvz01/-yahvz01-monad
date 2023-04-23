


export class Optional<T> {
    private _value?: T;

    static of<T>( value : T ) : Optional<T> {
        return new Optional(value);
    }

    static empty<T>() : Optional<T> {
        return new Optional<T>();
    }
  
    private constructor(value?: T) {
      this._value = value;
    }
  
    get isPresent(): boolean {
      return this._value !== undefined;
    }
  
    get(): T {
      if (this._value === undefined) {
        throw new Error('Value is not present');
      }
      return this._value;
    }
  
    orElse(defaultValue: T): T {
      if (this._value === undefined) {
        return defaultValue;
      } else {
        return this._value;
      }
    }
  
    map<U>(func: (value: T) => U): Optional<U> {
      if (this._value !== undefined) {
        const newValue = func(this._value);
        return new Optional(newValue);
      } else {
        return new Optional();
      }
    }
  
    flatMap<U>(func: (value: T) => Optional<U>): Optional<U> {
      if (this._value !== undefined) {
        const newOptional = func(this._value);
        return newOptional;
      } else {
        return new Optional();
      }
    }
  }
  