import { reverseIt, reverseArray } from "../src/challenge01"

describe('Challenge 01', () => {
  const t1 = 'JavaScript'
  const t2 = ['JavaScript', 'HTML', 'XML', 'Java', 'Python', 'Perl', 'Go', 'C++']

  test('Reverse a single string', () => {
    // Reverse the single string,
    expect(reverseIt(t1)).toEqual('tpircSavaJ')
  })

  test('Reverse all strings in an array', () => {
    // Reverse all string in an array
    expect(reverseArray(t2)).toEqual([ 'tpircSavaJ', 'LMTH', 'LMX', 'avaJ', 'nohtyP', 'lreP', 'oG', '++C' ])
  })
})
