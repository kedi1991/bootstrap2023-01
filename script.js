const API_KEY = "R0kTIqYWNYbh5q5jU5lnsa-NfBU";
const API_URI = "https://ci-jshint.herokuapp.com/api?api_key=";
const myModal = new bootstrap.Modal(document.getElementById('myModal'));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e){
    const querryString = `${API_URI}${API_KEY}`;

    const response = await fetch(querryString);

    const processed = await response.json();
    console.log(processed);
}
