/****************************************
 * CODING CHALLENGE 4
 */

/**
Let's remember the first coding challenge where Mark and John compared their 
BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create and object with properties for their full name, 
mass, and height.
2. Then, add a method to each object to calculate the BMI. Save the BMI to the 
object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the 
full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height*height). (mass in kg and
height in meter.)
Good luck. 😄
 */

console.log('%c Coding Challenge 4', 'background: #222; color: #bada55')

var john = {
  mass: 110,
  height: 1.95,
  calculateBMI: function() {
    this.bmi = this.mass / this.height ** 2
    return this.bmi
  }
}
var mark = {
  mass: 80,
  height: 1.5,
  calculateBMI: function() {
    this.bmi = this.mass / this.height ** 2
    return this.bmi
  }
}

mark.calculateBMI()
john.calculateBMI()
console.log(mark, john)
const isMarkBMIGreater = mark.bmi > john.bmi
console.log("Is Mark's bmi higher than John's? " + isMarkBMIGreater)
