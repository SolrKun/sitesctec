import { Request, Response, NextFunction } from "express";
import { IClients } from "../Model/clients";
import clientsModel from "../Model/clientsModel";

async function index(req: Request, res: Response, next: NextFunction) {
    // res.render('index');
    const clients = await clientsModel.findAll();
    res.json(clients);
}

function create (req: Request, res: Response, next: any) {
    res.render("create");
}

export default { index, create };
