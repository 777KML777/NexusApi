import { Request, Response } from "express";

export const homeData = async (
    request: Request,
    response: Response) => {

    const fs = require('fs')
    const data = fs.readFileSync('bankJson.json')
    let resp = JSON.parse(data)

    return response.json(resp)
}

export const createBank = async (
    request: Request,
    response: Response) => {

    const fs = require('fs')
    const data = fs.readFileSync('bankJson.json')
    let dataJson = JSON.parse(data)
    dataJson.banks.push(request.body)
    
    fs.writeFile('bankJson.json'
        , JSON.stringify(dataJson), (error) => {
            if(error) throw error;
            console.log('Saved Success File')
        }
    )

    return response.json().statusCode = 200
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

    // const dataFile = fs.readFileSync('bankJson.json')
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

    // fs.writeFile('bankJson.json', JSON.stringify(saveRegister).toString(), (err) => {
    //     if (err) throw err;
    //     console.log('arquivo salvo com sucesso')
    // })