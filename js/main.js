function calcular(){
    pE = document.getElementById('pEnganche');
    pF = document.getElementById('pFinanciar');
    pM = document.getElementById('pMensual');
    valor = document.getElementById('valorAuto').value;
    pagoTotalM = document.getElementById('pagoM').value;
    let res;

    pE.innerHTML = "$" + (valor * .30);
    res = (valor - (valor *.30));

    if(pagoTotalM == 12){
        pF.innerHTML = "$" + (res * 1.125);
        pM.innerHTML = "$" + ((res * 1.125)/pagoTotalM).toFixed(2);

    }else if (pagoTotalM == 18){
        pF.innerHTML = "$" + (res * 1.172);
        pM.innerHTML = "$" + ((res * 1.172)/pagoTotalM).toFixed(2);

    }else if(pagoTotalM == 24){
        pF.innerHTML = "$" + (res * 1.21);
        pM.innerHTML = "$" + ((res * 1.21)/pagoTotalM).toFixed(2);

    }else if(pagoTotalM == 36){
        pF.innerHTML = "$" + (res * 1.26);
        pM.innerHTML = "$" + ((res * 1.26)/pagoTotalM).toFixed(2);

    }else if(pagoTotalM == 48){
        pF.innerHTML = "$" + (res * 1.45);
        pM.innerHTML = "$" + ((res * 1.45)/pagoTotalM).toFixed(2);

    }

    

}

function limpiar(){
    valor = document.getElementById('valorAuto');
    pE = document.getElementById('pEnganche');
    pF = document.getElementById('pFinanciar');
    pM = document.getElementById('pMensual');

    valor.value = "";
    pE.innerHTML = "";
    pF.innerHTML = "";
    pM.innerHTML = "";

}





