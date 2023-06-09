import { Request, Response } from "express";
import { ResultCompetitionBusiness } from "../Business/ResultCompetitionBusiness";
import { resultDTO } from "../Model/resultCompetition";

export class ResultComppetitionController{
    constructor(
      private resultCompetitionBusiness: ResultCompetitionBusiness
    ){}

    insertResult = async(req: Request, res: Response)=>{
        try {
            const input: resultDTO = {
              competicao: req.body.competicao,
              atleta: req.body.atleta,
              value: req.body.value,
              unidade: req.body.unidade
            }

    await this.resultCompetitionBusiness.insertResult(input);
    res.status(200).send({message: "Result Added Sucefully"})

  } catch (error:any) {
    res.status(error.statusCode|| 400).send(error.message || error.sqlMessage)
  } 
 }

 ranking = async(req: Request, res: Response)=>{
    try {
      const competicao = req.body.competicao
      const result = await this.resultCompetitionBusiness.ranking(competicao)
      res.status(200).send(result)
    } catch (error:any) {
      res.status(error.statusCode|| 400).send(error.message || error.sqlMessage)
    }
 }


}