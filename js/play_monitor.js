$(document).ready(function(){
    var bot=new ShowBot(
      /*id del video*/"#myVideo",
      [/*Lista del contenido relacionado: Intervalo, link, indicación corta, descripción*/
        /**/[5,10,"https://www.buenosaires.gob.ar", "Indicación 1", "Una descripción para el elemento 1."],
        /**/[26,30,"https://unaj.edu.ar", "Indicación A", "Una descripción para el elemento A."],
        /**/[36,44,"https://fiuba.edu.ar", "Indicación b", "Una descripción para el elemento b."],
        /**/[13,18,"unq.edu.ar", "Indicación 3", "Una descripción para el elemento 3."]
      ]
    );
  }
);
