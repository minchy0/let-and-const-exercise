
const newFilter = function filterOutOdds(...nums){
    return nums.filter(num => num % 2 === 0);
}

function finMin(...nums){
    return Math.min(...nums);
    }

function mergeObjects(key,val){
    return {...key,...val};
}

const doubleA = function doubleAndReturnArgs(arr,...args){
    return [...arr, ...args.map(n => n * 2)]
}

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    let idx = Math.floor(Math.random() * items.length)
    return [...items.silce(0,idx), ...items.slice(idx +1)];
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];
}
const extand = [array1, array2] => [...arry1, ...arry2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    return {...key, ...val};
}
const addKeyVal = (obj,key,val) => {
...key, ...val};

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    return {...obj, ...key.reduce(obj[i])}
}


/** Combine two objects and return a new object. */

// function combine(obj1, obj2) {
//     return {...obj1,...obj2};
// }
const combine = {obj1, obj2} => {
    return {...obj1, obj2}
}

/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    let newObj = {...obj};
    newObj[key] = value;
    return newObj;
}