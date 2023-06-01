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
exports.ResultCompetitionBusiness = void 0;
const competitionError_1 = require("../Error/competitionError");
const customError_1 = require("../Error/customError");
const competition_1 = require("../Model/competition");
class ResultCompetitionBusiness {
    constructor(competitionDataBase, resultCompetitionDataBase, idGenerator) {
        this.competitionDataBase = competitionDataBase;
        this.resultCompetitionDataBase = resultCompetitionDataBase;
        this.idGenerator = idGenerator;
        this.insertResult = (input) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { competicao, atleta, value, unidade } = input;
                if (!competicao) {
                    throw new competitionError_1.CompetitionNotFound();
                }
                const allCompetions = yield this.competitionDataBase.getAllCompetition();
                const checkCompetions = allCompetions.find((item) => {
                    return item.name === competicao;
                });
                if (!checkCompetions) {
                    throw new competitionError_1.NotExistsCompetition();
                }
                if (checkCompetions.status === competition_1.CompetitionRoles.CLOSED) {
                    throw new competitionError_1.CloseCompetition();
                }
                if (!atleta) {
                    throw new competitionError_1.AtletaNotFound();
                }
                if (!value) {
                    throw new competitionError_1.ValueNotFound();
                }
                if (typeof value !== "number") {
                    throw new competitionError_1.InvalidValue();
                }
                if (!unidade) {
                    throw new competitionError_1.UnidadeNotFound();
                }
                if (unidade.toUpperCase() !== "S" && unidade.toUpperCase() !== "M") {
                    throw new competitionError_1.WrongUnit();
                }
                const allResults = yield this.resultCompetitionDataBase.getAllResult();
                const getResult = allResults.find(result => result.atleta === atleta);
                let counter = 0;
                for (let i = 0; i < allResults.length; i++) {
                    if (allResults[i].atleta === atleta)
                        counter++;
                }
                if (counter > 3) {
                    throw new competitionError_1.AthleteAttempts();
                }
                if (competicao === '100m Rasos' && getResult) {
                    throw new competitionError_1.ExistingCompetition();
                }
                const id = this.idGenerator.generateId();
                const competicao_id = checkCompetions.id;
                const result = {
                    id,
                    competicao,
                    atleta,
                    value,
                    unidade,
                    competicao_id: competicao_id,
                };
                yield this.resultCompetitionDataBase.insertResult(result);
            }
            catch (error) {
                throw new customError_1.CustomError(error.statusCode, error.message);
            }
        });
        this.ranking = (competicao) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!competicao) {
                    throw new competitionError_1.CompetitionNotFound();
                }
                const allCompetions = yield this.competitionDataBase.getAllCompetition();
                const checkCompetions = allCompetions.find((item) => {
                    return item.name === competicao;
                });
                if (!checkCompetions) {
                    throw new competitionError_1.NotExistsCompetition();
                }
                if (competicao === "100m Rasos") {
                    const result = yield this.resultCompetitionDataBase.rankingRace(competicao);
                    return result;
                }
                else {
                    const result = yield this.resultCompetitionDataBase.rankingDardo(competicao);
                    return result;
                }
            }
            catch (error) {
                throw new customError_1.CustomError(error.statusCode, error.message);
            }
        });
    }
}
exports.ResultCompetitionBusiness = ResultCompetitionBusiness;
//# sourceMappingURL=ResultCompetitionBusiness.js.map