import { competition } from "../Model/competition";


export interface CompetitionRepository{
  create (competition: competition): Promise<void>
  getAllCompetition ():Promise<competition[]>
  close (name: string): Promise<void>

}