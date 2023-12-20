const data = [
    {
        id: 1,
        name: "John Doe",
        age: 25,
        occupation: "Engineer"
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 30,
        occupation: "Designer"
    },
    // Add more data as needed
];

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
