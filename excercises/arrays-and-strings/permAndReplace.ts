/**
 * Given two strings, write a method to decide if one is a permutation of the other.
 * 
 * TEST CASES
 * 
 * Input: 'banana', 'nanaba'
 * Output: true
 * 
 * Input: 'robert', 'bertor'
 * Output: true
 * 
 * Input: 'amex', 'mastercard'
 * Output: false
 */

const isPermutiation = (firstWord: string, secondWord: string): boolean | null => {
    if(firstWord.length === secondWord.length) {
        for(let i = 0; i < firstWord.length; i++) {
            const indexOfCurrentCharacter = secondWord.indexOf(firstWord[i]);
            if(indexOfCurrentCharacter || indexOfCurrentCharacter === 0) {
                secondWord = secondWord.slice(0, indexOfCurrentCharacter) + secondWord.slice(indexOfCurrentCharacter + 1)
            } else {
                return false;
            }
        }
        return true;
    }
    return false;
}

console.log(isPermutiation('banana', 'nanaba')); // true
console.log(isPermutiation('robert', 'bertor')); // true
console.log(isPermutiation('amex', 'mastercard')); // false

/**
 * Write a method to replace all spaces in a string with '%20'. You may assume that the string
 * has sufficent space a the end of the string to hold the additional characters, and that
 * you are given the "true" lenght if the string.
 * 
 * TEST CASES
 * 
 * Input: 'Mr John Smith'
 * Output: 'Mr%20John%20Smith'
 * 
 * Input: 'Hello my   brother'
 * Output: 'Hello%20my%20%20%20brother'
 * 
 * Input: '    '
 * Output: '%20%20%20%20'
 */

const replaceSpaces = (word: string, replaceChar: string): string => {
    let replacedWord = '';
    for(let i = 0; i < word.length; i ++) {
        const currentChar = word[i];
        if(currentChar === ' ') {
            replacedWord += replaceChar;
        } else {
            replacedWord += currentChar;
        }
    }
    return replacedWord;
}

console.log(replaceSpaces('Mr John Smith', '%20'));
console.log(replaceSpaces('Hello my   brother', '%20'));
console.log(replaceSpaces('    ', '%20'));