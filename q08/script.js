function handleVowelCount() {
    const str = document.getElementById('inputText').value.toLowerCase();
    const counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };

    for (const char of str) {
        if (char in counts) {
            counts[char]++;
        }
    }

    const result = `a, e, i, o, and u appear, respectively, ${counts.a}, ${counts.e}, ${counts.i}, ${counts.o}, ${counts.u} times`;
    document.getElementById('result').textContent = result;
} 