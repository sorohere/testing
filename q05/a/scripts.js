const { Children } = require("react");

function helper(animal, num) {
    const names = {child: "Children", person: "people", saurabh: "soro"};
    if(num === 1) return `${num} ${animal}`;
    if(names[animal]) return `${num} ${names[animal]}`;
    else return `${num} ${animal}s`;
}

function solve() {
    const animal = document.getElementById("animal").value;
    const num = parseInt(document.getElementById("num").value);

    const result = helper(animal, num);
    document.getElementById("result").textContent = result;
}