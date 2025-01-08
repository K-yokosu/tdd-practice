export interface Expression {}

export class Money implements Expression {
    protected amount: number;
    protected currency_kind: string = "";

    constructor(amount: number, currency_kind: string) {
        this.amount = amount;
        this.currency_kind = currency_kind;
    }

    currency(): string {
        return this.currency_kind;
    }
    equals(obj: Money) {
        return this.amount === obj.amount && this.currency_kind === obj.currency_kind;
    }
    getAmount(): number {
        return this.amount;
    }
    times(multiplier: number) {
        return new Money(this.amount * multiplier, this.currency_kind);
    }
    plus(addend: Money): Expression {
        return new Money(this.amount + addend.amount, this.currency_kind);
    }
    static dollar(amount: number) {
        return new Money(amount, "USD");
    }
    static franc(amount: number) {
        return new Money(amount, "CHF");
    }
}

export class Bank {
    reduce(source: Expression, to: string) {
        return Money.dollar(10);
    }
}