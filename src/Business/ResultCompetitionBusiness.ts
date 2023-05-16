import { CompetitionDataBase } from "../Data/CompetitionDataBase"
import { ResultCompetitionDataBase } from "../Data/ResultCompetitionDataBase"
import { AtletaNotFound, CloseCompetition, CompetitionNotFound, InvalidValue, NotExistsCompetition, ValueNotFound, WrongUnit } from "../Error/competitionError"
import { CustomError } from "../Error/customError"
import { CompetitionRoles } from "../Model/competition"
import { result, resultDTO } from "../Model/resultCompetition"
import { IIdGenerator } from "./ports"

export class ResultCompetitionBusiness{
  constructor(
    private competitionDataBase: CompetitionDataBase,
    private resultCompetitionDataBase: ResultCompetitionDataBase,
    private idGenerator: IIdGenerator,
  ){}


  insertResult=async(input: resultDTO)=>{
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
      if(unidade.toUpperCase()!== "S" && unidade.toUpperCase()!=="M"){
        throw new WrongUnit()    
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
      throw new CustomError(400, error.message)
    }
  }

  ranking = async(competicao: string)=>{
   try {
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
      throw new CustomError(400, error.message)
   }
    
    
  
  }

}