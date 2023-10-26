/**
 * Write a function (WITHOUT USING STRING methods) to reverse the order of a string.
 * 
 * @param {string} value 
 * @returns 
 */
export const reverseIt = (value) => {
  let newString = "" 

  for(let i = value.length - 1; i >= 0; i--) {
    newString += value[i]
  }
  return newString 
}

export const reverseArray = (arr) => arr.map(str => reverseIt(str))


console.log(reverseArray(['JavaScript', 'HTML', 'XML', 'Java', 'Python', 'Perl', 'Go', 'C++']))
