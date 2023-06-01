"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdGeneratorMock = void 0;
class IdGeneratorMock {
    constructor() {
        this.generateId = jest.fn(() => {
            return 'id';
        });
    }
}
exports.IdGeneratorMock = IdGeneratorMock;
//# sourceMappingURL=idGeneratorMock.js.map