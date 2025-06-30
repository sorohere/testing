function helper(str) {
    const vowel = "aeiouAEIOU";
    const match = {a: 0, i:0, o: 0, e: 0, u:0};

    for(var i = 0; i < str.length; i++) {
        var ch = str[i].toLowerCase();
        if(vowel.includes(ch)) match[ch] += 1;
    }

    return `a: ${match["a"]}<br> e: ${match["e"]}<br> i: ${match["i"]}<br> o: ${match['o']}<br> u: ${match["u"]}`;
}


function solve() {
    const str = document.getElementById("input").value;
    const result = helper(str);
    document.getElementById("result").innerHTML = result;
}