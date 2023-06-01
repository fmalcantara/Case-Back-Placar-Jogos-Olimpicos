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
exports.ResultComppetitionController = void 0;
class ResultComppetitionController {
    constructor(resultCompetitionBusiness) {
        this.resultCompetitionBusiness = resultCompetitionBusiness;
        this.insertResult = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    competicao: req.body.competicao,
                    atleta: req.body.atleta,
                    value: req.body.value,
                    unidade: req.body.unidade
                };
                yield this.resultCompetitionBusiness.insertResult(input);
                res.status(200).send({ message: "Result Added Sucefully" });
            }
            catch (error) {
                res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
            }
        });
        this.ranking = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const competicao = req.body.competicao;
                const result = yield this.resultCompetitionBusiness.ranking(competicao);
                res.status(200).send(result);
            }
            catch (error) {
                res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
            }
        });
    }
}
exports.ResultComppetitionController = ResultComppetitionController;
//# sourceMappingURL=ResultCompetitionController.js.map