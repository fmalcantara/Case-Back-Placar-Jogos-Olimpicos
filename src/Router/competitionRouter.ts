import express  from "express"
import { CompetitionController } from "../Controller/CompetitionController"

export const competitionRouter = express.Router()
const competitionController = new CompetitionController()

competitionRouter.post('/create', competitionController.create)