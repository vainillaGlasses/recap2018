window.onload = function() {
    textOrder();
    function textOrder(){
        if(screen.width <= 480){
            document.getElementById("drupal-title").innerHTML = "Drupal Camp <br> Costa Rica 2018";
            document.getElementById("cancion-text").innerHTML = "Bohemian Rhapsody</span> <br>(Aunque esa es la canción de Manatí desde que encontramos el ahora extinto Ko-zin)";
            document.getElementById("modulos-title").innerHTML = "Construcción modular de contenidos <br> para la web";
            document.getElementById("contibuciones-row").classList.remove("banner__row");
            document.getElementById("contribuciones-paragraph1").classList.remove("col-1");
            document.getElementById("contribuciones-paragraph2").classList.remove("col-2");
            document.getElementById("conocimiento-row").classList.remove("banner__row");
            document.getElementById("conocimiento-paragraph1").classList.remove("col-1");
            document.getElementById("conocimiento-paragraph2").classList.remove("col-2");
            document.getElementById("drupalcamp-row").classList.remove("banner__row");
            document.getElementById("drupalcamp-paragraph1").classList.remove("col-1");
            document.getElementById("drupalcamp-paragraph2").classList.remove("col-2");
            document.getElementById("manati-row").classList.remove("banner__row");
        }else{
            document.getElementById("drupal-title").innerHTML = "Drupal Camp Costa Rica 2018";
            document.getElementById("cancion-text").innerHTML = "Bohemian Rhapsody</span> (Aunque esa es la canción de Manatí desde que <br> encontramos el ahora extinto Ko-zin)";
            document.getElementById("modulos-title").innerHTML = "Construcción modular de contenidos  para la web";
            document.getElementById("contibuciones-row").classList.add("banner__row");
            document.getElementById("contribuciones-paragraph1").classList.add("col-1");
            document.getElementById("contribuciones-paragraph2").classList.add("col-2");
            document.getElementById("conocimiento-row").classList.add("banner__row");
            document.getElementById("conocimiento-paragraph1").classList.add("col-1");
            document.getElementById("conocimiento-paragraph2").classList.add("col-2");
            document.getElementById("drupalcamp-row").classList.add("banner__row");
            document.getElementById("drupalcamp-paragraph1").classList.add("col-1");
            document.getElementById("drupalcamp-paragraph2").classList.add("col-2");
            document.getElementById("manati-row").classList.add("banner__row");
        }
    };
}