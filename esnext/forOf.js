// for of 
for ( let letra of "Cod3r" ) {
    console.log(letra)
}

// Exemplos com arrays:
const assutosEcma = ['Map', 'Set', 'Promisse']
// in busca os indices
for ( let i in assutosEcma ){
    console.log(i);
}
// of os valores
for ( let assunto of assutosEcma ){
    console.log(assunto);
}

// Exemplo com Map:
const assuntosMap = new Map ([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promisse', { abordado: false }]
])

// Percorrendo Map
for (let assunto of assuntosMap) {
    console.log(assunto);
}

// Percorrendo keys do Map
for (let chave of assuntosMap.keys()){
    console.log(chave);
}

// Percorrendo keys do Map
for (let valor of assuntosMap.values()){
    console.log(valor);
}

// Chave e valor:
for( let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl);
}

// Chave e valor simplificado:
for( let [ch, vl] of assuntosMap){
    console.log(ch, vl);
}

// Percorrendo Set
const s = new Set(['a', 'b', 'c'])

for (let letra of s){
    console.log(letra);
}