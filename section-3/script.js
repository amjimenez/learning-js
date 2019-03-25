/****************************************
 *  1.Hoisting.
 */

function calculateAge(year) {
  console.log(2019 - year)
}

calculateAge(1995)

function getConversation() {
  console.log('Should I take that apple?')
  takeIt()
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
