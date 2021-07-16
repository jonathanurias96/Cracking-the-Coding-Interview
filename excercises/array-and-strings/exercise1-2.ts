/*

Implement an algorithm to determine if a string has all unique characters
What if you cannot use additional data structures?

TEST CASE 1:
Input: 'tacos'
Output: true

TEST CASE 2:
Input: 'amarillo'
Output: false

TEST CASE 1:
Input: 'question'
Output: true

**/

const hasAllUniqueCharacters = (word: string): boolean => {
    for(let i = 0; i < word.length; i++) {
        const currentCharater = word[i];
        const restOfCharacters = word.substring(i + 1);
        if(restOfCharacters.includes(currentCharater)) {
            return true;
        } else {
            continue;
        }
    }
}

console.log(hasAllUniqueCharacters('tacos')); // true
console.log(hasAllUniqueCharacters('amarillo')); // false
console.log(hasAllUniqueCharacters('question')); // true
