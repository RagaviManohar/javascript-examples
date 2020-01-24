const _ = require('lodash');

const defaultArray = ['1, 3, 4, 7, 15', '1, 2, 4, 15, 21'];

function findCommonValuesInAnArray(array) {
    const arr = array.toString().split(',');
    let newArr = [], commonArr = [];
    arr.map(item => {
        /** Check an item already exists in newArr
         * if true push in common array
         * In other words, intersection of two arrays
        */
        const valueAlreadyExists = (newArr.indexOf(item) > -1);
        newArr.push(item);
        if (valueAlreadyExists) {
            commonArr.push(item);
        }
    });
    return [commonArr.join(',')];
}

console.log(findCommonValuesInAnArray(defaultArray));


/** Output
[ '1, 4, 15' ]
*/


