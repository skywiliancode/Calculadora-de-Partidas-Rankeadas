function calcSaldoRank(quantidadeDeVitorias, quantidadeDeDerrotas){
  return quantidadeDeVitorias - quantidadeDeDerrotas
}
let nivel = ''
let saldoDorank = calcSaldoRank(103,2)

if(saldoDorank < 10){
  nivel = 'Ferro'
}else if((saldoDorank > 10) && (saldoDorank <= 20)){
  nivel = 'Bronze'
}else if((saldoDorank > 20) && (saldoDorank <= 50)){
  nivel = 'Prata'
}else if((saldoDorank > 50) && (saldoDorank <= 80)){
  nivel = 'Ouro'
}else if((saldoDorank > 80) && (saldoDorank <= 90)){
  nivel = 'Diamante'
}else if((saldoDorank > 90) && (saldoDorank <= 100)){
  nivel = 'Lendário'
}else{
  nivel = 'Imortal'
}

console.log(`O Herói tem de saldo de ${saldoDorank} está no nível de ${nivel}`)