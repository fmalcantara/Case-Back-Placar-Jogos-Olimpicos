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
exports.CompetitionDataBase = void 0;
const customError_1 = require("../Error/customError");
const BaseDataBase_1 = require("./BaseDataBase");
class CompetitionDataBase extends BaseDataBase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.userTable = 'COMP_TABLE';
        this.create = (competition) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield CompetitionDataBase.connection(this.userTable)
                    .insert(competition);
            }
            catch (error) {
                throw new customError_1.CustomError(400, error.message);
            }
        });
        this.getAllCompetition = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield CompetitionDataBase.connection(this.userTable);
            return result;
        });
        this.close = (name) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield CompetitionDataBase.connection
                    .update({ status: "CLOSED" })
                    .where({ name: name })
                    .into(this.userTable);
            }
            catch (error) {
                throw new customError_1.CustomError(400, error.message);
            }
        });
    }
}
exports.CompetitionDataBase = CompetitionDataBase;
//# sourceMappingURL=CompetitionDataBase.js.map