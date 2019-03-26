/****************************************
 *  1.Hoisting.
 */
console.log(this.location)
console.log(
  '%c 1.Hoisting',
  'font-size: 16px; background: #222; color: #bada55'
)

function calculateAge(year) {
  console.log(2019 - year)
}

calculateAge(1995)

function getConversation() {
  console.log('Should I take that apple?')
  //takeIt()
}

var myAge = 22
console.log('myAge', myAge)
function otherThing() {
  myAge = 80
  console.log('otherThing' + myAge)
}
otherThing()
console.log('myAge', myAge)

var myAge2 = 22
console.log('myAge2', myAge2)
function otherThing2() {
  var myAge2 = 80
  console.log('otherThing2' + myAge2)
}
otherThing2()
console.log('myAge2', myAge2)

// This won't work due to globalContext
// There has not been a takeIt
getConversation()

var takeIt = function() {
  console.log('Yes, you should take it.')
}

getConversation()
/****************************************
 *  2.Scoping.
 */
console.log('%c 2.Scoping', 'font-size: 16px; background: #222; color: #bada55')

var a = 'HEllO!'
first()

function first() {
  var b = 'hi!'
  second()
  function second() {
    var c = 'hey!'
    console.log(a, b, c)
  }
}

/****************************************
 *  3.Execution Stack vs Scope Chain.
 */
console.log(
  '%c 3.Execution Stack vs Scope Chain',
  'font-size: 16px; background: #222; color: #bada55'
)

var a3 = 'hello'
first()

function first() {
  var b3 = 'Thomas'
  second()
  function second() {
    var c3 = 'C3'
    third()
  }
}

function third() {
  var d3 = 'd3'
  //console.log(c3)
  console.log(a3, d3)
}

/****************************************
 *  4.The this keyword.
 */
console.log(
  '%c 4.The this keyword',
  'font-size: 16px; background: #222; color: #bada55'
)

console.log(this)

calculateAge(1990)

function calculateAge(year) {
  console.log(2016 - year)
  console.log(this)
}

var alex = {
  name: 'Alex',
  yearsOfBirth: 1990,
  calculateAge: function() {
    console.log(this)
    console.log(2019 - this.yearsOfBirth)
    /*    function hello() {
      console.log(this)
    }
    hello() */
  }
}

alex.calculateAge()

var mike = {
  name: 'Mike',
  yearsOfBirth: 1995
}

mike.calculateAge = alex.calculateAge

mike.calculateAge()
