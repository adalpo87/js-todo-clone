$(function(){
    // 1)Creare un array con stringhe

var listaToDo = [
    "Finire il lavoro al computer",
    "Portare fuori il cane",
    "Fare la spesa"
];
// 2)Ciclo for dell'array per stampare a video gli elementi facendo un append dentro ul

for (i=0; i < listaToDo.length; i++){
    var daFare = listaToDo[i];
    

    var strHtml = '<li><p>' + daFare + '</p><i class="far fa-trash-alt"></i></li>';
    //usare append --> $(spazio dove verrà inserita la stringa).append(inserisco ciò che voglio aggiungere nel html)                                         
    $('.list').append(strHtml);

};

// 3)Al click del cestino eliminare il parent

$(document).on('click', '.fa-trash-alt', function(){
 //partendo in riferimento da this (quindi la classe di i), risale al primo genitore e lo rimuove
    $(this).parent().remove();
})

// aggiungo una funzione che tramite keyup mi aggiunge una frase tra le cose da fare

$('main input').keyup(function(event){
    // tasto enter = 13
    var daFare = $(this).val().trim();
    if(event.which === 13){
        var strHtml = '<li><p>' + daFare + '</p><i class="far fa-trash-alt"></i></li>';
        $('.list').append(strHtml);
        $(this).val("");
    }

})

});
