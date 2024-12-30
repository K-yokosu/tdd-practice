import { Money, Franc } from "../../src/tmp_implementation/moneyTest";

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
        const five_f = Money.franc(5);
        expect(five_f.equals(Money.franc(5))).toBeTruthy();
        expect(five_f.equals(Money.franc(6))).not.toBeTruthy();
        expect(five.equals(Money.franc(5))).not.toBeTruthy();
    });
    it("testFrancMultiplication", () => {
        const five = Money.franc(5);
        expect(Money.franc(10).getAmount()).toEqual(five.times(2).getAmount());
        expect(Money.franc(15).getAmount()).toEqual(five.times(3).getAmount());
    });
    it("testCurrency", () => {
        expect("USD").toEqual(Money.dollar(1).currency());
        expect("CHF").toEqual(Money.franc(1).currency());
    });
    it("testDifferentClassEquality", () => {
        const five = new Money(10, "CHF");
        expect(five.equals(new Franc(10, "CHF"))).toBeTruthy();
    });
});