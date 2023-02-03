function singara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var totalSingaras = singara(200);
console.log('Eating:',totalSingaras) ;