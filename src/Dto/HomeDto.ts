export class HomeDto {

    constructor() {
        this.banks = []
        this.totalBalance = 0
        this.totalExpenses = 0
        this.saldoDisponivel = 0
        this.totalAvailableBalance = 0
        this.saldo = 0
    }

    banks: BankDto[]
    totalBalance: number
    totalExpenses: number
    totalAvailableBalance: number
    saldoDisponivel: number
    saldo: number
    // SaldoTotal
    // SaldoTotalAvailable
    // Total despesas
    // Total despesas ativas e inativas 
    // Total despesas separadas e não separadas 


    sumTotalBalance(): void {
        this.banks.forEach((item) => {
            this.totalBalance += Number(item.balance)

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