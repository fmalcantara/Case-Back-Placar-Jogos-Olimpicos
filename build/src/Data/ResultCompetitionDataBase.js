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
exports.ResultCompetitionDataBase = void 0;
const customError_1 = require("../Error/customError");
const BaseDataBase_1 = require("./BaseDataBase");
class ResultCompetitionDataBase extends BaseDataBase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.usertable = 'COMPRESULT_TABLE';
        this.insertResult = (result) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield ResultCompetitionDataBase.connection(this.usertable)
                    .insert(result);
            }
            catch (error) {
                throw new customError_1.CustomError(400, error.message);
            }
        });
        this.rankingRace = (competicao) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield ResultCompetitionDataBase.connection(this.usertable)
                    .select('competicao', 'atleta', 'value', 'unidade')
                    .where('competicao', '=', competicao)
                    .orderBy('value', 'asc');
                return result;
            }
            catch (error) {
                throw new customError_1.CustomError(400, error.message);
            }
        });
        this.rankingDardo = (competicao) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield ResultCompetitionDataBase.connection(this.usertable)
                    .select('competicao', 'atleta')
                    .max('value as value')
                    .select('unidade')
                    .where('competicao', '=', competicao)
                    .groupBy('atleta', 'unidade')
                    .orderBy('value', 'desc');
                return result;
            }
            catch (error) {
                throw new customError_1.CustomError(400, error.message);
            }
        });
        this.getAllResult = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield ResultCompetitionDataBase.connection(this.usertable);
                return result;
            }
            catch (error) {
                throw new customError_1.CustomError(400, error.message);
            }
        });
    }
}
exports.ResultCompetitionDataBase = ResultCompetitionDataBase;
//# sourceMappingURL=ResultCompetitionDataBase.js.map