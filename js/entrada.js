function letraEntrada(letraIngresada) {
    const pattern = new RegExp('^[A-Z\u00d1]+$', 'i');
    if(!pattern.test(letraIngresada) || letraIngresada.length > 1) {
        return false;
    } else {
        return true;
    }
}

function PalabraEntrada(letraIngresada) {
    const pattern = new RegExp('^[A-Z\u00d1]+$', 'i');
    if(!pattern.test(letraIngresada)) {    
        return false;
    } else {
        return true;
    }
}