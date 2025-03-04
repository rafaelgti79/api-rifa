import repoRifas from "../repositories/repository.rifas.js";

async function Listar(name) {
    
    const rifas = await repoRifas.Listar(name);
        
    return rifas;
}

async function ListarNumero(numero) {
    
    const viveiros = await repoRifas.ListarNumero(numero);
        
    return viveiros;
}

async function ListarViveiros(id) {
    
    const viveiros = await repoRifas.ListarViveiros(id);
        
    return viveiros;
}

async function Inserir(id, numero){
    
    const viveiros = await repoRifas.Inserir(id, numero);

    return viveiros;

}

async function Mover(numero){
    
    const viveiros = await repoRifas.Mover(numero);

    return viveiros;

}

async function criarTabela(nomeTabela, valor, quantidadeNumeros){
    
    

    const Rifas = await repoRifas.criarTabela(nomeTabela, valor, quantidadeNumeros);

    return Rifas;
 
}





export default { Inserir, Listar, criarTabela, ListarViveiros, Mover, ListarNumero };