import Carrera from './carrera.js';


class Main{
    constructor(){
        let carrera = new Carrera(document.querySelector("#texto"));
        document.querySelector("#btnCarrera").addEventListener("click", ()=>{
        
        let carreraDos = new Carrera(document.querySelector("#textoDos"));


        carrera.lanzamientoDado();
        carreraDos.lanzamientoDado();
        
        });
    }
}

let m = new Main();