import express, { response } from "express";
import type {Express} from 'express'
import { pets } from "./data/pets";

const app:Express = express()
const Port:number = 8000


app.get('/', (req,res)=>{
    response.json({})
})

app.listen(Port, ():void=> console.log(`Listening on port ${Port}`));