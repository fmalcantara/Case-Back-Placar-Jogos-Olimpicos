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
exports.CompetitionBusiness = void 0;
const customError_1 = require("../Error/customError");
const competitionError_1 = require("../Error/competitionError");
class CompetitionBusiness {
    constructor(competitionDatabase, idGenerator) {
        this.competitionDatabase = competitionDatabase;
        this.idGenerator = idGenerator;
        this.create = (name) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!name) {
                    throw new competitionError_1.NameNotFound();
                }
                const id = this.idGenerator.generateId();
                const competition = {
                    id,
                    name,
                };
                yield this.competitionDatabase.create(competition);
            }
            catch (error) {
                throw new customError_1.CustomError(error.statusCode, error.message);
            }
        });
        this.close = (name) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!name) {
                    throw new competitionError_1.NameNotFound();
                }
                const allCompetition = yield this.competitionDatabase.getAllCompetition();
                const getAllCompetition = allCompetition.find(competition => competition.name === name);
                if (!getAllCompetition) {
                    throw new competitionError_1.NotExistsCompetition();
                }
                yield this.competitionDatabase.close(name);
            }
            catch (error) {
                throw new customError_1.CustomError(error.statusCode, error.message);
            }
        });
    }
}
exports.CompetitionBusiness = CompetitionBusiness;
//# sourceMappingURL=CompetitionBusiness.js.map