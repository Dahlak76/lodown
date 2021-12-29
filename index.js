
'use strict';
 
// YOU KNOW WHAT TO DO //
 
 
/**
 * identity: Designed to return the same value that is passed in.
 * @param {Any Value}: takes in value
 * @returns {any value}: returns the same value that is passed in.
 *
 *  
 */
 function identity(value){
    return value;
}
module.exports.identity = identity;
 
/**typeof: takes a data and returns the type of data type in string form
 *
 * @param {Array, number, boolean, null, NaN, "string", object, undefined, function} anything: any value
 * @returns {string} returns a string with the data type that it is
 */
 function typeOf(value){
    if(typeof(value) === "string"){                         //check what type of data each is
    return "string";
    }else if(Array.isArray(value) === true){                // use Array.isArray for array
        return "array";
    }else if(typeof(value) === "object" && value !== null){
        return "object";
    }else if(typeof(value) === "undefined"){
        return "undefined";
    }else if(typeof(value) === "number"){
        return "number";
    }else if(typeof(value) === "boolean"){
        return "boolean";
    }else if(value === null){
        return "null";
    }else{
        return "function";
    }
}
module.exports.typeOf = typeOf;
/**
 *first: if theres no array it returns an empty array, if number is undefined
 * or NaN it returns the first indexed array, otherwise it returns the first indexed numbers of array
 * @param {array}: The collection over which to iterate.
 * @param {number}: number
 * @returns {any data type}: returns the first element in an array
 */
 function first(array, num) {
                                                // if array is not an array or if num is negative return [];
    var newArr = [];
   if (Array.isArray(array) === false) {        //check if an array
       return [];
   } else if (num === null || isNaN(num)) {     //check if num is num
       return array[0];
   } else if (num <= 0) {                       // check if num is a negative
        return [];
   } else if (num > array.length) {             // check if num is > that array
       return array;
   } else if (num === 1) {
   return array[0];
   }  
   for (var i = 0; i < num; i++) {              //loop thru and push iteration to new arr
       newArr.push(array[i]);
   }
   return newArr;                               //return new arr
}
module.exports.first = first;
 
/**last: returns the last ellement in array. if array isnt an array it returns an empty array
 * if number isnt given or is NaN it returns the last element in array otherwise returns the last item in array
 * @param {array} collection; takes an array and a number
 * @param {number}: a number
 * @param {function} action: tester function checks if array is array and if number is not null and a positive num or NaN
 * @returns {any data type}: returns the last element of array
 */
 function last(arr, num){
                                        //if arr is not an arr return []
var output = [];                          
if(Array.isArray(arr) === false){  
return output;
}                                       //if num is null or nan return last element in arr
else if(num === null || isNaN(num)){
return arr[arr.length - 1];                
}                                       //make sure num is not negative or > arr length
else if(num < 0){                       //return empty arr  
return [];                    
}                                       //return whole arr if num > arr length
else if(num > arr.length){        
return arr;                             // else return last num item of arr
}
else if(typeof num === "number"){
for(var i = arr.length -1; i > 0; i--){
return arr.slice(arr.length- 1 - 1);
}
}
}
module.exports.last = last;
 
/**indexOf: returns the index of the array that is the 1st occurance in an array
 *
 * @param {array, value} collection: takes in an array in the  function parameter
 * @param {value}: the target that will be checked against the array by the function
 * @param {function} action; checks if value is in array, loops thru array and returns index
 * of the first occurance of value input
 * @returns {index number}; returns -1 ifvalue isnt in array otherwise returns the index of occurance of value
 */
 function indexOf(arr, value){
                                            //return index of arr at first occurance and stop loop
    for(var i = 0; i < arr.length; i++){
        if(value === arr[i]){
            return i;
        }
       }
       return - 1;                         //return -1 if value not there
    }
  module.exports.indexOf =indexOf;
 
  /**contains: Returns true if the value is present in the list. Uses indexOf internally, if list is an Array
   *  and a value from index to start your search at a given index.
   *
   * @param {array} collection; an array
   * @param {value}: the target that will be checked by the function
   * @param {function} action:  tester function looks through a list to see if the passed in value exists
   * @returns {boolean}: returns true if value exists in the collection
   */
   function contains(arr, value){
    return (arr.includes(value) ? true : false); //return true if value exists in array
    }  
module.exports.contains = contains;
 
/**unique: Return a new array of all elements from the array with duplicates removed
 * uses indexOf in the function background
 * @param {array} collection: an array collection
 * @param {function}action: loops thru array and gets all elements while leaving copies
 * @returns{array}; returns the collection with duplicates removed
 */
 function unique(array){
    var newArray = [];
                                                            //return new array with no copies using indexof from above
       for (var i = 0; i < array.length; i++){              //for loop
           if (this.indexOf(newArray, array[i]) < 0) {      //if indexof itteration for equal
              newArray.push(array[i]);                      //push new arr
   }
   
}
  return newArray;                                          // let unique = [...new Set(array)];
                                                            // return unique;
}
module.exports.unique = unique;
 
/**filter: call function for each element in array passing the arguments:
*      the element, it's index, array
 * Looks through each value in the list, returning an array of all the values that pass a truth test
 * @param{array} collection: array is passed in arguments
 * @param{function} this is a tester function that is passed in the parameter. action: loops
 * @returns{array}return a new array of elements for which calling function returned true
 */
 
 function filter(arr, func) {                       // loop through array
    var newArray = [];                              //function call each element in array passing
     for (var i = 0; i < arr.length; i++){
         if(func(arr[i], i, arr)){
             newArray.push(arr[i]);
     }
     }
     return newArray;                                //the element, index and array
 }                                                  //return new array if elements true
module.exports.filter = filter;
 
/**reject: call function for each element in array passing the arguments:
 *  the element, it's index, array. returns new array for the function call that returns false
 *  opposit of filter
 * @param{array}collection: takes an array as arguments
 * @param{function}: tester function calls function with element, index,function, loops thru
 * @returns{array}: returns array with elements that return false
 */
 function reject(array, func){
    var newArray = [];
    for (var i = 0; i < array.length; i++) {            //loop array
       if (func(array[i], i, array) === false) {
           newArray.push(array[i]);                     //push [i] into new array
       }
    }
    return newArray;                                    //return new array
}
module.exports.reject = reject;
 
/**partition: Split list into two arrays: one whose elements all satisfy truthy
 * and one whose elements all do not truthy.Call <function> for each element in <array> passing it the arguments:
 * element, key, <array>
 * @param{array} collection: takes in array
 * @param{function}action: calls element, key and array, and loops
 * @returns{array} returns 2 arrays. one truthy and one falsey
 */
function partition(array, func) {
    var arrays = [];
    var truthy = [];
    var falsey = [];
    for (var i = 0; i < array.length; i++) {                //loop array, if truthy push to truthy var
        if (func(array[i], i , array)) {
            truthy.push(array[i]);
          }  else if (func(array[i], i, array) === false) { //if false, push to falsy array
              falsey.push(array[i]);
          }
      }
      arrays.push(truthy, falsey);
                                                            //return array
 return arrays;
}
module.exports.partition = partition;
 
/**map: call <function> for each element in <collection> passing the arguments:
 * if array( collectiion[i](itteration index), index, and collection)
 * if object(collection[key](itteration key), key, collection)
 * @param{array/object} collection: takes an array or object
 * @param{function} action: a tester function save the return value of each <function> call in a new array
 * @returns{array}: returns new array
 *
 */
function map(collection, func) {
    var newVal = [];
    if (Array.isArray(collection)) {
                                                                //iterate though collection to access it's values and indexes
        for (var i = 0; i < collection.length; i++) {
                                                                //call func with args: collection[i], i, collection
            newVal.push(func(collection[i], i, collection));
        }
    } else if (typeof collection === "object" && collection !== null) { //loop thru with collection[key], key, collection
        for (var key in collection ) {
            newVal.push(func(collection[key], key, collection));        //push to new array
        }
    }
    return newVal;                                                      //return new array
}
module.exports.map = map;
 
/**pluck: Return an array containing the value of <property> for every element in <array> of objects
 *  uses map function inside this function. extracting a list of property values.
 * @param{array of objects, property}collection: takes an array of objectss
 * @param{property} value: a target value
 * @returns{array}: returns a list of property values as an array
 */
 
function pluck(array, property) {
    var newArray = [];
   newArray = this.map(array, function(element){        //use map to check for arr containing the value for propertys
      return element[property];
   });
  return newArray;                                      // return new array
}
module.exports.pluck = pluck;
 
/**every: Returns true if all of the values in the list pass the truthy test.
 * it stops looping the list if a false element is found.  checks if func is funf, array is array & object is object
 * @param{array or object} collection: takes in a collection
 * @param{function} action: a tester function checks what type of collection, loops thru looking for truthy returns
 * @returns{boolean};  returns true if all itterations are true or false at the 1st faalse return
 */
function every(collection, func){
                                         // use boolean flag variable
    if (!func) {                                            //is func a func, is array an array and loop
     if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {         //if arraay is false truthy var gets reassigned false
        if (!collection[i]) {
          return false;
        }
      }
    } else if (typeof collection === "object") {           //if object loop and if obj is false, truehy var = false
      for (var key in collection) {
        if (collection[key] === false) {
          return false
        }
      }
    }
  } else if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {               //loop array, if coll[i], i, coll = false then truthy var = false
      if (func(collection[i], i, collection) === false) {
        return false;
      }
    }
  } else if (typeof collection === "object") {
    for (var key in collection) {                               //loop obj, if coll[key], key, coll = false then truthy var = false
      if (func(collection[key], key, collection) === false ) {
        return false;
      }
    }  
  }
  return true;                                                 //return truthy
 }
 module.exports.every = every;
 
/**some: If the return value of calling <function> is true for at least one element, return true
 *  If the return value of calling <function> is true for at least one element, return true
 * if all are false return false
 * @param{collection}collection: takes collection as arguments
 * @param{function} action: a tester function checks if func is func and if array or object and loops thru
 * @returns{boolean}: returns true if any values are true and false if all are false
 */
 
function some(collection, func){
    if(!func){
        if(Array.isArray(collection)){
            for(var i = 0; i < collection.length; i++){
                 if(collection[i]){
                     return true;
                 }
            }
        } else {
            for(var key in collection){
                if(collection[key]){
                    return true;
                }
            }
        }
    }else if(Array.isArray(collection)){
        for(var i = 0; i < collection.length; i++){
            if(func(collection[i], i, collection) === true){
                return true;
            }
        }
    }else if(typeof collection === "object"){
        for(var key in collection){
            if(func(collection[key], key, collection) === true){
             return true;
            }
        }
    }
    return false;
};
 
module.exports.some = some;
 
/**reduce: Call <function> for every element in <collection> passing the arguments:
 *         previous result, element, index. Use the return value of <function> as the "previous result"
 *         for the next iteration. on the 1st itteration, use seed as the previous result. If no <seed>
 *         was given, use the first element/value of <collection> as <seed> and continue to the next element
 *         After the last iteration, return the return value of the final <function> call
 * @param{array}collection: takes an array
 * @param{function}action: loops starting at seed (index num or string"") then adds in each itteration to previous
 * @param{seed}: tells the function where to start iterating from in the collection, value to initialize the accumulator value in your combine function
 * @returns{value}: return the value of last function call itteation
 */
function reduce(array, func, seed){
    if (seed === undefined) {
        seed = array[0];
        for (var i = 1; i < array.length; i++) {
            seed = func(seed, array[i], i);
        }
    } else {
        for (var i = 0; i < array.length; i++) {
            seed = func(seed, array[i], i)
        }
    }
    return seed;
}
module.exports.reduce = reduce;
 
/**extend: takes multiple objects. able to add objects into one object and continue to add new ones in the
 * order they are given
 * @param{object, object1, object2...}takes in multiple objects
 * @param{function}action: a tester function that makes copies of objects and passes them into one object. makes for future additions
 *                          in order
 * @returns{object}: returns object with other objects added in the order they are passed in
 */
 function extend(object, object1, object2){
       
    Object.assign(object, object1, object2);
       
       return object;
      }
module.exports.extend = extend;
 
