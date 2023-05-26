import { CompetitionRepository } from "../Business/CompetitionRepository";
import { CompetitionNotFound } from "../Error/competitionError";
import { CustomError } from "../Error/customError";
import { competition } from "../Model/competition";
import { BaseDatabase } from "./BaseDataBase";


export class CompetitionDataBase extends BaseDatabase implements CompetitionRepository {
  private userTable = 'COMP_TABLE'

   create = async (competition: competition): Promise<void> => {
      try {
        await CompetitionDataBase.connection(this.userTable)
        .insert(competition)
      
      } catch (error:any) {
        throw new CustomError(400, error.message)
      }
    }

    getAllCompetition = async():Promise<competition[]> => {
      const result = await CompetitionDataBase.connection(this.userTable)
      return result
    }

    close = async(name: string): Promise<void>=>{
      try {
          await CompetitionDataBase.connection
          .update({status:"CLOSED"})
          .where({name:name})
          .into(this.userTable)
      } catch (error: any) {
        throw new CustomError(400, error.message)
      }
    }

  }