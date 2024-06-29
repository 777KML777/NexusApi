export class BankJsonDto {

  constructor() {
    this.banks = [
      {
        id: 1,
        bankName: "Nubank",
        balance: 5.16,
        available: true
      },
      {
        id: 2,
        bankName: "Santander",
        balance: 50.19,
        available: true
      },
      {
        id: 3,
        bankName: "Mercado Pago",
        balance: 7.13,
        available: true
      },
      {
        id: 4,
        bankName: "C6 Bank ",
        balance: 2.25,
        available: true
      },
      {
        id: 5,
        bankName: "Pic Pay",
        balance: 1.54,
        available: true
      },
      {
        id: 6,
        bankName: "Pag Bank",
        balance: 10.54,
        available: true
      },
      {
        id: 7,
        bankName: "FGTS",
        balance: 23.3,
        available: false
      }
    ]
  }

  banks: any[]

}
