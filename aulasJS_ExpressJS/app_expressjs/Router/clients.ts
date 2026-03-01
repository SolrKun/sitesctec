import { Router } from "express";
import clientsController from "../Controller/clientsController";

const router = Router();

router.get('/', clientsController.index)

router.get('/create', clientsController.create)

router.get('/trabalheconosco', (req, res) => {
    res.send("Opções de carreira")
})

router.get('/contato', (req, res) => {
    res.send("(49)99988-0000")
})

export default router;