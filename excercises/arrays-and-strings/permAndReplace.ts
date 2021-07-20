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
                // secondWord = secondWord.slice() + secondWord.slice();
            } else {
                return false;
            }
        }
    }
    return false;
}

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