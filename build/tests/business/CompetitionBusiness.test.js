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
const CompetitionBusiness_1 = require("../../src/Business/CompetitionBusiness");
const customError_1 = require("../../src/Error/customError");
const CompetitionDatabaseMock_1 = require("../mock/CompetitionDatabaseMock");
const idGeneratorMock_1 = require("../mock/idGeneratorMock");
const competitionBusiness = new CompetitionBusiness_1.CompetitionBusiness(new CompetitionDatabaseMock_1.CompetitionDataBaseMock(), new idGeneratorMock_1.IdGeneratorMock());
describe('testes create', () => {
    test("teste 1: Erro que deve retornar quando nome estiver vazio", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(3);
        try {
            yield competitionBusiness.create("");
        }
        catch (error) {
            expect(error).toBeInstanceOf(customError_1.CustomError);
            expect(error.statusCode).toBe(404);
            expect(error.message).toBe('Name not Found');
        }
    }));
    test("Teste 2: teste para quando há sucesso na Criação de competição", () => __awaiter(void 0, void 0, void 0, function* () {
        yield competitionBusiness.create("100m Rasos");
        expect(200).toBe(200);
    }));
    describe('testes close', () => {
        test("teste 1: Erro que deve retornar quando nome estiver vazio", () => __awaiter(void 0, void 0, void 0, function* () {
            expect.assertions(3);
            try {
                yield competitionBusiness.close("");
            }
            catch (error) {
                expect(error).toBeInstanceOf(customError_1.CustomError);
                expect(error.statusCode).toBe(404);
                expect(error.message).toBe('Name not Found');
            }
        }));
        test("teste 2: Erro que deve retornar quando a competição não existe", () => __awaiter(void 0, void 0, void 0, function* () {
            expect.assertions(3);
            try {
                yield competitionBusiness.close("/");
            }
            catch (error) {
                expect(error).toBeInstanceOf(customError_1.CustomError);
                expect(error.statusCode).toBe(404);
                expect(error.message).toBe('Competition not exists');
            }
        }));
        test("teste 3: Sucesso quando encerra uma competição", () => __awaiter(void 0, void 0, void 0, function* () {
            yield competitionBusiness.close("100m Rasos");
            expect(200).toBe(200);
        }));
    });
});
//# sourceMappingURL=CompetitionBusiness.test.js.map