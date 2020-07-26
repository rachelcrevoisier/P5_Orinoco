ajaxGet("http://localhost:3000/api/teddies", function (reponse) {
    var tableaux = JSON.parse(reponse);
    var tableauxElt = document.getElementById("tableaux");
    tableaux.forEach(function (tableau) {
        // Crée une ligne de tableau HTML pour chaque tableau
        var ligneElt = document.createElement("tr");
        ligneElt.innerHTML = "<td>" + tableau.imageUrl + "</td>"+"<td>" + tableau.name + "</td>" + "<td>" + tableau.price + "</td>" +
            "<td>" + tableau.description + "</td>";
        tableauxElt.appendChild(ligneElt);
    });
});