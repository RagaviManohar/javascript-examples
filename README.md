# examples

## event-emitter
An exmaple of an EventEmitter in js
Refer https://github.com/RagaviManohar/javascript-examples/blob/master/event-emitter.js

## findCommonValuesInAnArray
An exmaple of an findCommonValuesInAnArray in js
sample example:
Input - ['1, 3, 4, 7, 15', '1, 2, 4, 15, 21'] -> Output - [ '1, 4, 15' ]
Input - ['1, 3, 9, 10, 17, 18”, “1, 4, 9, 10'] -> Output - ['1, 9, 10']
Refer https://github.com/RagaviManohar/javascript-examples/blob/master/findCommonValuesInAnArray.js

## lodash_chain
An example to use _.chain
Refer https://github.com/RagaviManohar/javascript-examples/blob/master/lodash_chain.js

## mergeArray
An exmaple of an merge two arrays in js
Refer https://github.com/RagaviManohar/javascript-examples/blob/master/mergeArray.js

## promiseInMap
Promise in a map
Refer https://github.com/RagaviManohar/javascript-examples/blob/master/promiseInMap.js

## reduce
Reduce to return an array of objects from an array of arrays
Refer Refer https://github.com/RagaviManohar/javascript-examples/blob/master/reduce.js

sample input[
    [ 'todo', '1', 22 ],
    [ 'todo', '2', 10 ],
    [ 'todo', '8', 1 ],
    [ 'inProgress', '4', 13 ],
    [ 'inProgress', '9', 4 ],
    [ 'done', '5', 7 ],
    [ 'done', '3', 1 ],
]

output:
{
    todo:[
        { type:'todo',userId:'1',hits:22 },
        { type:'todo',userId:'2',hits:10 },
        { type:'todo',userId:'8',hits:1 }
    ],
    inProgress:[
        { type:'inProgress',userId:'4',hits:13 },
        { type:'inProgress',userId:'9',hits:4 }
    ],
    done:[
        { type:'done',userId:'5',hits:7 },
        { type:'done',userId:'3',hits:1 }
    ]
}

