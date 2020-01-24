/** Reduce to convert array of arrays into array of object */

const analyticsData = [
    [ 'todo', '1', 22 ],
    [ 'todo', '2', 10 ],
    [ 'todo', '8', 1 ],
    [ 'inProgress', '4', 13 ],
    [ 'inProgress', '9', 4 ],
    [ 'done', '5', 7 ],
    [ 'done', '3', 1 ],
];

const modifiedData = analyticsData.reduce((accumulator, itemInArray) => {
    const objectFromArray = {
        type: itemInArray[0],
        userId: itemInArray[1],
        hits: itemInArray[2],
    };
    if (accumulator[itemInArray[0]]) {
        accumulator[itemInArray[0]].push(objectFromArray);
    } else {
        accumulator = {
            ...accumulator,
            ...{
                [itemInArray[0]]: [ objectFromArray ],
            },
        };
    }
    return accumulator;
}, {});


console.log(modifiedData);
