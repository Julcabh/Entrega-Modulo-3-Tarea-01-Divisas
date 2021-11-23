let resultado = 0;

botonConvertir();

function botonConvertir(){
    let btnConvertir = document.getElementById('btnConvertir');
    btnConvertir.addEventListener('click',Convertir);
}

function Convertir(){
    let cantidad = parseFloat(document.getElementById('inputCantidad').value);
    let divisa1 = Number(document.getElementById("divisa1").value);
    let divisa2 = Number(document.getElementById("divisa2").value);
    //alert(divisa1+divisa2);
    
    switch(cantidad){
        case(cantidad < 0):
            alert("ingrese un valor valido")
        break
    }

    if(divisa1==1){
        switch(divisa2){
            case 1:
                mostrarDisplay(cantidad);
                break;
            case 2:
                resultado=cantidad*20.76;
                mostrarDisplay(resultado);
                break
            case 3:
                resultado=cantidad*3955;
                mostrarDisplay(resultado);
                break
            case 4:
                resultado=cantidad*0.88;
                mostrarDisplay(resultado);
                break
            case 5:
                resultado=cantidad*0.74;
                mostrarDisplay(resultado);
                break
        }
    }
    if(divisa1==2){
        switch(divisa2){
            case 1:
                resultado=cantidad*0.048;
                mostrarDisplay(resultado);
                break;
            case 2:
                mostrarDisplay(cantidad);
                break
            case 3:
                resultado=cantidad*190.45;
                mostrarDisplay(resultado);
                break
            case 4:
                resultado=cantidad*0.042;
                mostrarDisplay(resultado);
                break
            case 5:
                resultado=cantidad*0.036;
                mostrarDisplay(resultado);
                break
        }
    }
    if(divisa1==3){
        switch(divisa2){
            case 1:
                resultado=cantidad*0.00026;
                mostrarDisplay(resultado);
                break;
            case 2:
                resultado=cantidad*0.0053;
                mostrarDisplay(resultado);
                break
            case 3:
                mostrarDisplay(cantidad);
                break
            case 4:
                resultado=cantidad*0.00022;
                mostrarDisplay(resultado);
                break
            case 5:
                resultado=cantidad*0.00019;
                mostrarDisplay(resultado);
                break
        }
    }
    if(divisa1==4){
        switch(divisa2){
            case 1:
                resultado=cantidad*1.14;
                mostrarDisplay(resultado);
                break;
            case 2:
                resultado=cantidad*23.55;
                mostrarDisplay(resultado);
                break
            case 3:
                resultado=cantidad*4486.90;
                mostrarDisplay(resultado);
                break
            case 4:
                mostrarDisplay(cantidad);
                break
            case 5:
                resultado=cantidad*0.84;
                mostrarDisplay(resultado);
                break
        }
    }
    if(divisa1==5){
        switch(divisa2){
            case 1:
                resultado=cantidad*1.35;
                mostrarDisplay(resultado);
                break;
            case 2:
                resultado=cantidad*27.98;
                mostrarDisplay(resultado);
                break
            case 3:
                resultado=cantidad*5330.64;
                mostrarDisplay(resultado);
                break
            case 4:
                resultado=cantidad*1.19;
                mostrarDisplay(resultado);
                break
            case 5:
                mostrarDisplay(cantidad);
                break
        }
    }
    
}

function mostrarDisplay(display){
    document.querySelector('#input').value = display;
    //alert(resultado);
}