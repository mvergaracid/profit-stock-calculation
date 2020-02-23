### Algorithm

1. Iterate over a array with the stocks, finding min_price_buy and max_price_buy

2. The total profit is equal to max_price - min_price

When -> profit
----------
44 -> -1
30 -> 44 - 30 =>  1
22 -> 22 - 30 => -1 (min buyer)
32 -> 32 - 22 => 10
35 -> 35 - 22 => 13
30 -> 30 - 22 => 8
41 -> 41 - 22 => 19 (max buyer)
38 -> 38 - 22 => 16
15 -> 15 - 22 => -1

Solution:
profit = max_buyer - min_buyer

## To run project:

1. npm i
2. Define a array in app.js for stock_values 
Example,

stock_values= [44, 30, 22, 32, 35, 30, 41, 38, 15]

2. node app.js


