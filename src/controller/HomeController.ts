import { request } from "http";
import { AppDataSource } from "../data-source";
import { Enterprise } from "../Domain/Entities/Enterprise/EnterpriseEntity";
import { PublicationEntity } from "../Domain/Entities/Publication/PublicationEntity";
import { User } from "../Domain/Entities/User/User";
import { HomeServices } from "../Services/HomeServices";
import { Request, Response } from "express";
import { json } from "body-parser";


// export class HomeController {
//  x = new HomeServices();

// const userRepository =
//     AppDataSource.getRepository(User);

// const enterpriseRepository =
//     AppDataSource.getRepository(Enterprise);

// const postRepository =
//     AppDataSource.getRepository(PublicationEntity);

const _homeServices = new HomeServices()


export const actionTest = async (
    request: Request,
    response: Response) => {
    const data = { obj: [{name: 'teste', countInstallments: 1 }] }
    const fs = require('fs'); 

    fs.writeFile('bankJson.json', JSON.stringify(data).toString() , (err) => {
        if(err) throw err;
        console.log('arquivo salvo com sucesso')
    })


    const jsonTest = await "Bati no endpoint"
    return response.json(jsonTest)
}

export const userDetail = async (
    request: Request,
    response: Response) => {
        
    return response.json(await _homeServices.homeData());
}