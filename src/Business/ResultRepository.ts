import { competition } from "../Model/competition";
import { result } from "../Model/resultCompetition";


export interface ResultRepository {
  insertResult(result: result):Promise<void>
  rankingRace (competicao: string): Promise<result[]>
  rankingDardo (competicao: string): Promise<result>
}