const createElement = (data) => {
    const p = document.createElement("p");
    p.innerHTML = data;
    document.body.appendChild(p);
}

const queryWikipedia = (callback) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(JSON.parse(this.response).query.pages[21721040].extract);
        }
    }
    xhttp.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
    xhttp.send();
}

queryWikipedia(createElement);