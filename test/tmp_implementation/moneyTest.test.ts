import { Dollar } from "../../src/tmp_implementation/moneyTest";

describe("MeneyTest", () => {
    it("testMultiplication", () => {
        const five = new Dollar(5);
        expect(new Dollar(10).getAmount()).toEqual(five.times(2));
        expect(new Dollar(15).getAmount()).toEqual(five.times(3));
    });
    it("testEquality", () => {
        const five = new Dollar(5);
        expect(five.equals(new Dollar(5))).toBeTruthy();
        expect(five.equals(new Dollar(6))).not.toBeTruthy();
    });
});