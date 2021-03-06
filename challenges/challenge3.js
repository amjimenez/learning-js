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

console.log('%c Coding Challenge 3', 'background: #222; color: #bada55')
var originalBills = Array(124, 48, 268)

console.log('originalBills', originalBills)

var tips = originalBills.map(bill => {
  if (bill < 50) {
    return bill * 0.2
  } else if (bill < 200) {
    return bill * 0.15
  } else {
    return bill * 0.1
  }
})

console.log('tips', tips)

var tipsAndBills = originalBills.map((bill, key) => {
  return bill + tips[key]
})

console.log('tipsAndBills', tipsAndBills)
