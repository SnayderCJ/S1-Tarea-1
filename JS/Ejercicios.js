const leer = require('prompt-sync')()

class Ejercicios{
 Ejercicio1(){


	let A, B, C 
	let Resultado 

    Resultado = 0;
	
	A = leer("Digite A: ")
    B = leer("Digite B: ")
    C = leer("Digite C: ")


    Resultado = (- B + Math.sqrt(B**2 - 4* A* C))/(2 * A)

    console.log("El resultado es: ", Resultado);
}

    Ejercicio2(){

        let A, B 
        let Resultado
        
        Resultado = 0;

        A = leer("Digite A: ")
        B = leer("Digite B: ")
        
        
        Resultado = ((3 + 5 * 8) < 3 && ((-6/3 * 4) + 2 < 2)) || (A > B)

        console.log(Resultado);
    }



}


const secuen1 = new Ejercicios()
//secuen1.Ejercicio1();
secuen1.Ejercicio2();