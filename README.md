# vietnam-queue

# example

    import VietNamQueue from 'vietnam-queue';

    const queue = new VietNamQueue();

    function hello(param){
        console.log(JSON.stringify(param));
    }

    queue.push(hello,{name:'Vietnam'});