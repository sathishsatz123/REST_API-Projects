let jokeText = document.getElementById("jokeText");
let options = {
    method: "GET"
};
jokeBtn.onclick = function() {
    fetch("https://apis.ccbp.in/jokes/random", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            jokeText.textContent = data["value"]
        })
}