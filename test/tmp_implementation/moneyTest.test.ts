import { Dollar } from "../../src/tmp_implementation/moneyTest";

describe("MeneyTest", () => {
    it("testMultiplication", () => {
        const five = new Dollar(5);
        let product: number = five.times(2);
        expect(product).toEqual(10);
        product = five.times(3);
        expect(product).toEqual(15);
    });
    it("testEquality", () => {
        const five = new Dollar(5);
        expect(five.equals(new Dollar(5))).toBeTruthy();
        expect(five.equals(new Dollar(6))).not.toBeTruthy();
    });
});