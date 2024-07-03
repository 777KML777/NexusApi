import {
    Request,
    Response
} from "express"

import { readRepoFile } from "../utils/utils"
import { request } from "http"

export const getById = async (
    request: Request,
    response: Response
) => {
    // ESTOU TRABALHANDO A PARTIR DAQUI 
    const path = require('path');

    // Obtendo o caminho absoluto de um arquivo
    // const filePath = path.join(__dirname, 'src', 'Repositories', 'bankJson.json');
    const filePath = path.join(__dirname, 'Repositories', 'bankJson.json');

    console.log("src/controller/Repositories/bankJson.json"); // Imprime o caminho absoluto do arquivo

    const data = readRepoFile("src/controller/Repositories/bankJson.json");
    console.log("Params", request.query)

    let selectedBank = data.banks
        .filter((item) =>
            item.id == request.query.id)
    console.log(selectedBank)

    return response.json(selectedBank)
}

export const createBank = async (
    request: Request,
    response: Response) => {

    // Warn: Passar type operation para não precisar ter um fs fora do readRepoFile? 
    // ESTOU TRABALHANDO A PARTIR DAQUI 
    const path = require('path');

    // Obtendo o caminho absoluto de um arquivo
    // const filePath = path.join(__dirname, 'src', 'Repositories', 'bankJson.json');
    const filePath = path.join(__dirname, 'Repositories', 'bankJson.json');

    const fs = require('fs')
    const data = fs.readFileSync("src/controller/Repositories/bankJson.json")
    
    
    let dataJson = JSON.parse(data)

    // Thats isn't better way to do this
    let nextId = dataJson.banks.length + 1
    
    // {To Do} - Validate balance & convert it Number type
    dataJson.banks.push({
        id: nextId,
        bankName: request.body.bankName,
        balance: request.body.balance,
        available: true
    },)

    fs.writeFile("src/controller/Repositories/bankJson.json"
        , JSON.stringify(dataJson), (error) => {
            if (error) throw error;
            console.log('Saved Success File')
        }
    )

    return response.json().statusCode = 200
}

export const updateBank = async (
    request: Request,
    response: Response) => {
    // ESTOU TRABALHANDO A PARTIR DAQUI 
    const path = require('path');

    // Obtendo o caminho absoluto de um arquivo
    // const filePath = path.join(__dirname, 'src', 'Repositories', 'bankJson.json');
    const filePath = path.join(__dirname, 'Repositories', 'bankJson.json');

    console.log(filePath); // Imprime o caminho absoluto do arquivo

    const data = readRepoFile("src/controller/Repositories/bankJson.json");

    console.log("potencial novo banco", request.body)

    let selectedBank = data.banks
        .find((item) =>
            item.id == request.body.id)
    console.log('banco recuperado -> ', selectedBank)

    // There are two ways for update an object in array map() in findIndex function 
    const updatedList = data.banks.map(b => b.id == selectedBank.id ?
        { ...b, balance: Number(request.body.balance) } : b
        // b = request.body as number : b 
    )

    data.banks = updatedList;

    const fs = require('fs')
    fs.writeFile("src/controller/Repositories/bankJson.json"
        , JSON.stringify(data), (error) => {
            if (error) throw error;
            console.log('Saved Success File')
        }
    )

    return response.json(selectedBank)

}