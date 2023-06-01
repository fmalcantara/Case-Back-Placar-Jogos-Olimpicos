"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const competitionRouter_1 = require("./Router/competitionRouter");
const resultRouter_1 = require("./Router/resultRouter");
const app_1 = __importDefault(require("./app"));
app_1.default.use('/competition', competitionRouter_1.competitionRouter);
app_1.default.use('/result', resultRouter_1.resultRouter);
//# sourceMappingURL=index.js.map