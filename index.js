// connexion avec le fichier connexion.js
ajaxGet("http://localhost:3000/api/teddies", function (reponse) {
    var listeOursons = JSON.parse(reponse);
    // Placement au 3ème row
    var EltRow = document.getElementsByClassName("row");
    var rowCard = EltRow[2];
    // création de la liste des produits avec la mise en page card
        listeOursons.forEach(function (listeProduits) {
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

                var lienOurson = document.createElement("a");
                lienOurson.href = "produit.html?produit=" + listeProduits._id;
                cardBody.appendChild(lienOurson);
        
                var imageOurson = document.createElement("img");
                imageOurson.setAttribute("class", "card-img-top");
        
                imageOurson.src = listeProduits.imageUrl;
                imageOurson.setAttribute("width",40);
                imageOurson.setAttribute("Alt", "L'ourson" + listeProduits.name);
                lienOurson.appendChild(imageOurson);
        
                var titleOurson = document.createElement("h5");
                titleOurson.setAttribute("class", "card-title");
                titleOurson.innerHTML = listeProduits.name;
                cardBody.appendChild(titleOurson);
        
                var descriptionOurson = document.createElement("p");
                descriptionOurson.setAttribute("class", "card-text");
                descriptionOurson.innerHTML = listeProduits.description;
                cardBody.appendChild(descriptionOurson);
        
                var prixOurson = document.createElement("p");
                prixOurson.setAttribute("class", "price");
                prixOurson.innerHTML = listeProduits.price + "€";
                cardBody.appendChild(prixOurson);
            });
});
