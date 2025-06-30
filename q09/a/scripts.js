function helper(str) {
    const notindex = str.indexOf("not");
    const badindex = str.indexOf("bad");

    if(notindex != -1 && badindex != -1 && notindex < badindex) {
        return str.slice(0, notindex) + "good" + str.slice(badindex+3);
    }

    return str;
}

function solve() {
    const str = document.getElementById("input").value;
    const result = helper(str);
    document.getElementById("result").textContent = result;
}