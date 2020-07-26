// connexion avec le fichier connexion.js
ajaxGet("http://localhost:3000/api/teddies", function (reponse) {
    var listeOursons = JSON.parse(reponse);

var idProduit = $_GET('produit');
    console.log (idProduit);