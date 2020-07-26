// connexion avec le fichier connexion.js
ajaxGet("http://localhost:3000/api/teddies", function (reponse) {
    var oursonSelectionne = JSON.parse(reponse);


function idProduit (sVar) {
    return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") 
    + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
  }
  
  idProduit = (idProduit("produit"));
  

  var listeOursons = JSON.parse(reponse);
    // Placement au 3ème row
    var EltRow = document.getElementsByClassName("row");
    var rowCard = EltRow[1];
    
    
       
        oursonSelectionne.forEach(function (ourson) {
            ourson._id = idProduit;
            var divCol = document.createElement("div");
            divCol.setAttribute("class", "col-12 col-lg-4");
                rowCard.appendChild(divCol);
                // Création div card
                var divCard = document.createElement("div");
                divCard.setAttribute("class", "card");
                divCol.appendChild(divCard);
                
                var cardBody = document.createElement("div");
                cardBody.setAttribute("class", "card-body");
                divCard.appendChild(cardBody);

                
        var imageOurson = document.createElement("img");
        imageOurson.setAttribute("class", "card-img-top");
        
        imageOurson.src = ourson.imageUrl;
        imageOurson.setAttribute("width",40);
        imageOurson.setAttribute("Alt", "L'ourson" + ourson.name);
        cardBody.appendChild(imageOurson);
        
        var titleOurson = document.createElement("h5");
        titleOurson.setAttribute("class", "card-title");
        titleOurson.innerHTML = ourson.name;
        cardBody.appendChild(titleOurson);
        var descriptionOurson = document.createElement("p");
        descriptionOurson.setAttribute("class", "card-text");
        descriptionOurson.innerHTML = ourson.description;
        cardBody.appendChild(descriptionOurson);
        var prixOurson = document.createElement("p");
        prixOurson.setAttribute("class", "price");
        prixOurson.innerHTML = ourson.price + "€";
        cardBody.appendChild(prixOurson);
    });
});