// Pre-curso skylab.
// Calculadora-Pro.
// Alvaro Amorós
// 09/06/21

// Objeto variable global
    let numeros = {
        "primero": null,
        "segundo": null,
        "resultados": []
    };

    // Función principal
    function calculadora ()
      input();
        operacion();
        limpiar();
    }

    // Function, obtener números de usuario.
    function input (){
        numeros.primero = prompt("Introduce un número: ");  // Pregunta por número
        while (true) {
            if (isNaN(numeros.primero)){ // Comprueba que es un valor numérico
                alert("Introduce un NÚMERO.");
            } else { // Si es numérico se sale del loop
                break;
            }
            numeros.primero = prompt("Introduce un número: "); // Si no lo es se vuelve a preguntar
        }
        
        numeros.segundo = prompt("Introduce un segundo número (opcional): ") // Lo mismo con el segundo número
        while (true){
            if (isNaN(numeros.segundo)){
                alert("Introdue un NÚMERO.")
            } else {  
                break
            }
            numeros.segundo = prompt("Introduce un segundo número (opcional): ")
        }

        numeros.primero = parseFloat(numeros.primero); // Asegurarse de que el imput no entre como string
        numeros.segundo = parseFloat(numeros.segundo);
    }


    // Funcion, Ver si hay uno o dos numeros
    function operacion(){
        if (numeros.segundo === null || numeros.segundo === "" || Number.isNaN(numeros.segundo)){ 
            return raiz(); // Si hay un solo número, llamar a la funcion raiz
        } else  {
            return aritmetica(); // Si hay dos a la función aritmética
        }
    }

    // Funcion raiz cuadrada
    function raiz (){
        numeros.resultados.push(Math.sqrt(numeros.primero)); // Calcula la raiz y la mete en el array
        output_raiz(); // LLamar a funcion para imprimir resultados  
    }

    // Función aritmética
    function aritmetica (){ // Hacer los cuatro calculos y meter los resultados en el array.
        numeros.resultados.push(numeros.primero + numeros.segundo);
        numeros.resultados.push(numeros.primero - numeros.segundo);
        numeros.resultados.push(numeros.primero * numeros.segundo);
        numeros.resultados.push(numeros.primero / numeros.segundo);
        output_aritmetica() // Imprime resultados
    }

    // Funcion output
    function output_aritmetica() { // Imprimir resultados
        console.log(`\n El resultado de la suma es: ${numeros.resultados[0].toFixed(2)}\n
        El resultado de la resta es: ${numeros.resultados[1].toFixed(2)}\n
        El resultado de la multiplicación es: ${numeros.resultados[2].toFixed(2)}\n
        El resultado de la división es: ${numeros.resultados[3].toFixed(2)} `);
    }

    // Funcion output raiz
    function output_raiz() { // Imprimir resultados
        console.log(`\n La raiz cuadrada de ${numeros.primero} es ${numeros.resultados[0]}`)
    }

     
    // Función para limpiar el array de resutlados
    function limpiar(){ 
        numeros.resultados = [];
    }