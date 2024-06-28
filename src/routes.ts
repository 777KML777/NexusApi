import {
    Router, 
    request,
    response,
    Request,
    Response
} from "express"; 

import {
    homeData
} from "./controller/HomeController"
import { getById, createBank, updateBank } from "./controller/BankController";

const routes = Router();

// HomeController Routes 
routes.get("/home", homeData)

// BankController Routes
routes.get("/Bank/getById", getById)
routes.post("/Bank/create", createBank)
routes.put("/Bank/update", updateBank)

// Here all endpoints application 
export default routes; 