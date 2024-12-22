import { Dollar } from "../../src/tmp_implementation/moneyTest";

describe("Dollar", () => {
    it("testMultiplication", () => {
        const five = new Dollar(5);
        let product: number = five.times(2);
        expect(product).toEqual(10);
        product = five.times(3);
        expect(product).toEqual(15);
    });
});