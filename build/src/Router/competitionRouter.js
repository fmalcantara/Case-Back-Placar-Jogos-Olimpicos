"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.competitionRouter = void 0;
const express_1 = __importDefault(require("express"));
const CompetitionController_1 = require("../Controller/CompetitionController");
const CompetitionDataBase_1 = require("../Data/CompetitionDataBase");
const CompetitionBusiness_1 = require("../Business/CompetitionBusiness");
const IdGenerator_1 = require("../Services/IdGenerator");
exports.competitionRouter = express_1.default.Router();
const competitionDataBase = new CompetitionDataBase_1.CompetitionDataBase();
const competitionBusiness = new CompetitionBusiness_1.CompetitionBusiness(competitionDataBase, new IdGenerator_1.IdGenerator());
const competitionController = new CompetitionController_1.CompetitionController(competitionBusiness);
exports.competitionRouter.post('/create', (req, res) => competitionController.create(req, res));
exports.competitionRouter.put('/close', (req, res) => competitionController.close(req, res));
//# sourceMappingURL=competitionRouter.js.map