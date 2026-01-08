import express from "express";
import type {Express,Request, Response } from 'express'
import cors from 'cors'
import { petRouter } from "./routes/pets.routes";

const app:Express = express()
const Port:number = 8000

app.use(cors())

app.use('/pets',petRouter)

app.use((req:Request, res:Response):void=>{
    res.json({message:"endpoint not found"}).status(404)
})
app.listen(Port, ():void=> console.log(`Listening on port ${Port}`));