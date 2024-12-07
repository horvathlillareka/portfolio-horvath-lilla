 {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            img.src = data.results[0].picture.large;
            aboutSection.prepend(img);
        })
        .catch(error => console.error('Hiba történt az API betöltésekor:', error));
});

