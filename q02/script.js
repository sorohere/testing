function handleConvert() {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const num = parseInt(document.getElementById('monthNumber').value);
    
    // Simplified check and assignment
    const monthName = (num >= 1 && num <= 12) ? months[num - 1] : "Bad Number";
    
    document.getElementById('monthName').textContent = monthName;
} 