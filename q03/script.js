function handleCalculate() {
    const basePrice = parseFloat(document.getElementById('basePrice').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value);

    const netPrice = basePrice * (1 + taxRate / 100);

    document.getElementById('netPrice').textContent = netPrice.toFixed(2);
} 