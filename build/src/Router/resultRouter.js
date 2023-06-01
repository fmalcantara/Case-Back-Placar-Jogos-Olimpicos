"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resultRouter = void 0;
const express_1 = __importDefault(require("express"));
const ResultCompetitionController_1 = require("../Controller/ResultCompetitionController");
const ResultCompetitionBusiness_1 = require("../Business/ResultCompetitionBusiness");
const IdGenerator_1 = require("../Services/IdGenerator");
const ResultCompetitionDataBase_1 = require("../Data/ResultCompetitionDataBase");
const CompetitionDataBase_1 = require("../Data/CompetitionDataBase");
exports.resultRouter = express_1.default.Router();
const resultCompetitionDataBase = new ResultCompetitionDataBase_1.ResultCompetitionDataBase();
const competitionDataBase = new CompetitionDataBase_1.CompetitionDataBase();
const resultCompetitionBusiness = new ResultCompetitionBusiness_1.ResultCompetitionBusiness(competitionDataBase, resultCompetitionDataBase, new IdGenerator_1.IdGenerator());
const resultCompetitionController = new ResultCompetitionController_1.ResultComppetitionController(resultCompetitionBusiness);
exports.resultRouter.post('/insert', (req, res) => resultCompetitionController.insertResult(req, res));
exports.resultRouter.get('/ranking', (req, res) => resultCompetitionController.ranking(req, res));
//# sourceMappingURL=resultRouter.js.map