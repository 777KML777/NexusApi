export class HomeDto {

    constructor() {
        this.banks = []
        this.totalBalance = 0
        this.totalAvailableBalance = 0
    }

    banks: BankDto[]
    totalBalance: number
    totalAvailableBalance: number

    sumTotalBalance(): void {
        this.banks.forEach((item) => {
            this.totalBalance += Number(item.balance)

            console.log('isprimindo nessa porra',item.availableBalance, item.balance)
            this.totalAvailableBalance +=  Boolean(item.availableBalance) == true?
             Number(item.balance) : 0
        })
    }
}


export class BankDto {
    id: number
    bankName: string
    balance: number
    availableBalance: boolean
}