import { RecentPost } from "./RecentPost"

export class HomeDto {

    constructor() {
        this.banks = []

    }

    banks: BankDto[]
    totalBalance: number

    sumTotalBalance(): void {
        this.banks.forEach((item) => {
            this.totalBalance += item.balance
        })
    }
}


export class BankDto {
    bankName: string
    balance: number

}