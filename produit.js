function idProduit (sVar) {
    return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") 
    + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
  }
  
  idProduit = (idProduit("produit"));
  

  ajaxGet("http://localhost:3000/api/teddies", function (reponse) {
    var oursonSelectionne = JSON.parse(reponse);
    var EltRow = document.getElementsByClassName("row");
    var rowCard = EltRow[2];
        
    oursonSelectionne.forEach(function (ourson) {
        if (idProduit === ourson._id){
            var divCol = document.createElement("div");
            divCol.setAttribute("class", "col-12 col-lg-5");
            rowCard.appendChild(divCol);
                var imageOurson = document.createElement("img");
                imageOurson.src = ourson.imageUrl;
                imageOurson.setAttribute("width",350);
                imageOurson.setAttribute("Alt", "L'ourson" + ourson.name);
            divCol.appendChild(imageOurson);
            var colDescription = document.createElement("div");
            colDescription.setAttribute("class", "col-12 col-lg-7");
            rowCard.appendChild(colDescription);
                var titleOurson = document.createElement("h5");
                titleOurson.setAttribute("class", "nomOurson");
                titleOurson.innerHTML = ourson.name;
                colDescription.appendChild(titleOurson);
                
                var descriptionOurson = document.createElement("p");
                descriptionOurson.innerHTML = ourson.description;
                colDescription.appendChild(descriptionOurson);

                var couleurOursonP = document.createElement("p");
                couleurOursonP.textContent = "Sélectionnez une couleur ";
                colDescription.appendChild(couleurOursonP);

                var sautDeLigneDescription = document.createElement("br");
                couleurOursonP.appendChild(sautDeLigneDescription);
                
                var couleurOurson = document.createElement("select");
                couleurOurson.setAttribute("class", "selectpicker");
                couleurOursonP.appendChild(couleurOurson);
                                
                var couleurs = ourson.colors;
                for (var i = 0; i < couleurs.length; i++) {
                    var optionCouleur = document.createElement("option");
                    optionCouleur.setAttribute("class", "couleurOurson");
                    optionCouleur.textContent = couleurs[i];
                    couleurOurson.appendChild(optionCouleur);
                    };
                
                var prixOurson = document.createElement("p");
                prixOurson.setAttribute("class", "prixOurson");
                prixOurson.innerHTML = "Prix : " + ourson.price + " €";
                colDescription.appendChild(prixOurson);

                var quantite = document.createElement("p");
                quantite.textContent = "Quantite ";
                colDescription.appendChild(quantite);
                var quantitechoix = document.createElement("select");
                quantitechoix.setAttribute("class", "selectpicker");
                quantite.appendChild(quantitechoix);
                    var optionchoix1 = document.createElement("option");
                    optionchoix1.setAttribute("class", "quantiteOurson");
                    optionchoix1.textContent = "1";
                    quantitechoix.appendChild(optionchoix1);
                    var optionchoix2 = document.createElement("option");
                    optionchoix2.setAttribute("class", "quantiteOurson");
                    optionchoix2.textContent = "2";
                    quantitechoix.appendChild(optionchoix2);
                    var optionchoix3 = document.createElement("option");
                    optionchoix3.setAttribute("class", "quantiteOurson");
                    optionchoix3.textContent = "3";
                    quantitechoix.appendChild(optionchoix3);
                    var optionchoix4 = document.createElement("option");
                    optionchoix4.setAttribute("class", "quantiteOurson");
                    optionchoix4.textContent = "4";
                    quantitechoix.appendChild(optionchoix4);
                    var optionchoix5 = document.createElement("option");
                    optionchoix5.setAttribute("class", "quantiteOurson");
                    optionchoix5.textContent = "5";
                    quantitechoix.appendChild(optionchoix5);

                var boutonAjoutPanier = document.createElement("button");
                boutonAjoutPanier.setAttribute("type", "button");
                boutonAjoutPanier.setAttribute("class", "btn btn-info info ajoutPanier");
                boutonAjoutPanier.textContent = "Ajouter au panier";
                colDescription.appendChild(boutonAjoutPanier);
                var sautDeLigneBouton = document.createElement("br");
                colDescription.appendChild(sautDeLigneBouton);
                var sautDeLigneBouton = document.createElement("br");
                colDescription.appendChild(sautDeLigneBouton);
                

        }
    })
});