"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRandomPass = void 0;
const constants_1 = require("./constants");
function createRandomPass(passwordParams) {
    const { length, minNumbers, minSpecialCharacters } = passwordParams;
    const list = [
        constants_1.upperAlphabet,
        constants_1.lowerAlphabet,
        constants_1.numbers,
        constants_1.specialCharacters,
        constants_1.latinCharacters,
    ];
    const passwordArray = [];
    let numbersAmount = 0;
    let specialCharactersAmount = 0;
    function getItem() {
        const listSelector = Math.floor(Math.random() * 5);
        const selectedList = list[listSelector];
        const itemSelector = Math.floor(Math.random() * selectedList.length);
        const selectedItem = selectedList[itemSelector];
        if (selectedList === constants_1.numbers || selectedList === constants_1.specialCharacters) {
            selectedList === constants_1.numbers
                ? (numbersAmount += 1)
                : (specialCharactersAmount += 1);
        }
        return selectedItem;
    }
    for (let i = 0; i < length; i++) {
        const item = getItem();
        passwordArray.push(item);
    }
    if (numbersAmount < minNumbers ||
        specialCharactersAmount < minSpecialCharacters) {
        return createRandomPass({ length, minNumbers, minSpecialCharacters });
    }
    return passwordArray.join('');
}
exports.createRandomPass = createRandomPass;
