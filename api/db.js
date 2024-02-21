/**importando o mysql e criando a conexão com o banco criado no mysql workbench*/

import mysql from "mysql";

export const db = mysql.createConnection({

    host:"localhost",
    user: "root",
    password:"eliabe07",
    database:"crud"

});


