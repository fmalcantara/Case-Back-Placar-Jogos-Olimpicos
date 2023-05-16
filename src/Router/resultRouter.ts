import express from 'express'
import { ResultComppetitionController } from '../Controller/ResultCompetitionController'
import { ResultCompetitionBusiness } from '../Business/ResultCompetitionBusiness'
import { IdGenerator } from '../Services/IdGenerator'
import { ResultCompetitionDataBase } from '../Data/ResultCompetitionDataBase'
import { CompetitionDataBase } from '../Data/CompetitionDataBase'


export const resultRouter = express.Router()

const resultCompetitionDataBase = new ResultCompetitionDataBase()
const competitionDataBase =new CompetitionDataBase()
const resultCompetitionBusiness = new ResultCompetitionBusiness(competitionDataBase, resultCompetitionDataBase, new IdGenerator())
const resultCompetitionController = new ResultComppetitionController(resultCompetitionBusiness)


resultRouter.post('/insert', (req,res)=>resultCompetitionController.insertResult(req,res))
resultRouter.get('/ranking', (req,res)=>resultCompetitionController.ranking(req,res))

