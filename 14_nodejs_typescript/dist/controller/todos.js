"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const todos_1 = require("../model/todos");
const TODOS = [];
// export const createTodo = (req:Request, res:Response, next:NextFunction)=>{};
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todos_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: "Created todo!", todo: newTodo });
};
exports.createTodo = createTodo;
