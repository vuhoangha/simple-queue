# vietnam-queue

# example

    const VietNamQueue = require('vietnam-queue');

    const queue = new VietNamQueue();

    function hello(param){
        console.log(JSON.stringify(param));
    }

    queue.push(hello,{name:'Vietnam'});