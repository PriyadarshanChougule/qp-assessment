import { NextFunction, Request, Response } from "express"
import customLogger from '../utils/logger'

export default function (err:Error, req:Request, res:Response, next:NextFunction) {
    customLogger.error(err.stack)
    res.status(500).send('Internal Server Error.')
}