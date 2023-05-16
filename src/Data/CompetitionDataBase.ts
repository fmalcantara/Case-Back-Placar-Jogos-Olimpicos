import { CompetitionRepository } from "../Business/CompetitionRepository";
import { CompetitionNotFound } from "../Error/competitionError";
import { competition } from "../Model/competition";
import { BaseDatabase } from "./BaseDataBase";


export class CompetitionDataBase extends BaseDatabase implements CompetitionRepository {
  private userTable = 'COMP_TABLE'

    create = async (competition: competition): Promise<void> => {
      try {
        await CompetitionDataBase.connection(this.userTable)
        .insert(competition)
      
      } catch (error:any) {
      throw new CompetitionNotFound()  
      }
    }

    getAllCompetition = async():Promise<competition[]> => {
      const result = await CompetitionDataBase.connection(this.userTable)
      return result
    }

}