"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const check_1 = require("../../../lib/validation/check");
const messages_1 = require("../../../lib/validation/messages");
afterEach(() => {
    jest.clearAllMocks();
});
const spy = jest.spyOn(console, 'log');
describe('checkForErrorsInParameters', () => {
    it('Should stop when length is negative', () => {
        const result = (0, check_1.checkForErrorsInParameters)({
            length: -10,
            minNumbers: 2,
            minSpecialCharacters: 3,
        });
        expect(spy).toBeCalledWith(chalk_1.default.red(messages_1.PARAMS_ERRORS.LENGTH_IS_NEGATIVE));
        expect(result).toBe('stop');
    });
    it('Should stop when length is zero', () => {
        const result = (0, check_1.checkForErrorsInParameters)({
            length: 0,
            minNumbers: 2,
            minSpecialCharacters: 3,
        });
        expect(spy).toBeCalledWith(chalk_1.default.red(messages_1.PARAMS_ERRORS.LENGTH_IS_ZERO));
        expect(result).toBe('stop');
    });
});
