class Money {
    protected amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }
    equals(obj: Money) {
        return this.amount === obj.amount && this.constructor.name === obj.constructor.name;
    }
    getAmount(): number {
        return this.amount;
    }
}

export class Dollar extends Money {
    constructor(amount: number) {
        super(amount);
    }
    times(multiplier: number) {
        return this.amount * multiplier;
    }    
}

export class Franc extends Money {
    constructor(amount: number) {
        super(amount);
    }
    times(multiplier: number) {
        return this.amount * multiplier;
    }
}