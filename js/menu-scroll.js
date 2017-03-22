 // Array con las imagenes que se iran mostrando en la web

    var imagenes=new Array(
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg'
    );
    //Funcion para cambiar la imagen
    function rotarImagenes()
    {
        // obtenemos un numero aleatorio entre 0 y la cantidad de imagenes que hay
        var index=Math.floor((Math.random()*imagenes.length));
 
        // cambiamos la imagen
        document.getElementById("imagen").src=imagenes[index];
    }
    //Función que se ejecuta una vez cargada la página
    onload=function()
    {
        // Cargamos una imagen aleatoria
        rotarImagenes();
 
        // Indicamos que cada 2 segundos cambie la imagen
        setInterval(rotarImagenes,2000);
    }

    
  var blikedPerfil = false;
        function BlinkPerfil() {
            blikedPerfil = !blikedPerfil;
            $(".notificacion").css("background-color", blikedPerfil ? "rgba(84, 222, 221, 0.38)" : " #ffe5ee");
            setTimeout("BlinkPerfil()", 1000);
        }