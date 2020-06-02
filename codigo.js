alert("Si funciona");
            var ruta = window.location;
            var memoria = console.memory;
            var tiempoa = console.time;
            console.log("Este es un mensaje secreto");
            document.write("Estas en la " + ruta.origin);
            
            document.write(" <br> Capacidad <br>" + memoria);
            document.write(" <br> La hora es" + tiempoa);

            console.log(ruta); //Ver como esta escrito por dentro
            console.log(console); //Sacarle datos

            // extension de console.log para mostrar fecha y hora 
