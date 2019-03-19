/**
 * Data Types
 */
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
 * Basic operators
 */

var year, yearJohn, yearkMark
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
 * 3.Operatoror precedence
 */

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
