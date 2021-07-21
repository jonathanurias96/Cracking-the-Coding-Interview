import { hasAllUniqueCharacters } from './uniqueAndReverse'; 

/**
 * Implement a method to perform basic string compression using the counts of repeated characters.
 * For example, the string 'aabcccccaaa' would become 'a2b1c5a3'. If the compressed string would not become
 * smaller that the original string, your method should return the original string. You can assume the
 * string has only upper and lower case letters (a-z).
 * 
 * TEST CASES
 * 
 * Input: 'aabcccccaaa'
 * Output: 'a2b1c5a3'
 * 
 * Input: 'zzzzzzzzzzzz'
 * Output: 'z12'
 * 
 * Input: 'abcdefg'
 * Output: 'abcdefg'
 */

const stringCompression = (word: string): string => {
    if(hasAllUniqueCharacters(word)) {
       return word; 
    }

    let stringCompressed = '';
    const charactersAmounts: CharactersAmounts = {};

    for(let i = 0; i < word.length; i ++) {
        const currentCharater = word[i];

        if(charactersAmounts[currentCharater]) {
            charactersAmounts[currentCharater] += 1;
        } else {
            charactersAmounts[currentCharater] = 1;
        }
    }

    Object.keys(charactersAmounts).forEach(key => {
        stringCompressed += key + charactersAmounts[key];
    })

    return stringCompressed;
}

interface CharactersAmounts {
    [key: string]: number
}

console.log(stringCompression('aabcccccaaa')); // 'a2b1c5a3'
console.log(stringCompression('zzzzzzzzzzzz')); // 'z12'
console.log(stringCompression('abcdefg')); // 'abcdefg'

/**
 * Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to
 * rotate the image by 90 degrees. Can you do this in place?
 * 
 * TEST CASES
 * 
 * Input: 'aabcccccaaa'
 * Output: 'a2b1c5a3'
 * 
 * Input: 'zzzzzzzzzzzz'
 * Output: 'z12'
 * 
 * Input: 'abcdefg'
 * Output: 'abcdefg'
 */
