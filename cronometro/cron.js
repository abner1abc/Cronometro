//"use strict"

alert('Bem vindo :)');

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 0001; //quantos milésimos equivalem 1 segundo...
var cron;

//
function start(){

    cron = setInterval (() => {timer(); }, tempo);
}

//
function pause(){
    clearInterval(cron);
}

//
function stop(){
    clearInterval(cron);
    hh = 00;
    mm = 00;
    ss = 00;

    document.getElementById('counter'). innerText = '00:00:00';
}

//
function timer(){

    ss++;

    if (ss == 60){
        ss = 0;
        mm++;
    }

    if (mm == 60){
        mm = 0;
        hh++;
    }


    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0'+ mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById('counter'). innerText = format;
}