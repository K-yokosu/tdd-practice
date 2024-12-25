import { Dollar, Franc } from "../../src/tmp_implementation/moneyTest";

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
        const five_f = new Franc(5);
        expect(five_f.equals(new Franc(5))).toBeTruthy();
        expect(five_f.equals(new Franc(6))).not.toBeTruthy();
        expect(five.equals(new Franc(5))).not.toBeTruthy();
    });
    it("testFrancMultiplication", () => {
        const five = new Franc(5);
        expect(new Franc(10).getAmount()).toEqual(five.times(2));
        expect(new Franc(15).getAmount()).toEqual(five.times(3));
    });
});