function helper(cie, see) {
    return () => {
        const result = Math.round(cie) + Math.round(see);
        return result;
    };
}

function solve() {
    const usn = document.getElementById("usn").value;
    const sub = document.getElementById("subname").value;
    const subcode = document.getElementById("subcode").value;

    const cie = parseFloat(document.getElementById("cie").value);
    const see = parseFloat(document.getElementById("see").value);


    const parent = helper(cie, see);
    const totalmarks = parent();

    results = `usn: ${usn}<br>sub: ${sub}<br>subcode: ${subcode}<br>totalmarks: ${totalmarks}`;
    document.getElementById("result").innerHTML = results;
    
}