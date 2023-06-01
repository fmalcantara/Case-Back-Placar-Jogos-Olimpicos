"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExistingCompetition = exports.AthleteAttempts = exports.InvalidValue = exports.WrongUnit = exports.CloseCompetition = exports.NotExistsCompetition = exports.UnidadeNotFound = exports.ValueNotFound = exports.AtletaNotFound = exports.NameNotFound = exports.CompetitionNotFound = void 0;
const customError_1 = require("./customError");
class CompetitionNotFound extends customError_1.CustomError {
    constructor() {
        super(404, "Competition not Found!");
    }
}
exports.CompetitionNotFound = CompetitionNotFound;
class NameNotFound extends customError_1.CustomError {
    constructor() {
        super(404, 'Name not Found');
    }
}
exports.NameNotFound = NameNotFound;
class AtletaNotFound extends customError_1.CustomError {
    constructor() {
        super(404, 'Atleta not Found!');
    }
}
exports.AtletaNotFound = AtletaNotFound;
class ValueNotFound extends customError_1.CustomError {
    constructor() {
        super(404, 'Value not Found!');
    }
}
exports.ValueNotFound = ValueNotFound;
class UnidadeNotFound extends customError_1.CustomError {
    constructor() {
        super(422, "It is necessary to inform the unit - 'S' or 'M'");
    }
}
exports.UnidadeNotFound = UnidadeNotFound;
class NotExistsCompetition extends customError_1.CustomError {
    constructor() {
        super(404, "Competition not exists");
    }
}
exports.NotExistsCompetition = NotExistsCompetition;
class CloseCompetition extends customError_1.CustomError {
    constructor() {
        super(404, "Competition Already Closed!");
    }
}
exports.CloseCompetition = CloseCompetition;
class WrongUnit extends customError_1.CustomError {
    constructor() {
        super(404, "Wrog Unit! Only unit 'S'(second) or 'M' (meters)!");
    }
}
exports.WrongUnit = WrongUnit;
class InvalidValue extends customError_1.CustomError {
    constructor() {
        super(404, 'Invalid Value. Only Number');
    }
}
exports.InvalidValue = InvalidValue;
class AthleteAttempts extends customError_1.CustomError {
    constructor() {
        super(409, "The athlete only has up to 3 attempts.");
    }
}
exports.AthleteAttempts = AthleteAttempts;
class ExistingCompetition extends customError_1.CustomError {
    constructor() {
        super(409, "This athlete already has a result.");
    }
}
exports.ExistingCompetition = ExistingCompetition;
//# sourceMappingURL=competitionError.js.map