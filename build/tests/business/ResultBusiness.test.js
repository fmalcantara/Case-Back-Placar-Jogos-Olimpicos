"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ResultCompetitionBusiness_1 = require("../../src/Business/ResultCompetitionBusiness");
const customError_1 = require("../../src/Error/customError");
const CompetitionDatabaseMock_1 = require("../mock/CompetitionDatabaseMock");
const ResultDataBaseMock_1 = require("../mock/ResultDataBaseMock");
const idGeneratorMock_1 = require("../mock/idGeneratorMock");
const resultBusiness = new ResultCompetitionBusiness_1.ResultCompetitionBusiness(new CompetitionDatabaseMock_1.CompetitionDataBaseMock(), new ResultDataBaseMock_1.ResultDatabaseMock(), new idGeneratorMock_1.IdGeneratorMock());
describe("testes de inserir resultado", () => {
    test("Teste 1: Erro que retorna se o nome da competição está vazio", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(3);
        const input = {
            competicao: "",
            atleta: "jose",
            value: 90,
            unidade: "m"
        };
        try {
            yield resultBusiness.insertResult(input);
        }
        catch (error) {
            expect(error).toBeInstanceOf(customError_1.CustomError);
            expect(error.statusCode).toBe(404);
            expect(error.message).toBe("Competition not Found!");
        }
    }));
    test("Teste 2: Erro que retorna se o nome da competição não existe", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(3);
        const input = {
            competicao: "bicicleta",
            atleta: "jose",
            value: 90,
            unidade: "m"
        };
        try {
            yield resultBusiness.insertResult(input);
        }
        catch (error) {
            expect(error).toBeInstanceOf(customError_1.CustomError);
            expect(error.statusCode).toBe(404);
            expect(error.message).toBe("Competition not exists");
        }
    }));
    test("Teste 3: Erro que retorna quando status da competição está encerrado", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(3);
        const input = {
            competicao: "ciclismo",
            atleta: "jose",
            value: 90,
            unidade: "m"
        };
        try {
            yield resultBusiness.insertResult(input);
        }
        catch (error) {
            expect(error).toBeInstanceOf(customError_1.CustomError);
            expect(error.statusCode).toBe(404);
            expect(error.message).toBe("Competition Already Closed!");
        }
    }));
    test("Teste 4: Erro que retorna quando o nome do atleta está vazio", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(3);
        const input = {
            competicao: "100m Rasos",
            atleta: "",
            value: 90,
            unidade: "m"
        };
        try {
            yield resultBusiness.insertResult(input);
        }
        catch (error) {
            expect(error).toBeInstanceOf(customError_1.CustomError);
            expect(error.statusCode).toBe(404);
            expect(error.message).toBe("Atleta not Found!");
        }
    }));
    test("Teste 5: Erro que retornar quando o nome o valor da competição está vazio", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(3);
        const input = {
            competicao: "100m Rasos",
            atleta: "jose",
            value: 0,
            unidade: "m"
        };
        try {
            yield resultBusiness.insertResult(input);
        }
        catch (error) {
            expect(error).toBeInstanceOf(customError_1.CustomError);
            expect(error.statusCode).toBe(404);
            expect(error.message).toBe("Value not Found!");
        }
    }));
    test("Teste 6: Erro que retorna quando o valor da competição não for um numero", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(3);
        const input = {
            competicao: "100m Rasos",
            atleta: "jose",
            value: "10",
            unidade: "m"
        };
        try {
            yield resultBusiness.insertResult(input);
        }
        catch (error) {
            expect(error).toBeInstanceOf(customError_1.CustomError);
            expect(error.statusCode).toBe(404);
            expect(error.message).toBe("Invalid Value. Only Number");
        }
    }));
    test("Teste 7: Erro que retornar quando o o valor da unidade estiver em branco", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(3);
        const input = {
            competicao: "100m Rasos",
            atleta: "jose",
            value: 10,
            unidade: ""
        };
        try {
            yield resultBusiness.insertResult(input);
        }
        catch (error) {
            expect(error).toBeInstanceOf(customError_1.CustomError);
            expect(error.statusCode).toBe(422);
            expect(error.message).toBe("It is necessary to inform the unit - 'S' or 'M'");
        }
    }));
    test("Teste 8: Erro que retornar quando o o valor da unidade nao estiver em 'S' ou 'M'", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(3);
        const input = {
            competicao: "100m Rasos",
            atleta: "jose",
            value: 10,
            unidade: "j"
        };
        try {
            yield resultBusiness.insertResult(input);
        }
        catch (error) {
            expect(error).toBeInstanceOf(customError_1.CustomError);
            expect(error.statusCode).toBe(404);
            expect(error.message).toBe("Wrog Unit! Only unit 'S'(second) or 'M' (meters)!");
        }
    }));
    test("Teste 9: Erro que retorna quando for tentado pôr um novo resultado para o mesmo atleta ", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(3);
        const input = {
            competicao: "100m Rasos",
            atleta: "Felipe",
            value: 90,
            unidade: "S",
        };
        try {
            yield resultBusiness.insertResult(input);
        }
        catch (error) {
            expect(error).toBeInstanceOf(customError_1.CustomError);
            expect(error.statusCode).toBe(409);
            expect(error.message).toBe("This athlete already has a result.");
        }
    }));
    test("Teste 10: Sucesso em add um resultado", () => __awaiter(void 0, void 0, void 0, function* () {
        const input = {
            competicao: "100m Rasos",
            atleta: "Usain Bolt",
            value: 100.8,
            unidade: "M"
        };
        const result = yield resultBusiness.insertResult(input);
        expect(result).not.toBeDefined();
    }));
});
describe("Teste do Ranking ", () => {
    test("Teste 1: Erro que retorna se o nome da competição está vazio", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(3);
        const competicao = "";
        try {
            yield resultBusiness.ranking(competicao);
        }
        catch (error) {
            expect(error).toBeInstanceOf(customError_1.CustomError);
            expect(error.statusCode).toBe(404);
            expect(error.message).toBe("Competition not Found!");
        }
    }));
    test("Teste 2: Erro que retorna se o nome da competição não existe", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(3);
        const competicao = "bicileta";
        try {
            yield resultBusiness.ranking(competicao);
        }
        catch (error) {
            expect(error).toBeInstanceOf(customError_1.CustomError);
            expect(error.statusCode).toBe(404);
            expect(error.message).toBe("Competition not exists");
        }
    }));
    test("Teste 3: Sucesso ao retornar o Ranking", () => __awaiter(void 0, void 0, void 0, function* () {
        const competicao = "100m Rasos";
        const result = yield resultBusiness.ranking(competicao);
        expect(result).toEqual([{
                id: "id1",
                competicao: "100m Rasos",
                atleta: "Felipe",
                value: 90,
                unidade: "S",
                competicao_id: "id01"
            }]);
    }));
});
//# sourceMappingURL=ResultBusiness.test.js.map