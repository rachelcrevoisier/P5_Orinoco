ajaxGet("http://localhost:3000/api/teddies", function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    var teddies = JSON.parse(reponse);
    // Affiche le titre de chaque film
    teddies.forEach(function (teddies) {
        console.log(teddies.name);
    })
});