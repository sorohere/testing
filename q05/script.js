function pluralize(noun, number) {
    const irregularPlurals = {
        'sheep': 'sheep',
        'goose': 'geese',
        'child': 'children',
        'person': 'people',
        'tooth': 'teeth',
        'foot': 'feet',
        'mouse': 'mice',
        'man': 'men',
        'woman': 'women'
    };

    if (number === 1) {
        return `${number} ${noun}`;
    }

    if (irregularPlurals[noun]) {
        return `${number} ${irregularPlurals[noun]}`;
    }

    return `${number} ${noun}s`;
}

function handlePluralize() {
    const noun = document.getElementById('noun').value;
    const number = parseInt(document.getElementById('number').value);
    document.getElementById('result').textContent = pluralize(noun, number);
} 