import { Request, Response } from "express";
import { CompetitionBusiness } from "../Business/CompetitionBusiness";


const competitionBusiness=new CompetitionBusiness()

export class CompetitionController{
  create=async(req: Request, res: Response): Promise<void>=>{
    try {
      
      const input = {
        name: req.body.name
      }

      await competitionBusiness.create(input)
      res.status(200).send({message:'Competiton Created successfully!'})

    } catch (error:any) {
      res.status(error.statusCode||400).send(error.message || error.sqlmessage)
    }
  }
}