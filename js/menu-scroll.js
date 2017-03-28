//Aparecer 	section
$(document).ready(function(){
  $(".oculto").hide();              
    $(".inf").click(function(){
          var nodo = $(this).attr("href");  
 
          if ($(nodo).is(":visible")){
               $(nodo).hide();
               return false;
          }else{
        $(".oculto").hide("slow");                             
        $(nodo).fadeToggle("fast");
        return false;
          }
    });
}); 
// desaaprecer la section
$(document).ready(function(){
    
    $(".hidePanel").click(function(){
        $(".panel").hide();
    });
  
});
// Array con las imagenes que se iran mostrando en la web
    var imagenes=new Array(
        'img/perfil/1.jpg',
        'img/perfil/2.jpg',
        'img/perfil/3.jpg'
    
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


//Darle cambio de color al div  
  var blikedPerfil = false;
        function BlinkPerfil() {
            blikedPerfil = !blikedPerfil;
            $(".notificacion").css("background-color", blikedPerfil ? "rgba(84, 222, 221, 0.38)" : " #ffe5ee");
            setTimeout("BlinkPerfil()", 1000);
        }

// para animacion en letras
 $(document).ready(function(){
    
        tamano='';
      i=1;
     ConvertirTexto();
     setInterval(Animar,90);

  
});

function ConvertirTexto(){
     resultado='';
         cadena=$('#text-animation').html();
         tamano=cadena.length;
         for (var i = 0; i< tamano; i++) {
             letra=cadena.charAt(i);
             resultado+='<span class="ta-letra ">'+letra+'</span>';
        }
  
         $('#text-animation').html(resultado);
}

function Animar(){
  if(i<=tamano){
      $('.ta-letra:nth-child('+i+')').css('color','#fff');
     }
      i++;
}
