/** Lodash chain example */

const _ = require('lodash');
const analyticsData = [
    { type: 'view details', userId: '001', hits: '8' },
    { type: 'view details', userId: '071', hits: '2' },
    { type: 'view details', userId: '091', hits: '6' },
    { type: 'participate', userId: '010', hits: '1' },
    { type: 'participate', userId: '011', hits: '8' },
];

const temp = _.chain(analyticsData)
    .orderBy('hits', 'desc')
    .groupBy(value => value.type)
    .map((value, key) => {
        console.log({
            label: key,
            users: _.slice(value, 0, 2),
        })
        return {
            label: key,
            users: _.slice(value, 0, 2),
        }
    })
    .value();
console.log(temp);

/** Output:
 * {
        label: 'view details',
        users: [
            { type: 'view details', userId: '001', hits: '8' },
            { type: 'view details', userId: '091', hits: '6' }
        ]
    }
    { 
        label: 'participate',
        users: [
            { type: 'participate', userId: '011', hits: '8' },
            { type: 'participate', userId: '010', hits: '1' }
        ]
    }
 */

