//funzione per far restituire solo il testo interno
function cellaclick (){
    const valorecella = parseInt(this.textContent);
    this.classList.add("ms_select-box");
    console.log(valorecella);
}

// creo una funzione generica per far si che selezionando i box si colorino 
function selettoreBox(elenco){
    for (let i = 0; i < elenco.length; i++) {
        
        elenco[i].addEventListener("click", cellaclick);
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
    selettoreBox(elencoBox);

});

