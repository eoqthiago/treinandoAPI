

export function semaforo (cor) {
    let msg = '';
    if(cor == 'verde'){
        msg = 'pode passar'
    } else if (cor == 'amarelo' || cor == 'vermelho'){
        msg = 'aguarde'
    } else {
        msg = 'invalido';
    }
    return msg;
}


export function diasemana (dia) {
    let msg = '';
   if(dia == 0){
       msg = 'domingo'
   }else{
       msg = 'invalido'
   }
    return msg;
}

export function fatorial (n) {
    let result = n;
    for (let i = 1; i < n; i++) {
        result *= i
    }
    return result
}

export function par (limite) {
    let y = 0;
    let result = [];
    for (let i = 0; i <= limite; i++) {
        if ( i % 2 === 0){
            result[y] = i;
            y++
            
        }
    }
    return result ;
}

