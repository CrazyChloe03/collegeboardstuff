let data = [];

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
    const pictureElement = document.getElementById("picture");
    const detailsInfoElement = document.getElementById("detailsInfo");

    // Display user picture
    pictureElement.src = item.picture;

    // Display user details
    detailsInfoElement.innerHTML = `<p>ID: ${item.id}</p><p>Name: ${item.name}</p><p>Age: ${item.age}</p><p>Occupation: ${item.occupation}</p>`;
}

function addInformation() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const occupation = document.getElementById('occupation').value;
    const pictureUrl = document.getElementById('pictureUrl').value;

    // Simple validation
    if (!name || !age || !occupation || !pictureUrl) {
        alert('Please fill in all fields.');
        return;
    }

    const newItem = {
        id: data.length + 1, // You may need a more sophisticated way to generate IDs
        name: name,
        age: parseInt(age),
        occupation: occupation,
        picture: pictureUrl
    };

    data.push(newItem);

    // Optionally, clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('occupation').value = '';
    document.getElementById('pictureUrl').value = '';

    // Optionally, you can re-run the search to update the displayed results
    search();
}
