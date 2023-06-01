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
exports.CompetitionController = void 0;
class CompetitionController {
    constructor(competitionBusiness) {
        this.competitionBusiness = competitionBusiness;
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const name = req.body.name;
                yield this.competitionBusiness.create(name);
                res.status(200).send({ message: 'Competiton Created successfully!' });
            }
            catch (error) {
                res.status(error.statusCode || 404).send(error.message || error.sqlmessage);
            }
        });
        this.close = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const name = req.body.name;
                yield this.competitionBusiness.close(name);
                res.status(200).send({ message: "Competition Successfully Closed" });
            }
            catch (error) {
                res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
            }
        });
    }
}
exports.CompetitionController = CompetitionController;
//# sourceMappingURL=CompetitionController.js.map