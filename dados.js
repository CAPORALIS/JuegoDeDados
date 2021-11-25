
//Sergio Caporali Ramirez

function Jugador(nombre){
    this.nombre = nombre;
    this.caraDado1 = 0;
    this.caraDado2 = 0;
}

function JuegoDados(numeroJuego, uno, dos){
    this.numeroJuego = numeroJuego;
    this.jugador1 = uno;
    this.jugador2 = dos;

    this.tirarDados = function() {
        this.jugador1.caraDado1 =Math.floor(Math.random() * 6) + 1; //usar random(1,6)
        this.jugador1.caraDado2 = Math.floor(Math.random() * 6) + 1; //usar random(1,6)

        this.jugador2.caraDado1 = Math.floor(Math.random() * 6) + 1; //usar random(1,6)
        this.jugador2.caraDado2 = Math.floor(Math.random() * 6) + 1; //usar random(1,6)
    }

    this.determinaGanador = function() {
        if ( (this.jugador1.caraDado1 + this.jugador1.caraDado2 == 7)
            && (this.jugador2.caraDado1 + this.jugador2.caraDado2 != 7) ) {
            return this.jugador1.nombre;
        }
        else if ( (this.jugador2.caraDado1 + this.jugador2.caraDado2 == 7)
            && (this.jugador1.caraDado1 + this.jugador2.caraDado1 != 7) ) {
            return this.jugador2.nombre;
        }
        else return "Empate";
    }

}


let vic1=0;
let vic2=0;
let ganadorNombre="";
let uno = new Jugador();
let dos = new Jugador();
uno.nombre="Pedro Sánchez";
dos.nombre="Antonio Ramírez";

let i=1;
let huboGanador=false;
let empate=0;
let nombreGanadorTorneo="";


do{     
    let partida = new JuegoDados(i, uno, dos);
    partida.tirarDados();
    let ganador = partida.determinaGanador();
    
    if(ganador ===uno.nombre){
        ganadorNombre = uno.nombre
        vic1++
    }
    if(ganador ===dos.nombre){
        ganadorNombre = dos.nombre
        vic2++
    }
    if(ganador ==="Empate"){
        empate++
        ganadorNombre = "Empate"
    }
        console.log("El ganador del juego"+ i +" es: " + ganadorNombre);
        if (vic1 ===3 || vic2===3){  
            huboGanador=true;
            if(vic1===3){
                nombreGanadorTorneo =uno.nombre;
            }else{
                nombreGanadorTorneo=dos.nombre;
                
            }
          
        }
    i=i+1;


} while(huboGanador===false);
console.log("Partidas jugadas: "+i);
console.log("El ganador del torneo: "+ nombreGanadorTorneo + " felicidades");

//Determinar el primer ganador de 3 juegos y cuantos juegos hubo