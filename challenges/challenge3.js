/****************************************
 * CODING CHALLENGE 3
 */

/**
John and his family went on a holiday and went to 3 different restaurants. The 
bills were $124, $48 and $268

To tip the waiter a fair amount, John created a simple tip calculator (as a 
function). He likes to tip 20% of the bill when the bill is less than $50,
15% when the bill is between $50 and $200, and 10% if the bill is more than 
$200.

In the end, John would like to have 2 arrays: 
1: containing all three tips (one for each bill).
2: Containing all three final paid amounts (bill + tip).

(Note: To calculate %20 of a value, simply multiply if with (20/100) = 0.2)

Good luck. 😄
 */

console.log('%c Coding Challenge 2', 'background: #222; color: #bada55')
var averageJohn = (89 + 120 + 103) / 3
var averageMike = (116 + 94 + 123) / 3
var averageMary = (97 + 134 + 105) / 3

console.log('averageJohn:', averageJohn)
console.log('averageMike:', averageMike)
console.log('averageMary:', averageMary)

averageJohn = 3
averageMike = 3
averageMary = 4

averageJohn > averageMike && averageJohn > averageMary
  ? console.log("John's team is the winner")
  : averageMike > averageJohn && averageMike > averageMary
  ? console.log("Mike's team is the winner")
  : averageMary > averageJohn && averageMike < averageMary
  ? console.log("Mary's team is the winner")
  : console.log('There is a draw')
