function helper(num) {
    const month = ["jan", "feb", "mar", "april", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"];
    let number = parseFloat(num);
    if(number > 12 || number < 1) return "bad number";
    number = Math.trunc(number);

    return month[number-1];
}

function solve() {
    const num = document.getElementById("month").value;
    const result = helper(num);
    document.getElementById("result").textContent = result;
}