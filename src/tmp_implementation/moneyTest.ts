class Dollar {
    amount: number;
    constructor(amount: number) {
        this.amount = amount;
        
    }
    times(multiplier: number) {
        this.amount *= multiplier;
        
    }
}
export class MoneyTest {
    five: Dollar;
    constructor() {
        this.five = new Dollar(5);
    }
    testMultiplication() {
        this.five.times(2);
    }
}