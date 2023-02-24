"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPasswordWithValidation = exports.getPassword = void 0;
const chalk_1 = __importDefault(require("chalk"));
const clipboard_sys_1 = require("clipboard-sys");
const generate_1 = require("./generate");
const check_1 = require("./validation/check");
const log = console.log;
const { gray, bold } = chalk_1.default;
const copyPassword = (password) => {
    void clipboard_sys_1.clipboard.writeText(password);
    log(gray('Your password was copied to clipboard'));
};
const getPassword = (passwordParams) => {
    const generatedPassword = (0, generate_1.createRandomPass)(passwordParams);
    log(`${gray('Generated Password:')} ${bold(generatedPassword)}`);
    copyPassword(generatedPassword);
};
exports.getPassword = getPassword;
const getPasswordWithValidation = (passwordParams) => {
    const validation = (0, check_1.validateParams)(passwordParams);
    if (validation) {
        const generatedPassword = (0, generate_1.createRandomPass)(passwordParams);
        log(`${gray('Generated Password:')} ${bold(generatedPassword)}`);
        copyPassword(generatedPassword);
    }
};
exports.getPasswordWithValidation = getPasswordWithValidation;
