let gamesData = [];

// Fetch the games from the JSON file
fetch('games.json')
    .then(response => response.json())
    .then(data => {
        gamesData = data;
        displayGames(gamesData);
    })
    .catch(error => console.error('Error loading games:', error));

function displayGames(games) {
    const grid = document.getElementById('gameGrid');
    grid.innerHTML = '';

    games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        // When clicked, redirect to the player page with the game ID in the URL
        card.onclick = () => {
    if (game.url) {
        window.location.href = game.url;
    } else {
        window.location.href = `game.html?id=${game.id}`;
    }
};

        card.innerHTML = `
            <img src="${game.thumbnail}" alt="${game.title}">
            <h3>${game.title}</h3>
        `;
        grid.appendChild(card);
    });
}

function filterGames() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const filtered = gamesData.filter(game => 
        game.title.toLowerCase().includes(searchTerm)
    );
    displayGames(filtered);
}
