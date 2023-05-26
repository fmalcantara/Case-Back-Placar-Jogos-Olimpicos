import express  from "express"
import { CompetitionController } from "../Controller/CompetitionController"
import { CompetitionDataBase } from "../Data/CompetitionDataBase"
import { CompetitionBusiness } from "../Business/CompetitionBusiness"
import { IdGenerator } from "../Services/IdGenerator"

export const competitionRouter = express.Router()

const competitionDataBase = new CompetitionDataBase()
const competitionBusiness = new CompetitionBusiness(competitionDataBase, new IdGenerator())
const competitionController = new CompetitionController(competitionBusiness )



competitionRouter.post('/create', (req, res)=>competitionController.create(req,res))
competitionRouter.put('/close', (req, res)=>competitionController.close(req,res))

