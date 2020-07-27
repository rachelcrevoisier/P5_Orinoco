function idProduit (sVar) {
    return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") 
    + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
  }
  
  idProduit = (idProduit("produit"));
  console.log(idProduit);

  ajaxGet("http://localhost:3000/api/teddies", function (reponse) {
    var oursonSelectionne = JSON.parse(reponse);
    var EltTab = document.getElementsByClassName("tableaux");
    var rowtab = EltTab[0];
    var creaTable = document.createElement("table");
    creaTable.setAttribute("class", "col-12 col-lg-4");
        rowtab.appendChild(creaTable);
        
    oursonSelectionne.forEach(function (ourson) {
        if (idProduit === ourson._id){
          console.log("Tout fonctionne");
          var imageOurson = document.createElement("img");
              
        imageOurson.src = ourson.imageUrl;
        imageOurson.setAttribute("width",40);
        imageOurson.setAttribute("Alt", "L'ourson" + ourson.name);
        rowtab.appendChild(imageOurson);
          var ligneElt = document.createElement("tr");
        ligneElt.innerHTML = "<td>" + ourson.imageUrl + "</td>"+"<td>" + ourson.name + "</td>" + "<td>" + ourson.price + "</td>" +
            "<td>" + ourson.description + "</td>";
        creaTable.appendChild(ligneElt);

        }else{
          console.log("Nous avons rencontré un problème dans le choix de votre produit. Veuillez recommencer.");
        }
    })
});