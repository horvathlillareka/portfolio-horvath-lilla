document.addEventListener("DOMContentLoaded", function() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const portfolioSection = document.getElementById('portfolio');
            const userInfo = `
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>${user.location.city}, ${user.location.country}</p>
                <img src="${user.picture.large}" alt="Random user image">
            `;
            portfolioSection.innerHTML += userInfo;
        })
        .catch(error => console.error('Error fetching data:', error));
});
