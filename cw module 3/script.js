class BankAccount {
    #balance;
    #minAmout;
    #checkAmout;
    constructor(owner, initBalance = 0) {
        this.owner = owner;
        this.#balance = initBalance;
        this.#minAmout = 0;

        console.log(`Счет на имя ${this.owner} успешно открыт`);
    }

    deposit(amout) {
        if (this.#checkAmount(amout)) {
            this.#balance += amout;
            console.log(`счет пополнен на ${amout}`);
        } else {
            console.log('Некорректное значение суммы для пополнения');
        }
    }

    withDraw(amout) {

        if(!this.#checkAmount(amout)) {
            console.log('Некорректное значение суммы для снятия');
            return;
        }

        if(amout > this.#balance) {
            console.log('Недостаточно средств');
            return;
        }

        this.#balance -= amout;
        console.log(`Со счета сняли ${amout}`);


        // if (checkAmount(amout) && amout <= this.#balance) {
        //     this.#balance -= amout;
        //     console.log(`Со счета сняли ${amout}`);
        // } else {
        //     console.log('Некорректное значение суммы для снятия');
        // }
    }

    #checkAmount(amout) {
        return typeof amout == "number" && amout > this.#minAmout;
    }

    getBalance() {
        return this.#balance;
    }
}

const acount = new BankAccount("Глеб", 200);
acount.deposit(300);