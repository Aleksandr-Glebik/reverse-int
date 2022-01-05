module.exports = function reverse (n) {
  let str = Math.abs(n).toString()
  return Number(Array.from(str).reverse().join(''))
}

