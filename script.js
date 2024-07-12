document.getElementById('toggleMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');});
document.getElementById('searchBar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const animeTable = document.getElementById('animeTable');
    const rows = animeTable.getElementsByTagName('tr');

    Array.from(rows).forEach(row => {
        const animeCells = row.getElementsByTagName('td');
        Array.from(animeCells).forEach(cell => {
            const animeNameElem = cell.getElementsByTagName('h2')[0];
            const animeName = animeNameElem.innerText;
            const animeNameLower = animeName.toLowerCase();

            if (animeNameLower.includes(searchTerm)) {
                const regex = new RegExp(`(${searchTerm})`, 'gi');
                const newAnimeName = animeName.replace(regex, '<span class="highlight">$1</span>');
                animeNameElem.innerHTML = newAnimeName;
                cell.style.display = '';
            } else {
                animeNameElem.innerHTML = animeName; // Reset the innerHTML
                cell.style.display = 'none';
            }
        });
    });
});


