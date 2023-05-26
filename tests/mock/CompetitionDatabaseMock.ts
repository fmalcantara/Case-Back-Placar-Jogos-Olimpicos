import { CompetitionRepository } from "../../src/Business/CompetitionRepository";
import { competition } from "../../src/Model/competition";
import { competitionMock } from "./CompetitionMock";

export class CompetitionDataBaseMock implements CompetitionRepository{
  public create = async (competition: competition): Promise<void> =>{}
  
  public getAllCompetition = async(): Promise<competition[]> => {  
  return competitionMock
  }

  public close= async (name: string): Promise<void> => {}

}