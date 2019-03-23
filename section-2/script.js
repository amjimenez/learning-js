/****************************************
 * 1.Data Types
 */
console.log('%c 1.Data Types ', 'background: #222; color: #bada55')

var firstName = 'John'
console.log(firstName)

var lastName = 'Smith'
var age = 28
var fullAge = true

console.log(fullAge)

var job
console.log(job)

job = 'Teacher'
console.log(job)

//  Variable naming rules
var _3years = 3
var johnMark = 'John and Mark'
// var if = 32

console.log(firstName + ' ' + age)

var a, b, c, d
a = 'hola'
b = 'tomas'
d = false
//Everything is coerced to string
console.log(a + ' ' + b + ' ' + c + ' ' + d)

// Javascript dynamic type
b = 20
console.log(b)

// var lastName2 = prompt('Whats is this last name?')
// console.log(lastName2)

/****************************************
 * 2.Basic operators
 */

console.log('%c 2.Basic operators', 'background: #222; color: #bada55')
var year, yearJohn, yearMark
now = 2019
ageJohn = 22
ageMark = 25

yearJohn = now - ageJohn
yearMark = now - ageMark
console.log(yearJohn)
console.log(now + 2)
console.log(now * 2)
console.log(now / 2)

//Logical operator
var isJohnOlder = ageJohn > ageMark
console.log(isJohnOlder)

// typeof operator

console.log(typeof isJohnOlder)
console.log(typeof ageJohn)
console.log(typeof 'a string')
console.log(typeof z)

/****************************************
 * 3.Operator of precedence
 */
console.log('%c 3.Operator of precedence', 'background: #222; color: #bada55')
var now3 = 2018
var yearJohn = 1989
var fullAge = 18

var isFullAge = now3 - yearJohn >= fullAge
console.log(isFullAge)

var average = 10 + 100 / 2
console.log(average)

average = (10 + 100) / 2
console.log(average)

var sample1, sample2
sample1 = sample2 = (3 + 5) * 4 - 6
console.log(sample1, sample2)

console.log(2 + 4 + 2 ** (2 ** 3) / 2 ? true === 3 < 2 : '0')

// average = average * 2
console.log(average)
average *= 2
console.log(average)

average += 2
console.log(average)

average /= 2
console.log(average)

average = 2
console.log(average)

average **= 3
console.log(average)

average %= 5
console.log(average)

/****************************************
 * 4.If/ else statements
 */
console.log('%c 4.If/ else statements', 'background: #222; color: #bada55')

var firstName4 = 'John'
var civilStatus = 'single'

if (civilStatus === 'married') {
  console.log(firstName4 + ' is married!')
} else {
  console.log(firstName + ' will hopefully marry soon :).')
}

var isMarried = true

if (isMarried) {
  console.log(firstName4 + ' is married!')
} else {
  console.log(firstName + ' will hopefully marry soon :).')
}

/****************************************
 * 5.Boolean logic
 */
console.log('%c 5.Boolean logic', 'background: #222; color: #bada55')

var firstName5 = 'Alan'
var age5 = 22

if (age5 < 13) {
  console.log(firstName5 + ' is a boy.')
} else if (age5 >= 13 && age5 < 20) {
  console.log(firstName5 + ' is a teenager.')
} else if (age5 >= 20 && age5 < 30) {
  console.log(firstName5 + ' is a young man.')
} else {
  console.log(firstName5 + ' is a man.')
}

/****************************************
 *  6.Ternary Operator  and Switch Statements
 */
console.log(
  '%c 6.Ternary Operator  and Switch Statements',
  'background: #222; color: #bada55'
)

var firstName6 = 'John'
var age = 16

age >= 18
  ? console.log(firstName + ' drinks beer.')
  : console.log(firstName + ' drinks juice.')

var drink = age >= 18 ? 'beer' : 'juice'
console.log(drink)

var job = 'teacher'

switch (job) {
  case 'teacher':
    console.log("You're a teacher")
    break
  case 'driver':
    console.log("You're a driver")
    break
  case 'designer':
    console.log("You're a designer")
    break
  default:
    console.log('default statement')
    break
}

firstName5 = 'Alan'
age5 = 15
switch (true) {
  case age5 < 13:
    console.log(firstName5 + ' is a boy.')
    break

  case age5 >= 13 && age5 < 20:
    console.log(firstName5 + ' is a teenager.')
    break
  case age5 >= 20 && age5 < 30:
    console.log(firstName5 + ' is a young man.')
    break

  default:
    console.log(firstName5 + ' is a man.')
    break
}

/****************************************
 *  7.Truthy and falsy values and equality operators.
 */
console.log(
  '%c 7. Truthy and falsy values and equality operators.',
  'background: #222; color: #bada55'
)

// Falsy values: undefined, null, 0 , '' , NaN
// Truthy values: NOT falsy values

var height
//height = null
height = 0
//height = ''
//height = Number('tomala')
//height = 8

if (height || height === 0) {
  console.log('The variable is defined')
} else {
  console.log('The variable has not been defined.')
}

height = 23
if (height == '23') {
  console.log('The operator == does type coercion!')
}

//Strict equality operator
if (height === '23') {
  console.log('The operator === does not do type coercion!')
}

/****************************************
 *  8.Functions.
 */
console.log('%c 8.Functions', 'background: #222; color: #bada55')

function calculateAge(birthYear) {
  return 2019 - birthYear
}

var ageJohn = calculateAge(1990)
var ageMary = calculateAge(1995)
var ageMike = calculateAge(2001)

console.log(ageJohn, ageMary, ageMike)

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year)
  var retirement = 65 - age
  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years.')
  } else {
    console.log(firstName + ' already retired.')
  }
}

yearsUntilRetirement(1995, 'Alexis')
yearsUntilRetirement(1992, 'Thomas')
yearsUntilRetirement(1997, 'Raul')
yearsUntilRetirement(1940, 'Mike')

/****************************************
 *  9.Function Statements and Expressions.
 */
console.log(
  '%c 9.Function Statements and Expressions',
  'background: #222; color: #bada55'
)

//Function declaration
/**
 *  Noting produced
 *
 */
//function getFullName(firstName, lastName){}

// Function expression
var getFullName = function(firstName, lastName) {
  return firstName + ' ' + lastName
}

console.log(getFullName('Alexis', 'Jimenez'))
