let resultado = 0;

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
    if(divisa1==1 && divisa2==2){
        resultado=cantidad*23.81
        
    }
    mostrarDisplay(resultado);
}

function mostrarDisplay(display){
    document.querySelector('#input').value = display;
}