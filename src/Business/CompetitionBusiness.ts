import { CustomError } from "../Error/customError";
import { NameNotFound, NotExistsCompetition } from "../Error/competitionError"
import {  competition } from "../Model/competition"
import { CompetitionRepository } from "./CompetitionRepository";
import { IIdGenerator } from "./ports";


export class CompetitionBusiness {
  constructor(
    private competitionDatabase: CompetitionRepository,
    private idGenerator: IIdGenerator
  ) {}

  create = async(name: string)=>{
    try {
        if(!name){
          throw new NameNotFound()
        }
  
    const id: string = this.idGenerator.generateId()
    
    const competition: competition = {
      id,
      name,
    }
    await this.competitionDatabase.create(competition)

    } catch (error:any) {
      throw new CustomError(error.statusCode, error.message); 
    }
  }

  close = async(name:string)=>{
    try {
      if(!name){
        throw new NameNotFound()
      }
      const allCompetition = await this.competitionDatabase.getAllCompetition()
      const getAllCompetition = allCompetition.find(competition=>competition.name===name)

      if(!getAllCompetition){
        throw new NotExistsCompetition()
      }

      await this.competitionDatabase.close(name)


    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message); 
    }
  }

}