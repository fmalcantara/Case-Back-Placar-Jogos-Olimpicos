import { CompetitionBusiness } from "../../src/Business/CompetitionBusiness";
import { CustomError } from "../../src/Error/customError";
import { CompetitionDataBaseMock } from "../mock/CompetitionDatabaseMock";
import { IdGeneratorMock } from "../mock/idGeneratorMock";

const competitionBusiness = new CompetitionBusiness(
  new CompetitionDataBaseMock(),
  new IdGeneratorMock()
)

describe ('testes create', () => {
  test("teste 1: Erro que deve retornar quando nome estiver vazio", async () => {
    expect.assertions(3)
    try {
      await competitionBusiness.create("")
    } catch (error:any) {
      expect(error).toBeInstanceOf(CustomError)
      expect(error.statusCode).toBe(404)
      expect(error.message).toBe('Name not Found') 
    }
  })
  
    test("Teste 2: teste para quando há sucesso na Criação de competição", async () => {
      await competitionBusiness.create("100m Rasos")
      expect(200).toBe(200)
  })

  describe ('testes close', () => {
    test("teste 1: Erro que deve retornar quando nome estiver vazio", async () => {
      expect.assertions(3)
      try {
        await competitionBusiness.close("")
      } catch (error:any) {
        expect(error).toBeInstanceOf(CustomError)
        expect(error.statusCode).toBe(404)
        expect(error.message).toBe('Name not Found') 
      }
    })
  
    test("teste 2: Erro que deve retornar quando a competição não existe", async () => {
      expect.assertions(3)
      try {
        await competitionBusiness.close("/")
      } catch (error:any) {
        expect(error).toBeInstanceOf(CustomError)
        expect(error.statusCode).toBe(404)
        expect(error.message).toBe('Competition not exists') 
      }
    })

    test("teste 3: Sucesso quando encerra uma competição", async () => {    
      await competitionBusiness.close("100m Rasos")
      expect(200).toBe(200)
    })

  
  })
 
  })