import { Request, Response } from "express";

export const addGroceryItem = async(req:Request,res:Response) =>{
    console.log("in here");
}

export const getSingleGroceryItem = async(req:Request,res:Request) =>{
    let id = req.params.id
}

export const getAllGroceryItems = async(req:Request,res:Request) =>{
}

export const removeGroceryItem = async(req:Request,res:Request) =>{

}

export const updateGroceryItem = async(req:Request,res:Request) =>{

}

