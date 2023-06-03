// tests/palindromes.test.js
const palindromes = require('../palindromes');

describe('palindromes()', () => {
  it('correctly identifies one-word palindromes', () => {
    expect(palindromes('madam')).toEqual(['madam']);
    expect(palindromes('racecar')).toEqual(['racecar']);
  });

  it('returns an empty array when given no palindromes', () => {
    expect(palindromes('tic tac toe')).toEqual([]);
  });

  it('ignores punctuation', () => {
    expect(palindromes('yo, banana boy!')).toEqual(['yobananaboy']);
  });
  it('detects multi-word palindromes', () => {
    expect(palindromes('A man, a plan, a canal, panama')).toEqual([
      'amanaplanacanalpanama',
    ]);
  });

  it("returns empty array for string's with length less than 3", () => {
    expect(palindromes('')).toEqual([]);
    expect(palindromes('a')).toEqual([]);
    expect(palindromes('aa')).toEqual([]);
  });
});
