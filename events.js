const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`Data received: ${name} with id: ${id}`);
});

customEmitter.emit('response', 'John', 34);
customEmitter.emit('response', 'J', 4);