export interface PasswordGenerator {
    size: number;
    minNumbers: number;
    minSpecialCharacters: number;
}

export interface PasswordGeneratorParameters {
    size: number[];
}