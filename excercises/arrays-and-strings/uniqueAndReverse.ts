/**
 * Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 * 
 * TEST CASES
 * 
 * Input: 'tacos'
 * Output: true
 * 
 * Input: 'amarillo'
 * Output: false
 * 
 * Input: 'question'
 * Output: true
 * 
 */

export const hasAllUniqueCharacters = (word: string): boolean => {
    for(let i = 0; i < word.length; i++) {
        const currentCharater = word[i];
        const restOfCharacters = word.substring(i + 1);
        if(restOfCharacters.includes(currentCharater)) {
            return false;
        } else {
            continue;
        }
    }
    return true;
}

console.log(hasAllUniqueCharacters('tacos')); // true
console.log(hasAllUniqueCharacters('amarillo')); // false
console.log(hasAllUniqueCharacters('question')); // true


// ----------------------------------------------------------------------

/**
 * Implement a function reverse which reverses a string.
 * 
 * TEST CASES
 * 
 * Input: 'ekans'
 * Output: 'snake'
 * 
 * Input: 'arboc'
 * Output: 'cobra'
 * 
 * Input: 'Muk'
 * Output: 'kum'
 */

const reverseString = (word: string): string => {
    let reversedString = '';
    for(let i = word.length - 1; i >= 0 ; i--) {
        reversedString += word[i];
    }
    return reversedString;
}

console.log(reverseString('ekans')) // 'snake'
console.log(reverseString('arboc')) // 'cobra'
console.log(reverseString('muk')) // 'kum'
