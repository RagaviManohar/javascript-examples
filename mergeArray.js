/** Function to merge 2 array of objects **/
const sourceArray = [
    { name: 'Apple', price: 10 },
    { name: 'Orange', price: 15 },
    { name: 'Mango', price: 20 },
    { name: 'PineApple', price: 30 },
    { name: 'Kiwi', price: 50 },
];

const mergeByProperty = (target, source, prop) => {
    source.forEach(sourceElement => {
        let targetElement = target.find(targetElement => {
            return sourceElement[prop] === targetElement[prop];
        })
        targetElement
            ? Object.assign(targetElement, sourceElement)
            : target.push(sourceElement);
    })
}

const requestingArray = [
    { name: 'Apple', quantity: 10 },
    { name: 'PineApple', quantity: 1 },
    { name: 'Kiwi', quantity: 2 },
];

mergeByProperty(requestingArray, sourceArray, 'name');
console.log(requestingArray);
console.log('------------------------------------');
console.log(sourceArray);

/** Output
[ { name: 'Apple', quantity: 10, price: 10 },
  { name: 'PineApple', quantity: 1, price: 30 },
  { name: 'Kiwi', quantity: 2, price: 50 },
  { name: 'Orange', price: 15 },
  { name: 'Mango', price: 20 } ]
------------------------------------
[ { name: 'Apple', price: 10 },
  { name: 'Orange', price: 15 },
  { name: 'Mango', price: 20 },
  { name: 'PineApple', price: 30 },
  { name: 'Kiwi', price: 50 } ]
*/
