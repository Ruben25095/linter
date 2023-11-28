const { Console } = require('console');
const fs = require('fs');
 const letras= ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","ñ","z","x","c","v","b","n","m","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Ñ","Z","X","C","V","B","N","M"];
 const numeros=["1","2","3","4","5","6","7","8","9","0"];
 const arroba=["@"];
  var errores_reglones=[];
fs.readFile('database.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  var cadena_split = data.split('\n');
  const top = cadena_split[0].split(",");
 
  console.log(top);
  console.log(cadena_split.length);
  //Funcion para validar si el string de la matriz son pueros numeros
  function validarNum(query){

    let k=0;
    var query_split_numeros =query.split("");
     
      while(k < query_split_numeros.length){
      var validarnumeros =numeros.includes(query_split_numeros[k]);
      k++;
      if(validarnumeros==false){
            return validarnumeros;
          //continue;
        }      
      }
         return true;

  }
  //validar que el string contenga puras letras
  function validarLetras(query){
    let j=0;
        var query_split =query.split("");
          while(j < query_split.length){
          var validarletras =letras.includes(query_split[j]);
          j++;
          if(validarletras === false){
           return validarletras;}
              
          }
   
       return true;
  }
  //esta funcion valida que el correo solo contenga un arroba
  function validarCorreo(query){
    let j=0;
       numerodearrobas=0;
    var query_split =query.split("");
      while(j < query_split.length){
      var validarcorreo =arroba.includes(query_split[j]);
       j++;
      if(validarcorreo === true){
         numerodearrobas=numerodearrobas+1;
      }
     
      }
      if(numerodearrobas ===0){
        return false;
     }
      if(numerodearrobas>1){
        return false;
      }
      if(numerodearrobas ===1){
        return true;
      }
       

  }




  for (let i =1; i < cadena_split.length; i++) {
    
    var query = cadena_split[i].split(",");

       
    if (top.length != query.length || query.length == 0) {
        console.log("Faltan Datos " + "Reglon: " +i);
        
        errores_reglones.push("Renglon " + i + " : " + cadena_split[i]);
        
        continue;
    }
    
     //var aux1 = validarCorreo(query[6]);
     //console.log("La funcion regresa"+aux1);
     
    if(validarLetras(query[0]) === false){
      console.log("Renglon " + i + " : dato incorrecto en columna Nombre");
      errores_reglones.push("Renglon " + i + " : " + cadena_split[i]);
      continue;}
      
        if(validarNum(query[1]) === false){
            console.log("Renglon " + i + " : dato incorrecto en columna Matricula");
            errores_reglones.push("Renglon " + i + " : " + cadena_split[i]);
            continue;}

            if(validarLetras(query[2]) === false){
              console.log("Renglon " + i + " : dato incorrecto en columna Facultad");
              errores_reglones.push("Renglon " + i + " : " + cadena_split[i]);
              continue;}
              if(validarLetras(query[3]) === false){
                console.log("Renglon " + i + " : dato incorrecto en columna carrera");
                errores_reglones.push("Renglon " + i + " : " + cadena_split[i]);
                continue;}

                if(validarNum(query[4]) === false){
                  console.log("Renglon " + i + " : dato incorrecto en columna promedio");
                  errores_reglones.push("Renglon " + i + " : " + cadena_split[i]);
                  continue;}
                  if(validarNum(query[5]) === false){
                    console.log("Renglon " + i + " : dato incorrecto en columna Edad");
                    errores_reglones.push("Renglon " + i + " : " + cadena_split[i]);
                    continue;}
                    if(validarCorreo(query[6]) === false){
                      console.log("Renglon " + i + " : dato incorrecto en columna correo");
                      errores_reglones.push("Renglon " + i + " : " + cadena_split[i]);
                      continue;}
        console.log("Renglon "+i+" "+query);
     } 





// Paso 2: Convertir la matriz a una cadena de texto
const texto = errores_reglones.join('\n'); // Usando un salto de línea como separador

// Paso 3: Escribir el contenido en un archivo de texto
fs.writeFile('log.txt', texto, (err) => {
  if (err) {
    console.error('Error al escribir el archivo:', err);
  } else {
    console.log('Archivo de texto creado exitosamente.');
  }
});

});
