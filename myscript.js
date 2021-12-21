//Funzione che genera un array di 16 numeri che indica la posizione delle bombe
function generatoreBombe ( difficolta ){
    let arrayBombe = [];

    while( arrayBombe.length < 16 ){
        
            let bomba = Math.floor( Math.random()*difficolta+1);

            if ( !arrayBombe.includes( bomba ) ){
                arrayBombe.push( bomba );
            }
    }
    return arrayBombe
} 
 
// creo una funzione generica per far si che selezionando i box si colorino 
function selettoreBox(elenco, difficolta, creaBox){
    let bombeGenerate = generatoreBombe(difficolta);
    console.log(bombeGenerate);
    let contaClick = 0;
    let esito = document.getElementById("defeat");


    for (let i = 0; i < elenco.length; i++) {
        
        elenco[i].addEventListener("click", function(){

            const valoreCella = parseInt(this.textContent);
            console.log(valoreCella);
            if(!bombeGenerate.includes(valoreCella)){
                this.classList.add("ms_select-box");
                contaClick++;
            }else{
                this.classList.add("ms_bomb-box");
                console.log(contaClick);
                esito.innerHTML += "Game Over! Score:" + contaClick;
            }
        })
    }

}


//faccio scegliere all'utente il livello di difficoltà alla quale vuole giocare
let pulsanteScelta = document.getElementById("levelchoice");

//al click compare la griglia
pulsanteScelta.addEventListener("click", function(){
    let difficoltaScelta = document.getElementById("difficult");
    let difficolta = difficoltaScelta.value;

    //inserisco una griglia nell'html basandomi sul value della difficoltà cliccata
    let campoMinatoBox = "";

    for (i=0; i<difficolta; i++){
        campoMinatoBox += `
        <div id="box-${i + 1}" class="col- ms_selector ms_minesweeper-box-${difficolta} d-flex justify-content-center align-items-center">
            ${i + 1}          
        </div>
        `;
        
    }
    
    
    //dichiaro dove voglio che questi box vengano creati
    const creaBox = document.getElementById("minesweeper-grid");
    creaBox.innerHTML = campoMinatoBox;

    //creo un array che contenga tutti miei box selezionandoli per la classe
    let elencoBox = document.getElementsByClassName("ms_selector");

    //faccio partire la funzione per colorarle al click
    selettoreBox(elencoBox, difficolta, creaBox);

});
