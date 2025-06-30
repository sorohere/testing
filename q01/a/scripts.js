function helper(str) {
    const vowel = "aeiouAEIOU";
    var result = "";

    for(var i = 0; i < str.length; i++) {
        if(!vowel.includes(str[i])) result += str[i] + "o" + str[i];
        else result += str[i];
    }

    return result;
}

function solve() {
    const str = document.getElementById("text").value;
    const result = helper(str);
    document.getElementById("result").textContent = result;
}