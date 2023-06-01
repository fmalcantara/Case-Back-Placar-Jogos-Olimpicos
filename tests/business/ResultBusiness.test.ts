import { ResultCompetitionBusiness } from "../../src/Business/ResultCompetitionBusiness";
import { CustomError } from "../../src/Error/customError";
import { CompetitionDataBaseMock } from "../mock/CompetitionDatabaseMock";
import { ResultDatabaseMock } from "../mock/ResultDataBaseMock";
import { IdGeneratorMock } from "../mock/idGeneratorMock";



const resultBusiness = new ResultCompetitionBusiness(
  new CompetitionDataBaseMock(),
  new ResultDatabaseMock(),
  new IdGeneratorMock()
)

describe("testes de inserir resultado", ()=>{
  
  test("Teste 1: Erro que retorna se o nome da competição está vazio", async() =>{
    expect.assertions(3)

    const input = {
      competicao: "",
      atleta: "jose",
      value: 90,
      unidade: "m"
    }

    try {
      await resultBusiness.insertResult(input)
    } catch (error: any) {
       expect(error).toBeInstanceOf(CustomError)     
       expect(error.statusCode).toBe(404)
       expect(error.message).toBe("Competition not Found!")
      }
  })

  test("Teste 2: Erro que retorna se o nome da competição não existe", async () =>{
    expect.assertions(3)

    const input = {
      competicao: "bicicleta",
      atleta: "jose",
      value: 90,
      unidade: "m"
    }

    try {
      await resultBusiness.insertResult(input)
    } catch (error: any) {
       expect(error).toBeInstanceOf(CustomError)     
       expect(error.statusCode).toBe(404)
       expect(error.message).toBe("Competition not exists")
      }
  })

  test("Teste 3: Erro que retorna quando status da competição está encerrado", async () =>{
    expect.assertions(3)

    const input = {
      competicao: "ciclismo",
      atleta: "jose",
      value: 90,
      unidade: "m"
    }

    try {
      await resultBusiness.insertResult(input)
    } catch (error: any) {
       expect(error).toBeInstanceOf(CustomError)     
       expect(error.statusCode).toBe(404)
       expect(error.message).toBe("Competition Already Closed!")
      }
  })

  test("Teste 4: Erro que retorna quando o nome do atleta está vazio", async () =>{
    expect.assertions(3)

    const input = {
      competicao: "100m Rasos",
      atleta: "",
      value: 90,
      unidade: "m"
    }

    try {
      await resultBusiness.insertResult(input)
    } catch (error: any) {
       expect(error).toBeInstanceOf(CustomError)     
       expect(error.statusCode).toBe(404)
       expect(error.message).toBe("Atleta not Found!")
      }
  })

  test("Teste 5: Erro que retornar quando o nome o valor da competição está vazio", async () =>{
    expect.assertions(3)

    const input = {
      competicao: "100m Rasos",
      atleta: "jose",
      value: 0,
      unidade: "m"
    }

    try {
      await resultBusiness.insertResult(input)
    } catch (error: any) {
       expect(error).toBeInstanceOf(CustomError)     
       expect(error.statusCode).toBe(404)
       expect(error.message).toBe("Value not Found!")
      }
  })

  test("Teste 6: Erro que retorna quando o valor da competição não for um numero", async () =>{
    expect.assertions(3)

    const input = {
      competicao: "100m Rasos",
      atleta: "jose",
      value: "10",
      unidade: "m"
    }

    try {
      await resultBusiness.insertResult(input)
    } catch (error: any) {
       expect(error).toBeInstanceOf(CustomError)     
       expect(error.statusCode).toBe(404)
       expect(error.message).toBe("Invalid Value. Only Number")
      }
  })

  test("Teste 7: Erro que retornar quando o o valor da unidade estiver em branco", async () =>{
    expect.assertions(3)

    const input = {
      competicao: "100m Rasos",
      atleta: "jose",
      value: 10,
      unidade: ""
    }

    try {
      await resultBusiness.insertResult(input)
    } catch (error: any) {
       expect(error).toBeInstanceOf(CustomError)     
       expect(error.statusCode).toBe(422)
       expect(error.message).toBe("It is necessary to inform the unit - 'S' or 'M'")
      }
  })

  test("Teste 8: Erro que retornar quando o o valor da unidade nao estiver em 'S' ou 'M'", async () =>{
    expect.assertions(3)

    const input = {
      competicao: "100m Rasos",
      atleta: "jose",
      value: 10,
      unidade: "j"
    }

    try {
      await resultBusiness.insertResult(input)
    } catch (error: any) {
       expect(error).toBeInstanceOf(CustomError)     
       expect(error.statusCode).toBe(404)
       expect(error.message).toBe("Wrog Unit! Only unit 'S'(second) or 'M' (meters)!")
      }
  })

  test("Teste 9: Erro que retorna quando for tentado pôr um novo resultado para o mesmo atleta ", async () =>{
    expect.assertions(3)

    const input = {
      competicao: "100m Rasos",
      atleta: "Felipe",
      value: 90,
      unidade:"S",
  }
  
    try {
      await resultBusiness.insertResult(input)
  }   catch (error: any) {
     expect(error).toBeInstanceOf(CustomError)     
     expect(error.statusCode).toBe(409)
     expect(error.message).toBe("This athlete already has a result.")
    }
})

  test("Teste 10: Sucesso em add um resultado", async () =>{

    const input = {
      competicao: "100m Rasos",
      atleta: "Usain Bolt",
      value: 100.8,
      unidade: "M"
    }

     const result = await resultBusiness.insertResult(input)
      expect(result).not.toBeDefined()
  })

})


    describe("Teste do Ranking ", ()=>{
  test("Teste 1: Erro que retorna se o nome da competição está vazio", async ()=>{
    expect.assertions(3)

    const competicao = ""

    try {
      await resultBusiness.ranking(competicao)
    } catch (error: any) {
       expect(error).toBeInstanceOf(CustomError)     
       expect(error.statusCode).toBe(404)
       expect(error.message).toBe("Competition not Found!")
      }
  })

  test("Teste 2: Erro que retorna se o nome da competição não existe", async () =>{
    expect.assertions(3)

    const competicao = "bicileta" 

    try {
      await resultBusiness.ranking(competicao)
    } catch (error: any) {
       expect(error).toBeInstanceOf(CustomError)     
       expect(error.statusCode).toBe(404)
       expect(error.message).toBe("Competition not exists") 
      }
  })

  test("Teste 3: Sucesso ao retornar o Ranking", async () =>{
    const competicao = "100m Rasos"
    const result = await resultBusiness.ranking(competicao)
    
    expect(result).toEqual([{
      id: "id1",
      competicao: "100m Rasos",
      atleta: "Felipe",
      value: 90,
      unidade:"S",
      competicao_id:"id01"
    }])
  })
})