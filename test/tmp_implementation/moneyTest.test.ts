import { Money } from "../../src/tmp_implementation/moneyTest";

describe("MeneyTest", () => {
    it("testMultiplication", () => {
        const five = Money.dollar(5);
        expect(Money.dollar(10).getAmount()).toEqual(five.times(2));
        expect(Money.dollar(15).getAmount()).toEqual(five.times(3));
    });
    it("testEquality", () => {
        const five = Money.dollar(5);
        expect(five.equals(Money.dollar(5))).toBeTruthy();
        expect(five.equals(Money.dollar(6))).not.toBeTruthy();
        const five_f = Money.franc(5);
        expect(five_f.equals(Money.franc(5))).toBeTruthy();
        expect(five_f.equals(Money.franc(6))).not.toBeTruthy();
        expect(five.equals(Money.franc(5))).not.toBeTruthy();
    });
    it("testFrancMultiplication", () => {
        const five = Money.franc(5);
        expect(Money.franc(10).getAmount()).toEqual(five.times(2));
        expect(Money.franc(15).getAmount()).toEqual(five.times(3));
    });
    it("testCurrency", () => {
        expect("USD").toEqual(Money.dollar(1).currency());
        expect("CHF").toEqual(Money.franc(1).currency());
    });
});