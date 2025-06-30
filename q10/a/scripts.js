window.onload = async () => {
    const response = await fetch('/api/visits');
    const data = await response.json();

    document.getElementById("result").textContent = data.visits; 
}