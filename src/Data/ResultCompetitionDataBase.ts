import { ResultRepository } from "../Business/ResultRepository"
import { CustomError } from "../Error/customError"
import { result } from "../Model/resultCompetition"
import { BaseDatabase } from "./BaseDataBase"

export class ResultCompetitionDataBase extends BaseDatabase implements ResultRepository{
  private usertable='COMPRESULT_TABLE'

    insertResult = async(result: result):Promise<void>=>{
      try {
        await ResultCompetitionDataBase.connection(this.usertable)
        .insert(result)
      } catch (error:any) {
        throw new CustomError(400, error.message)
      }
    }

    rankingRace = async(competicao: string): Promise<result[]>=>{
      try {
        const result = await ResultCompetitionDataBase.connection(this.usertable)
        .select('competicao', 'atleta', 'value', 'unidade')
        .where('competicao','=', competicao)
        .orderBy('value', 'asc')
        return result
      } catch (error:any) {
         throw new CustomError(400, error.message)
      }
    }
    
  rankingDardo = async(competicao: string):Promise<any>  => {
      try {
          const result = await ResultCompetitionDataBase.connection(this.usertable)
          .select('competicao','atleta')
          .max('value as value')
          .select('unidade')           
          .where('competicao', '=', competicao)
          .groupBy('atleta','unidade')
          .orderBy('value','desc')
          return result  
      } catch (error:any) {
          throw new CustomError(400, error.message);
      }
  }

    getAllResult = async():Promise<result[]>=>{
      try {
        const result = await ResultCompetitionDataBase.connection(this.usertable)
        return result
      } catch (error:any) {
        throw new CustomError(400, error.message)
      }
    }
}

