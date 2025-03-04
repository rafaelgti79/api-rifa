import { query } from "../database/sqlite.js";
import { db } from "../database/sqlite.js";

async function Listar() {

   
    
    let sql = "select * from viveiros ";

   

    const rifas = await query(sql);

    return rifas;
}
async function ListarViveiros() {

    
    let sql = "select * from viveiros ";
    sql = sql + "order by id"

    const viveiros = await query(sql);

    return viveiros;
}
        

async function Inserir(id) {

    let sql = `insert into viveiros (id) values(?)
    `;

       
     const viveiros = await query(sql, [id]);

    return viveiros[0];

}

const criarTabela = (nomeTabela, valor, quantidadeNumeros) => {
    // serialize serve para executar um comando por vez
    db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS ${nomeTabela} (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
           valor REAL,
          numero INTEGER
            
        );
      `);

      const arrayNumeros = [];
    for (let i = 1; i <= quantidadeNumeros; i++) {
    arrayNumeros.push(i);
  }

       
     for (let i = 0; i <= quantidadeNumeros; i++) {   
    db.run(`insert into  ${nomeTabela} (valor, numero) values(?,?); 
    ` ,[valor, arrayNumeros[i]]);
    }
    
});

const Rifas = ([nomeTabela, valor, quantidadeNumeros]);

return Rifas[0];
}       

export default { Inserir, Listar, criarTabela, ListarViveiros}  

