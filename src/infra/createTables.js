const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database('./database.db');


const MUSICAS_SCHEMA = `CREATE TABLE IF NOT EXISTS "Musicas" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "Musica" VARCHAR(50),
    "Cantor" VARCHAR(20),
    "Estilo" VARCHAR(20)
);`

function criaTabelaMusicas() {
    db.run(MUSICAS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de Musicas");
    });
}

db.serialize(() => {
    criaTabelaMusicas();
    populaTabelaMusicas();
  });


// const ISERT_MUSICA = `INSERT INTO Musicas (ID, Musica, Cantor, Estilo)
//     VALUES(1, 'Ordinary Man', 'Ozzy Osborn', 'Rock'),
//         (2, 'Balão Magico', 'Turma do Balão Magico', 'Musica Infatil');`



// function populaTabelaMusicas() {
//     db.run(ISERT_MUSICA, (error) => {
//         if (error) console.log("Erro ao popular tabela de Musicas");
//     });
// }
