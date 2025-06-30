class Stack {
    constructor() {
        this.item = [];
    }

    push(e){
        this.item.push(e);
    }

    pop() {
        return this.item.pop();
    }

    peak() {
        return this.item[this.item.length-1];
    }
}

class Queue {
    constructor() {
        this.item = [];
    }

    push(e){
        this.item.push(e);
    }

    pop() {
        return this.item.shift();
    }

    peak() {
        return this.item[0];
    }
}

const stack = new Stack();
const queue = new Queue();


function stackpush() {
    const e = document.getElementById("stackinput").value;
    stack.push(e);
    document.getElementById("stackinput").value = "";
    document.getElementById("stack").textContent = "[" + stack.item.join(', ') + "]";
    document.getElementById("stackresult").textContent = e + " added.";
}

function enqueue() {
    const e = document.getElementById("queueinput").value;
    queue.push(e);
    document.getElementById("queueinput").value = "";
    document.getElementById("queue").textContent = "[" + queue.item.join(', ') + "]";
    document.getElementById("queueresult").textContent = e + " added.";
}

function stackpop() {
    if(stack.item.length === 0) {
        document.getElementById("stackresult").textContent = "underflow";
        return;
    }
    const pope = stack.pop();
    document.getElementById("stack").textContent = "[" + stack.item.join(', ') + "]";
    document.getElementById("stackresult").textContent = pope + " removed.";
}

function dequeue() {
    if(queue.item.length === 0) {
        document.getElementById("queueresult").textContent = "underflow";
        return;
    }
    const pope = queue.pop();
    document.getElementById("queue").textContent = "[" + queue.item.join(', ') + "]";
    document.getElementById("queueresult").textContent = pope + " removed.";
}

function stackpeak() {
    if(stack.item.length === 0) {
        document.getElementById("stackresult").textContent = "underflow";
        return;
    }
    const peake = stack.peak();
    document.getElementById("stackresult").textContent = peake + " at top";
}

function queuepeak() {
    if(queue.item.length === 0) {
        document.getElementById("queueresult").textContent = "underflow";
        return;
    }
    const peake = queue.peak();
    document.getElementById("queueresult").textContent = peake + " at top";
}