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
    let compressedWord = '';
    let counter = 1;
    for(let i = 0; i < word.length; i++) {
        let currentCharater = word[i];
        for(let j = i + 1; currentCharater === word[j]; j++) {
            counter++;
            i++;
        }
        compressedWord += currentCharater + counter;
        counter = 1;
    }
    return compressedWord;
}

// console.log(stringCompression('aabcccccaaa')); // 'a2b1c5a3'
// console.log(stringCompression('zzzzzzzzzzzz')); // 'z12'
// console.log(stringCompression('abcdefg')); // 'abcdefg'
// console.log(stringCompression('aabcdeeeeeeeeeellllllllllpoooooooooo')) // a2b1c1d1e10l10p1o10

/**
 * Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to
 * rotate the image by 90 degrees. Can you do this in place?
 * 
 * TEST CASES
 * 
 * Input: [
 *  [1, 2, 3, 4],
 *  [5, 6, 7, 8],
 *  [9, 10, 11, 12],
 *  [13, 14, 15, 16]
 * ]
 * Output: [
 *  [13, 9, 5, 1],
 *  [14, 10, 6, 2],
 *  [15, 11, 7, 3],
 *  [16, 12, 8, 4]
 * ]
 * 
 * Input: [
 *  ['p', 'o', 'n', 'm'],
 *  ['l', 'k', 'j', 'i'],
 *  ['h', 'g', 'f', 'e'],
 *  ['d', 'c', 'b', 'a']
 * ]
 * Output: [
 *  ['d', 'h', 'l', 'p'],
 *  ['c', 'g', 'k', 'o'],
 *  ['b', 'f', 'j', 'n'],
 *  ['a', 'e', 'i', 'm']
 * ]
 */

const rotateMatrix = <T extends unknown>(matrix: T[][]): T[][] => {
    let rotatedMatrix: T[][] = [];
    for(let i = matrix.length - 1; i >= 0; i--) {
        const currentItem = matrix[i];
        for(let j = 0; j < currentItem.length; j++) {
            if(rotateMatrix[j]) {
                rotatedMatrix[j].push(currentItem[j]);
            } else {
                rotatedMatrix[j] = [currentItem[j]];
            }
        }
    }
    return rotatedMatrix;
}

console.log(rotateMatrix([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]));

console.log(rotateMatrix([
  ['p', 'o', 'n', 'm'],
  ['l', 'k', 'j', 'i'],
  ['h', 'g', 'f', 'e'],
  ['d', 'c', 'b', 'a']
]))
