// Profilkép hozzáadása randomuser.me API segítségével
document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.querySelector('#about');
    const img = document.createElement('img');
    img.alt = 'Profilkép';
    img.style.width = '150px';
    img.style.borderRadius = '50%';
    img.style.display = 'block';
    img.style.margin = '0 auto 20px';

    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            img.src = data.results[0].picture.large;
            aboutSection.prepend(img);
        })
        .catch(error => console.error('Hiba történt az API betöltésekor:', error));
});
