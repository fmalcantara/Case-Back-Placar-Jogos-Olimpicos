import { Request, Response } from "express";
import { CompetitionBusiness } from "../Business/CompetitionBusiness";


export class CompetitionController{
    constructor(
      private competitionBusiness: CompetitionBusiness,
    ){}

  create=async(req: Request, res: Response): Promise<void>=>{
    try {
      
      const name = req.body.name
      

      await this.competitionBusiness.create(name)
      res.status(200).send({message:'Competiton Created successfully!'})

    } catch (error:any) {
      res.status(error.statusCode||404).send(error.message || error.sqlmessage)
    }
  }

   close = async(req: Request, res:Response)=>{
      try {
        const name = req.body.name
        await this.competitionBusiness.close(name)
        res.status(200).send({message: "Competition Successfully Closed"})
      } catch (error:any) {
        res.status(error.statusCode || 400).send(error.message || error.sqlMessage)      
      }
  }

}