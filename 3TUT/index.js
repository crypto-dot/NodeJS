const logEvent = require('./logEvent');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter { };

const myEmitter = new MyEmitter();
myEmitter.on('log', (message) => {
    logEvent(message);
});

setTimeout(() => {
    myEmitter.emit('log', 'Log Event Emitted');
}, 2000);