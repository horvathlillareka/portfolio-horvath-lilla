document.addEventListener("DOMContentLoaded", () => {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            
            // Lekért adatok megjelenítése KÉP nélkül
            const userInfo = document.getElementById("user-info");
            userInfo.innerHTML = `
                <h2>${user.name.first} ${user.name.last}</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Telefon:</strong> ${user.phone}</p>
                <p><strong>Ország:</strong> ${user.location.country}</p>
            `;
        })
        .catch(error => console.error("Hiba történt az API lekérésekor:", error));
});
