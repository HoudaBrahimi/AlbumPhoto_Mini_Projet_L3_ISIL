
// Une fonction qui permet d'ouvrir le slide des images.
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Une fonction qui permet de fermer le slide des images.
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

//Une variable qui donne un indice pour chaque images et l'initialise à 1.
var slideIndex = 1;
showSlides(slideIndex);

 // Une fonction qui permet de passer vers l'image précédente/suivante (Previous/Next controls)
function plusSlides(n) {
  showSlides(slideIndex += n);
}

 // Une fonction qui permet d'afficher le champs des images miniatures.
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Basculer les diapositives correctes
function showSlides(n) {
  var i;

  // Toutes les diapositives du document
  var slides = document.getElementsByClassName("mySlides");

  // Tous les points de la diapositive dans le document
  var dots = document.getElementsByClassName("demo");

  // L'élément avec un id="caption"
  var captionText = document.getElementById("caption");

  // Si le numéro du slide est supérieur au nombre total de slides
  if (n > slides.length) {slideIndex = 1}

// Si le numéro du slide est inférieur au nombre total de slides
  if (n < 1) {slideIndex = slides.length}

// Masquer chacune des diapositives
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

// Remplacer chacun des points de la classe "active" par ""
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  // Définit la diapositive actuelle pour qu'elle s'affiche en tant qu'élément de bloc
  slides[slideIndex-1].style.display = "block";

  // Définit le point respectif de la diapositive actuelle sur la classe "active"
  dots[slideIndex-1].className += " active";

  // Définit le texte de la description sur le texte de la description de la diapositive actuelle
  captionText.innerHTML = dots[slideIndex-1].alt;
}
