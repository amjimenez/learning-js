// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!')

// Challenge 1
function addTwo(num) {
  return num + 2
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3))
console.log(addTwo(10))

// Challenge 2
function addS(word) {
  return word + 's'
}

// uncomment these to check your work
console.log(addS('pizza'))
console.log(addS('bagel'))

// Challenge 3
function map(array, callback) {
  let items = []
  for (let index = 0; index < array.length; index++) {
    items.push(callback(array[index]))
  }
  return items
}

console.log(map([1, 2, 3], addTwo))

// Challenge 4
function forEach(array, callback) {
  let items = []
  array.forEach(item => {
    callback(item)
  })
}

// see for yourself if your forEach works!
let total = 0
const prices = [200, 300, 400]
forEach(prices, function(item) {
  total += item
})
console.log(total)
//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  let itemsProcessed = []
  array.forEach(element => {
    itemsProcessed.push(callback(element))
  })
  return itemsProcessed
}

const numbers = [12, 14, 18]
const divided = item => item / 2
console.log(mapWith(numbers, divided))
//Extension 2
function reduce(array, callback, initialValue) {
  for (let index = 0; index < array.length; index++) {
    initialValue = callback(array[index], initialValue)
  }
  return initialValue
}

const nums = [4, 1, 3, 9]
const add = function(a, b) {
  return a + b
}

console.log(reduce(nums, add, 0)) //-> 8
//Extension 3

function intersection(...arrays) {
  return reduce(
    arrays,
    function(a, b) {
      let result = []

      b.forEach(item => {
        if (a.indexOf(item) !== -1) {
          result.push(item)
        }
      })

      return result
    },
    arrays[0]
  )
  return result
}

console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
)
// should log: [5, 15]

//Extension 4
function union(...arrays) {
  return reduce(
    arrays,
    (a, b) => {
      return [...b, ...a.filter(itemA => b.indexOf(itemA) === -1)]
    },
    arrays[0]
  )
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]))
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  return reduce(
    array1,
    (a, b) => {
      const indexMatched = array2.indexOf(callback(a))
      if (indexMatched !== 1)
        return {
          ...b,
          [a]: array2[indexMatched]
        }
      return b
    },
    {}
  )
}

console.log(
  objOfMatches(
    ['hi', 'howdy', 'bye', 'later', 'hello'],
    ['HI', 'Howdy', 'BYE', 'LATER', 'hello'],
    function(str) {
      return str.toUpperCase()
    }
  )
)
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  return reduce(
    arrVals,
    (a, b) => {
      return {
        ...b,
        [a]: reduce(
          arrCallbacks,
          (callback, currentValue) => {
            return [...currentValue, callback(a)]
          },
          []
        )
      }
    },
    {}
  )
}

console.log(
  multiMap(
    ['catfood', 'glue', 'beer'],
    [
      function(str) {
        return str.toUpperCase()
      },
      function(str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase()
      },
      function(str) {
        return str + str
      }
    ]
  )
)
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

//Extension 7

function objectFilter(obj, callback) {
  return reduce(
    Object.keys(cities),
    (a, b) => {
      const { [a]: current, ...rest } = b

      if (cities[a].indexOf(callback(a)) !== -1) return b
      return rest
    },
    cities
  )
}

const cities = {
  London: 'LONDON',
  LA: 'Los Angeles',
  Paris: 'PARIS'
}
console.log(objectFilter(cities, city => city.toUpperCase()))

// Should log { London: 'LONDON', Paris: 'PARIS'}
