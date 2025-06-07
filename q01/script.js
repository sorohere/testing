function translate(text) {
    // Replace every consonant (case-insensitive) with itself + 'o' + itself.
    return text.replace(/([bcdfghjklmnpqrstvwxyz])/gi, '$1o$1');
}

function handleTranslate() {
    const inputText = document.getElementById('inputText').value;
    document.getElementById('translatedText').textContent = translate(inputText);
} 