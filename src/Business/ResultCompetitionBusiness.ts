import { AthleteAttempts, AtletaNotFound, CloseCompetition, CompetitionNotFound, ExistingCompetition, InvalidValue, NotExistsCompetition, UnidadeNotFound, ValueNotFound, WrongUnit } from "../Error/competitionError"
import { CustomError } from "../Error/customError"
import { CompetitionRoles } from "../Model/competition"
import { result } from "../Model/resultCompetition"
import { CompetitionRepository } from "./CompetitionRepository"
import { ResultRepository } from "./ResultRepository"
import { IIdGenerator } from "./ports"

export class ResultCompetitionBusiness{
  constructor(
    private competitionDataBase: CompetitionRepository,
    private resultCompetitionDataBase: ResultRepository,
    private idGenerator: IIdGenerator,
  ){}


  insertResult=async(input: any)=>{
    try {
      const {competicao, atleta, value, unidade} = input
        
      if(!competicao){
          throw new CompetitionNotFound()    
        }

      const allCompetions = await this.competitionDataBase.getAllCompetition()
      const checkCompetions = allCompetions.find((item)=>{
        return item.name === competicao
      })
      if(!checkCompetions){
        throw new NotExistsCompetition();
      }

      if(checkCompetions.status === CompetitionRoles.CLOSED){
        throw new CloseCompetition()
      }

      if(!atleta){
        throw new AtletaNotFound()    
        }
      if(!value){
        throw new ValueNotFound()    
        }
      if(typeof value !== "number"){
        throw new InvalidValue()    
          }
      
      if(!unidade){
        throw new UnidadeNotFound() 
      }
      
          if(unidade.toUpperCase()!== "S" && unidade.toUpperCase()!=="M"){
        throw new WrongUnit()    
        }

        const allResults = await this.resultCompetitionDataBase.getAllResult()
        const getResult = allResults.find(result => result.atleta === atleta);       
        
        
        let counter = 0;
        for (let i = 0; i < allResults.length; i++) {
          if(allResults[i].atleta === atleta ) counter++;
        } 
        
        if(counter > 3){
            throw new AthleteAttempts();
        }   

        if(competicao === '100m Rasos' && getResult){
            throw new ExistingCompetition()
        }

        const id:string = this.idGenerator.generateId();
        const competicao_id = checkCompetions.id

        const result:result = {
          id,
          competicao,
          atleta,
          value,
          unidade,
          competicao_id: competicao_id,
        }

        await this.resultCompetitionDataBase.insertResult(result)

    } catch (error:any) {
      throw new CustomError(error.statusCode, error.message);
    }
  }

  ranking = async(competicao: string)=>{
   try {
    
    if(!competicao){
      throw new CompetitionNotFound();
  }

    const allCompetions = await this.competitionDataBase.getAllCompetition()
    const checkCompetions = allCompetions.find((item)=>{
      return item.name === competicao
    })
    
    if(!checkCompetions){
      throw new NotExistsCompetition();
    }
  
    if(competicao === "100m Rasos"){
      const result = await this.resultCompetitionDataBase.rankingRace(competicao)
      return result
    }else{
      const result = await this.resultCompetitionDataBase.rankingDardo(competicao)
      return result
    }
   } catch (error:any) {
    throw new CustomError(error.statusCode, error.message);
   }
    
    
  
  }

}