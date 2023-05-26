import { ResultRepository } from "../../src/Business/ResultRepository";
import { result } from "../../src/Model/resultCompetition";
import { resultMock } from "./resultMock";




export class ResultDatabaseMock implements ResultRepository{
  public insertResult= async (result: result):Promise<void>=>{}
  
  public rankingRace = async (competicao: string): Promise<result[]>=>{
    const result = resultMock.filter(result => result.competicao === competicao)
    return result
  }
  public rankingDardo=async (competicao: string): Promise<result[]>=>{
    const result = resultMock.filter(result => result.competicao === competicao)
    return result
  }
}
