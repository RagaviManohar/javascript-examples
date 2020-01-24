'use strict';

const nameList = [ 'Rajini', 'Jack', 'Nick', 'John' ];

const anAsyncFunction = async (name) => {
    return Promise.resolve(`Hello ${name}`);
}

const getDataWithoutPromiseAll = async () => {
    return (nameList.map(name => anAsyncFunction(name)));
}

const getDataWithPromiseAll = async () => {
    return Promise.all(nameList.map(item => anAsyncFunction(item)));
}

getDataWithoutPromiseAll().then(data => {
    console.log('Data without promise all -----', data);
    console.log('------------------------------------');
});

getDataWithPromiseAll().then(data => {
    console.log('Data with promise all -----', data);
});

/**
 * Output:
Data without promise all ----- [ Promise { <pending> },
  Promise { <pending> },
  Promise { <pending> },
  Promise { <pending> } ]
------------------------------------
Data without promise all ----- [ 'Hello Rajini', 'Hello Jack', 'Hello Nick', 'Hello John' ]
*/
