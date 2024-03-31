import {
    Router, 
    request,
    response,
    Request,
    Response
} from "express"; 

import {
    actionTest, userDetail
} from "./controller/HomeController"

const routes = Router();

// Here all endpoints application 
//routes.typeVerb(/controller, action)
routes.get("/home", actionTest)
routes.get("/home/:id", userDetail)
// Here all endpoints application 

export default routes; 