function loadData() {
    fetch('data.json') // Assuming data.json is in the same directory as your HTML file
        .then(response => response.json())
        .then(jsonData => {
            // Now jsonData contains the array of objects from data.json
            setupSearch(jsonData);
            search(); // Call the search function after loading data
        })
        .catch(error => console.error('Error loading data:', error));
}

function setupSearch(data) {
    function search() {
        const searchInput = document.getElementById("searchInput").value.toLowerCase();
        const searchResults = document.getElementById("searchResults");
        const detailsDiv = document.getElementById("details");
        searchResults.innerHTML = "";
        detailsDiv.innerHTML = "";

        const matches = data.filter(item => {
            const values = Object.values(item).map(value => value.toString().toLowerCase());
            return values.some(val => val.includes(searchInput));
        });

        if (matches.length > 0) {
            matches.forEach(match => {
                const resultDiv = document.createElement("div");
                resultDiv.innerHTML = `<p>${match.name}</p>`;
                resultDiv.addEventListener("click", () => showDetails(match));
                searchResults.appendChild(resultDiv);
            });
        } else {
            searchResults.innerHTML = "<p>No matching results found.</p>";
        }
    }

    function showDetails(item) {
        const detailsDiv = document.getElementById("details");
        detailsDiv.innerHTML = `<p>ID: ${item.id}</p><p>Name: ${item.name}</p><p>Age: ${item.age}</p><p>Occupation: ${item.occupation}</p>`;
    }
}

// Call loadData to fetch data from data.json and set up the search functionality
loadData();
