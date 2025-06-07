window.onload = async function() {
        const response = await fetch('/api/visits');
        
        const data = await response.json();
        const visitCountElement = document.getElementById('visit-count');
        
        visitCountElement.textContent = data.visits;
}; 