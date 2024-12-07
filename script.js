document.addEventListener("DOMContentLoaded", () => {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            
            // Elemszerkesztés a kép nélkül
            const userInfo = document.getElementById("user-info");
            userInfo.innerHTML = `
                <h2>${user.name.first} ${user.name.last}</h2>
                <p>Email: ${user.email}</p>
                <p>Telefon: ${user.phone}</p>
                <p>Ország: ${user.location.country}</p>
            `;
        })
        .catch(error => console.error("Hiba történt az API lekérésekor:", error));
});
