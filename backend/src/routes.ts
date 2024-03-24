import { UserController } from "./controller/UserController"
// import {Router, request, response, Request, Response } from "express"
// import { one } "./controller/UserController"

// const routes = Router()

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}]

// routes.get(Routes[1].route, )