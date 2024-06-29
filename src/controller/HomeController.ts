import { Request, Response } from "express";
import { readRepoFile } from "../utils/utils";
import { HomeDto } from "../Dto/HomeDto";
import { BankJsonDto } from "../Repositories/bankJsontype"

export const homeData = async (
    request: Request,
    response: Response) => {

    const homeData = new HomeDto();
    const yellow = new BankJsonDto();

    // Total das dívidas 
    // *** para isso é necessário ter o repositório de despesas *** 
    // src\controller\HomeController.ts
    // src\Repositories\bankJson.json
    // let bankRepository = readRepoFile('src/Repositories/bankJson.json')

    // ESTOU TRABALHANDO A PARTIR DAQUI 
    const path = require('path');

    // Obtendo o caminho absoluto de um arquivo
    // const filePath = path.join(__dirname, 'src', 'Repositories', 'bankJson.json');
    const filePath = path.join(__dirname, 'Repositories', 'bankJson.json');

    console.log(filePath); // Imprime o caminho absoluto do arquivo

    let bankRepository = readRepoFile(filePath)

    // let bankRepository = yellow;
    bankRepository.banks.forEach((item) => {
        let x = { id: 0, bankName: '', balance: 0, available: false }
        x = item
        homeData.banks.push({ id: x.id, bankName: x.bankName, balance: x.balance, availableBalance: x.available })
    }
    )

    console.log(yellow);

    homeData.sumTotalBalance()

    return response.json(homeData)
}

// export class HomeController {
//  x = new HomeServices();

// const userRepository =
//     AppDataSource.getRepository(User);

// const enterpriseRepository =
//     AppDataSource.getRepository(Enterprise);

// const postRepository =
//     AppDataSource.getRepository(PublicationEntity);

    // // testar isso aqui depois somente com javascript
    // let saveRegister: {
    //     banks: [
    //         {
    //             bankName: string,
    //             balance: string
    //         }
    //     ]
    // } = { banks: [{ bankName: "", balance: "" }] }


    // let data: { bankName: string, balance: string } = { bankName: "", balance: '' };
    // data.bankName = request.body.bankName
    // data.balance = request.body.balance

    // const fs = require('fs');

    // console.log("data", data)

    // const dataFile = fs.readFileSync('src/Repositories/bankJson.json')
    // let x: string = dataFile.toString()
    // let y = x.replace(/\\/g, "")
    // let oldRegister = JSON.parse(y)

    // console.log("oldRegister", oldRegister)

    // oldRegister.banks.forEach(element => {
    //     saveRegister.banks.push({ bankName: element.bankName, balance: element.balance })
    // });

    // console.log("Save Register pré push", saveRegister)
    // saveRegister.banks.push({ bankName: data.bankName, balance: data.balance })
    // console.log("Save Register Pós push", saveRegister)

    // // console.log(saveRegister.banks.filter((item) => item.bankName != ''))

    // // let file = { banks: [] = [...saveRegister.banks.filter((item) => item.bankName != '')] }

    // // console.log("FILE:", file);

    // saveRegister.banks.forEach((item, index) => {
    //     if (item.bankName == '') {
    //         saveRegister.banks.splice(index, 1)
    //     }
    // }

    // )

    // fs.writeFile('src/Repositories/bankJson.json', JSON.stringify(saveRegister).toString(), (err) => {
    //     if (err) throw err;
    //     console.log('arquivo salvo com sucesso')
    // })