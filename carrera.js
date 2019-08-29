
export default class Carrera{
    
    constructor(div){
        this._div = div; 

    }
    
    lanzamientoDado(){

        var row = this._div.insertRow(-1);
        var cell = row.insertCell(0);

        var vector = [0]

        for(var i=1;vector[0]<=100;i++){
            var dado = Number(Math.trunc(Math.random()*6)+1);
            if(dado==1){
                vector[0] +=1;
            }
            else if(dado==2){   
                vector[0] +=1;
            }
            else if(dado==3){
                vector[0]+=2;
            }
            else if(dado==4){
                vector[0]+=2;
            }
            else if(dado==5){
                vector[0]+=2;
            }else if(dado==6){
                vector[0]+=3;
            }

        }

        cell.innerHTML = vector;
    }


}


// C1.correr();
//C1.posición();