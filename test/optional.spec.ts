import { Optional } from "../dist/optional"

describe("optional test", () => {
    const testData = "value";
    const target = Optional.of("value");
    const empty = Optional.empty<string>();

    it("insert data &", () => {
        expect(target.isPresent).toBeTruthy()
        expect(empty.isPresent).toBeFalsy()
    })

    it("get", () => {
        expect(target.get()).toBe(testData)
        expect(() => empty.get()).toThrowError()
    })
})