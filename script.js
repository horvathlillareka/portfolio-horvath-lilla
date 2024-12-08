document.addEventListener("DOMContentLoaded", () => {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            
        .catch(error => console.error("Hiba történt az API lekérésekor:", error));
});
