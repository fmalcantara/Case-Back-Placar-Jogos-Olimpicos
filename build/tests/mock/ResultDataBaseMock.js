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
exports.ResultDatabaseMock = void 0;
const resultMock_1 = require("./resultMock");
class ResultDatabaseMock {
    constructor() {
        this.insertResult = (result) => __awaiter(this, void 0, void 0, function* () { });
        this.rankingRace = (competicao) => __awaiter(this, void 0, void 0, function* () {
            const result = resultMock_1.resultMock.filter(result => result.competicao === competicao);
            return result;
        });
        this.rankingDardo = (competicao) => __awaiter(this, void 0, void 0, function* () {
            const result = resultMock_1.resultMock.filter(result => result.competicao === competicao);
            return result;
        });
        this.getAllResult = () => __awaiter(this, void 0, void 0, function* () {
            return resultMock_1.resultMock;
        });
    }
}
exports.ResultDatabaseMock = ResultDatabaseMock;
//# sourceMappingURL=ResultDataBaseMock.js.map