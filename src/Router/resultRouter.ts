import express from 'express'
import { ResultComppetitionController } from '../Controller/ResultCompetitionController'

export const resultRouter = express.Router()

const resultCompetitionController = new ResultComppetitionController()

resultRouter.post('/insert', resultCompetitionController.insertResult)
resultRouter.get('/ranking', resultCompetitionController.ranking)