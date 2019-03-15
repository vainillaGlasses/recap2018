const mobile = "/css/mobile.css";
const desktop = "css/style.css";
if(screen.width <= 480){
    document.getElementById("stylesheet").setAttribute("href", mobile);
    document.getElementById("drupal-title").innerHTML = "Drupal Camp <br> Costa Rica 2018";
    document.getElementById("cancion-text").innerHTML = "Bohemian Rhapsody</span> <br>(Aunque esa es la canción de Manatí desde que encontramos el ahora extinto Ko-zin)";
    document.getElementById("modulos-title").innerHTML = "Construcción modular de contenidos <br> para la web";
}else{
    document.getElementById("stylesheet").setAttribute("href", desktop);
}