import {
    Router, 
    request,
    response,
    Request,
    Response
} from "express"; 

import {
    homeData, createBank
} from "./controller/HomeController"
import { getById } from "./controller/BankController";

const routes = Router();

// Here all endpoints application 
//routes.typeVerb(/controller, action)

// routes get 
routes.get("/home", homeData)

// routes post 
routes.get("/Bank/getById", getById)
routes.post("/create-bank", createBank)
// Here all endpoints application 

export default routes; 