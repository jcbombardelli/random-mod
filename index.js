

//laço que se repita rand vezes
//dentro com validacao de existencia da condição (mod)

const numeroDeRepeticoes = (Math.floor(Math.random() * 999999999))+1
for (let v = 0; v < numeroDeRepeticoes; v++) {

    //Geração de massa de dados de exemplo
    const tamanhoDaLista = (Math.floor(Math.random() * 100))+1; //varia entre 1 e 100
    let arrayDeInteiros = [];

    for (let index = 0; index < tamanhoDaLista; index++) { //percorrendo o laco entre
        arrayDeInteiros[index] = Math.floor(Math.random() * 10)+1 //para cada iteração, eu coloco no indice do arrayDeinteiros um novo randomico   
    }

    //Aleatório vindo do contrato
    const aletorioDoContrato = Math.floor(Math.random() * 100000000)

    let resultadoDoMod = aletorioDoContrato % arrayDeInteiros.length // sempre maior ou igual a zero e menor que tamanhoDaLista -1

    // let achou = false;
    // if(resultadoDoMod >= 0 && resultadoDoMod < arrayDeInteiros.length -1){
    //     achou = true;
    // }

    let achou = true;
    if(resultadoDoMod < 0 || resultadoDoMod > arrayDeInteiros.length -1){
        achou = false;
        console.log(`Tamanho da Lista ${tamanhoDaLista}`)
        console.log(`Aleatorio do contrato ${aletorioDoContrato}`)
        console.log(`Resultado ${resultadoDoMod}`)
        console.log(`Resultado do if é: ${achou}`)
    }

    
}







// function random_item(items) {
//     return items[Math.floor(Math.random() * items.length)];
//  }
//  var items = [254, 45, 212, 365, 2543];
//  console.log(random_item(items));