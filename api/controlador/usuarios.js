/**importando o banco configurado em db.js */
import {db} from "../db.js";

export const getUsers = (_, res) => {

    /**consultando a tabela usuarios da inha base de dados */
    const q = "SELECT * FROM usuarios";

    /**consultando se existe algum erro ou não */
    db.query(q, (err, data) => {

        /**se houver algum erro vou retornar uma mensagem de erro */
        if (err) return res.json(err);

        /**caso não ocorra algum erro vou retornar a listagem dos usuários do banco */
        return res.status(200).json(data)

    });

};
