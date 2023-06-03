// palindromes.js
module.exports = (str) => {
  const s = str.replace(/[^\w]/g, '').toLowerCase();
  if (s.length < 3) return [];
  const r = [...s].reduce((acc, x) => x.concat(acc), '');
  return s === r ? [r] : [];
};
