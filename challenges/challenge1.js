/****************************************
 * CODING CHALLENGE 1
 */

console.log('%c Coding Challenge 1', 'background: #222; color: #bada55')
const john = {
  mass: 44,
  height: 1.7
}
const mark = {
  mass: 80,
  height: 1.5
}

mark.bmi = mark.mass / mark.height ** 2

john.bmi = john.mass / john.height ** 2
console.log(mark.bmi, john.bmi)
const isMarkbmiGreater = mark.bmi > john.bmi
console.log("Is Mark's bmi higher than John's? " + isMarkbmiGreater)
