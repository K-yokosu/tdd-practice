import { Money } from "../../src/tmp_implementation/moneyTest";

describe("MeneyTest", () => {
    it("testMultiplication", () => {
        const five = Money.dollar(5);
        expect(Money.dollar(10).getAmount()).toEqual(five.times(2).getAmount());
        expect(Money.dollar(15).getAmount()).toEqual(five.times(3).getAmount());
    });
    it("testEquality", () => {
        const five = Money.dollar(5);
        expect(five.equals(Money.dollar(5))).toBeTruthy();
        expect(five.equals(Money.dollar(6))).not.toBeTruthy();
        expect(five.equals(Money.franc(5))).not.toBeTruthy();
    });
    it("testCurrency", () => {
        expect("USD").toEqual(Money.dollar(1).currency());
        expect("CHF").toEqual(Money.franc(1).currency());
    });
});