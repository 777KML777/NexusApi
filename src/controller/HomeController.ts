import { Request, Response } from "express";


// export class HomeController {
//  x = new HomeServices();

// const userRepository =
//     AppDataSource.getRepository(User);

// const enterpriseRepository =
//     AppDataSource.getRepository(Enterprise);

// const postRepository =
//     AppDataSource.getRepository(PublicationEntity);


export const homeData = async (
    request: Request,
    response: Response) => {

    console.log("Bati no homeData")
        
    const fs = require('fs')

    // Porque no console ele não mostrar o \ e no navegador sim. 
    // const xData = fs.readFile('bankJson.json', (err, data) => {
    //     if(err) throw err; 

    //     console.log("data", data) 
    //     console.log("xData", xData)
    // })


    const data = fs.readFileSync('bankJson.json')
    let x : string = data.toString()
    let y = x.replace(/\\/g, "")
    const z = {obj: "teste", countInstallmest: 1}
    
    console.log(y)

    return response.json(JSON.parse(y))
}

export const createBank = async (
    request: Request,
    response: Response) => {
    const data = { obj: [{ name: 'teste', countInstallments: 1 }] }
    const fs = require('fs');

    fs.writeFile('bankJson.json', JSON.stringify(data).toString(), (err) => {
        if (err) throw err;
        console.log('arquivo salvo com sucesso')
    })


    const jsonTest = await "Bati no endpoint"


    // return response.json(await _homeServices.homeData());
    return jsonTest
}