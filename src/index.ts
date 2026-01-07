import express, {Request, Response } from "express";
import type {Express} from 'express'
import { pets } from "./data/pets";
import cors from 'cors'
import type { Pet } from "./data/pets";

const app:Express = express()
const Port:number = 8000

app.use(cors())

app.get('/', (req:Request, res: Response<Pet[]>)=>{
    res.json(pets)
})
app.use((req:Request, res:Response):void=>{
    res.json({message:"endpoint not found"}).status(404)
})
app.listen(Port, ():void=> console.log(`Listening on port ${Port}`));