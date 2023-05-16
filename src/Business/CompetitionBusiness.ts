import { CustomError } from "../Error/customError";
import { NameNotFound } from "../Error/competitionError"
import { CompetitionDTO, competition } from "../Model/competition"
import { CompetitionRepository } from "./CompetitionRepository";
import { IIdGenerator } from "./ports";


export class CompetitionBusiness {
  constructor(
    private competitionDatabase: CompetitionRepository,
    private idGenerator: IIdGenerator
  ) {}

  create = async(input: CompetitionDTO)=>{
    try {
        if(!input.name){
          throw new NameNotFound()
        }
  
    const id: string = this.idGenerator.generateId()
    
    const competition: competition = {
      id,
      name: input.name,
    }
    await this.competitionDatabase.create(competition)

    } catch (error:any) {
      throw new CustomError(400, error.message); 
    }
  }
}