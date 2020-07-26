// connexion avec le fichier connexion.js
ajaxGet("http://localhost:3000/api/teddies", function (reponse) {
    var listeOursons = JSON.parse(reponse);

    document.getElementById("row").innerHTML =
    "Page location is " + window.location.href;