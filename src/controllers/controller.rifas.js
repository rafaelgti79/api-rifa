import serviceRifa from "../services/service.rifas.js";


async function Listar(req, res) {

    const name = req.query.name;
    const rifas = await serviceRifa.Listar(name);

    res.status(200).json(rifas);
}

async function ListarNumero(req, res) {

    const numero = req.params.numero;
    const body = req.body;
    const rifas = await serviceRifa.ListarNumero(numero, body);

    res.status(200).json(rifas);
}

async function ListarViveiros(req, res) {

    const id = req.query.id;
    const viveiros = await serviceRifa.ListarViveiros(id);

    res.status(200).json(viveiros);
}


async function Inserir(req, res){

    const  id  = req.id;
    const {numero} = req.body;

    const viveiros = await serviceRifa.Inserir(numero);

    res.status(201).json(id, viveiros);

}

async function Mover(req, res){

    const numero = req.params.numero;
    

    const viveiros = await serviceRifa.Mover(numero);

    res.status(201).json(viveiros);

}

async function criarTabela(req, res){

    const { nomeTabela, valor, quantidadeNumeros
    } = req.body;

  const Rifas = await serviceRifa.criarTabela(nomeTabela, valor, quantidadeNumeros);

    res.status(201).json(Rifas);

}



export default {Inserir, Listar, criarTabela, ListarViveiros, Mover, ListarNumero};