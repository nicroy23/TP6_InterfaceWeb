// Chercher le bouton html pour écouter les clicks.
var boutonSwitch = document.getElementById("bouton-switch");

// Chercher la balise du lien css pour la changer dynamiquemen.
var lienCss = document.getElementById("lien-css");

// Chercher le div avec id centre pour le déplacer lors de la transition au gabarit 8.
var divCentre = document.getElementById("centre");

// Variable temporaire qui garde le div avec id secondaire en mémoire pour le déplacer lors de la transition au gabarit 8.
var tempSecondaire = document.getElementById("secondaire");

// Variable temporaire qui garde le div avec id principal en mémoire.
var tempPrincipal = document.getElementById("principal");

// Selectionne le block avec id centre-bis pour le supprimer lors de la transition au gabarit 8.
var centreBis = document.getElementById("centre-bis");

// Sélectionne le block avec id navigation pour le déplacer lors de la transition au gabarit 8.
var divNavigation = document.getElementById("navigation");

// Sélectionne le block avec id global
var divGlobal = document.getElementById("global");

// Sélectionne le div avec un id pied pour le supprimer lors de la transition au gabarit 8
var divPied = document.getElementById("pied");

/** Permet de garder en valeur le navigation pour la supprimer dans le modele 11
    et le rajouter dans le modele 8 **/
var nouvelleNavigation = document.createElement("div");
nouvelleNavigation.id = "navigation";
nouvelleNavigation.innerHTML = divNavigation.innerHTML;

/** Permet de garder en valeur le centreBis pour la supprimer dans le modele 8
    et le rajouter dans le modele 11 **/
var centreBisTemp = document.createElement("div");
centreBisTemp.id = "centre-bis";
centreBisTemp.innerHTML = centreBis.innerHTML;

// Petit paragraphe de copyright présent dans le div avec un id secondaire.
var pCopyright = document.createElement("p");
pCopyright.id = "copyright";
pCopyright.innerText = "Mise en page © 2008 Elephorm et Alsacréations & Nicolas Roy / William Stancu";

// Variable pour déterminer si le css est au modèle 11 ou non.
var estModele11 = true;

// Écoute pour un click du bouton.
boutonSwitch.addEventListener("click", () => {
  if (estModele11) {
    changerCss("styles/modele08.css");
    changerHtmlMod8();
  } else {
    changerCss("styles/modele11.css");
    changerHtmlMod11();
  }

  // Alterner le booléen estModele11.
  estModele11 = !estModele11;
});

/**
 * Fonction qui change le lien css dans le html pour le chemin du gabarit choisi.
 *
 * @param {string} valeur - Le chemin vers le fichier css.
 */
function changerCss(valeur) {
  lienCss.href = valeur;
}

/**
 * Fonction qui change les différents div qui sont affectés par le changement
 * de gabarit pour le numéro 8 (centre-bis, navigation...).
 */
function changerHtmlMod8() {
  centreBis = document.getElementById("centre-bis");

  divGlobal.insertBefore(nouvelleNavigation, divCentre);
  divNavigation.remove();
  centreBis.remove();
  divCentre.appendChild(tempPrincipal);
  tempSecondaire.appendChild(pCopyright);
  divCentre.appendChild(tempSecondaire);
  divPied.remove();
}

/**
 * Fonction qui change les différents div qui sont affectés par le changement
 * de gabarit pour le numéro 11 (centre-bis, navigation...).
 */
function changerHtmlMod11() {
  nouvelleNavigation.remove();
  tempPrincipal.remove();
  tempSecondaire.remove();
  divCentre.appendChild(centreBisTemp);
  global.appendChild(divPied);
}


//--------------------------------- TP6 (jQuery) --------------------------------------//
$(function() {
  $("#img-1-p").mouseover(function() {
    $(this).fadeOut(1000);
    setTimeout(() => {
      $("#img-1-g").fadeIn(1000);
    }, 1000);
  });

  $("#img-1-g").mouseout(function() {
    $(this).fadeOut(1000);
    setTimeout(() => {
      $("#img-1-p").fadeIn(1000);
    }, 1000);
  });

  $("#img-2-p").mouseover(function() {
    $(this).fadeOut(1000);
    setTimeout(() => {
      $("#img-2-g").fadeIn(1000);
    }, 1000);
  });

  $("#img-2-g").mouseout(function() {
    $(this).fadeOut(1000);
    setTimeout(() => {
      $("#img-2-p").fadeIn(1000);
    }, 1000);
  });

  $("#img-3-p").mouseover(function() {
    $(this).fadeOut(1000);
    setTimeout(() => {
      $("#img-3-g").fadeIn(1000);
    }, 1000);
  });

  $("#img-3-g").mouseout(function() {
    $(this).fadeOut(1000);
    setTimeout(() => {
      $("#img-3-p").fadeIn(1000);
    }, 1000);
  });

  $("#img-4-p").mouseover(function() {
    $(this).fadeOut(1000);
    setTimeout(() => {
      $("#img-4-g").fadeIn(1000);
    }, 1000);
  });

  $("#img-4-g").mouseout(function() {
    $(this).fadeOut(1000);
    setTimeout(() => {
      $("#img-4-p").fadeIn(1000);
    }, 1000);
  });
});