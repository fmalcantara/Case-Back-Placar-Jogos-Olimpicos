import { CustomError } from "../Error/customError";
import { NameNotFound } from "../Error/competitionError"
import { CompetitionDTO, competition } from "../Model/competition"
import { IdGenerator } from "../Services/IdGenerator";
import { CompetitionDataBase } from "../Data/CompetitionDataBase";

const idGenerator = new IdGenerator()
const competitionDataBase = new CompetitionDataBase()

export class CompetitionBusiness {
  create = async(input: CompetitionDTO)=>{
    try {
        if(!input.name){
          throw new NameNotFound()
        }
  
    const id: string = idGenerator.generateId()
    
    const competition: competition = {
      id,
      name: input.name,
    }
    await competitionDataBase.create(competition)

    } catch (error:any) {
      throw new CustomError(400, error.message); 
    }
  }
}