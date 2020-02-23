const profiter = require('./mixing/profiter')
// define stock array
const stock_values = []
const results = profiter.reduce(stock_values)
// results
console.log('**************************')
console.log('STOCK VALUES:', stock_values)
console.log('BUY PRICE: ', results[3] ? results[3]: '' )
console.log('SELL PRICE: ', results[4] ? results[4]: '' )
console.log('MAX PROFIT: ', results[2] > 0? results[2]: 'NO PROFIT => -1')
console.log('**************************\n')
