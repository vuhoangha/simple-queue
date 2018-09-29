export default class VietNamQueue {
    constructor() {
        this.push = this.push.bind(this);
        this.exec = this.exec.bind(this);
        this.do = this.do.bind(this);

        this.queue = [];
    }

    push(func, param) {
        this.queue.push({ func, param });
        this.queue.length === 1 && this.do();
    }

    exec(item) {
        item && item.func(item.param);
    }

    do() {
        const lastItem = this.queue[0];
        this.exec(lastItem).then(() => {
            this.queue.shift();
            this.queue.length > 0 && this.do();
        });
    }
}