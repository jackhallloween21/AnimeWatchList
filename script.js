document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check localStorage for saved theme
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeToggle.checked = true;
    }

    themeToggle.addEventListener("change", function() {
        if (this.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    });
});

document.getElementById('searchBar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const animeTable = document.getElementById('animeTable');
    const rows = animeTable.getElementsByTagName('tr');

    Array.from(rows).forEach(row => {
        const animeCells = row.getElementsByTagName('td');
        let rowMatch = false;

        Array.from(animeCells).forEach(cell => {
            const animeNameElem = cell.getElementsByTagName('h2')[0];
            if (animeNameElem) {
                const animeName = animeNameElem.innerText;
                const animeNameLower = animeName.toLowerCase();

                if (animeNameLower.includes(searchTerm)) {
                    const regex = new RegExp(`(${searchTerm})`, 'gi');
                    const newAnimeName = animeName.replace(regex, '<span class="highlight">$1</span>');
                    animeNameElem.innerHTML = newAnimeName;
                    rowMatch = true;
                } else {
                    animeNameElem.innerHTML = animeName; // Reset the innerHTML
                }
            }
        });

        row.style.display = rowMatch ? '' : 'none';
    });
});
