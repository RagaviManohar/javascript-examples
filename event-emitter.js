const EventEmitter = require('events');

const crazy = new EventEmitter();

crazy.on('event1', function () {
    console.log(' test==== event1 fired!');
    crazy.emit('event2');
});

crazy.on('event2', function () {
    console.log('event2 fired!');
    crazy.emit('event3');

});

crazy.on('event3', function () {
    console.log('event3 fired!');
    crazy.emit('event1');
});

crazy.emit('event1');

/** Result
 * Prints
 * event1 fired! event2 fired! event3 fired! on a loop
 * 'Maximum call stack size exceeded' will be an error for more than 10 loops
*/