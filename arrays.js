var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
]
 
var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
]

var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(array, element){
    array = [element, ...array]
    return array
  }  
  
function destructivelyAddElementToBeginningOfArray(array, element){
  
    array.unshift(element)
    return array
} 
  
function addElementToEndOfArray(array, element){
   array = [ ...array, element]
   return array
} 

function destructivelyAddElementToEndOfArray(array, element){
   array.push(element)
   return array
}
  
function accessElementInArray(array, index){
  return(array[0])
}
  
function destructivelyRemoveElementFromBeginningOfArray(){
  
}  
  
function removeElementFromBeginningOfArray(){
  
}
  
function destructivelyRemoveElementFromEndOfArray(){
  
}
  
function removeElementFromEndOfArray(){
  
}
  
  
  
  
  
  
  