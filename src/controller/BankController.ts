import {
    Request,
    Response
} from "express"

import { readRepoFile } from "../utils"
import { request } from "http"

export const getById = async (
    request: Request,
    response: Response
) => {
    const data = readRepoFile('bankJson.json');

    console.log("Params", request.query.bankName)

    let selectedBank = data.banks
        .filter((item) =>
            item.bankName == request.query.bankName)
    console.log(selectedBank)

    return response.json(selectedBank)
}

export const updateBank = async (
    request: Request,
    response: Response) => {


}