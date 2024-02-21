import express from "express"; /** express é framework que fornece recursos para a criação de aplicações web e APIs rápidas e flexíveis */
import userRoutes from "./rotas/usuarios.js";/** importando uma rota */
import cors from "cors"; /** biblioteca cors que habilita o compartilhamento de recursos entre origens diferentes. Ele é um middleware o que significa que ele é um software que fica entre o S.O e os Aplicativos que são executados nele. Ele permite a comunicação e o gerenciamneto de dados entre diferentes aplicativos através de APIs, servvidores Web, altenticação e etc... */

const app = express();/**esta linha representa o aplicativo web em si. este objeto tem vários métodos e propriedades para configurar e executar o aplicativo. */

/** esse código usa outro mddleware chamado express.json. ele permite que o aplicativo receba e envie dados no formato json. O json é uma forma comum de representar dados estruturados numa aplicação web */
app.use(express.json()); // estou dizendo que vou representar os dados no formato json.

/** esse código ativa o compartilhamento de recursos entre origens diferentes para todas as rotas */
app.use(cors());

/// aqui estou ralizando o gerenciando e comunicação entre os aplicativos que são executados no S.O. Aqui estou dizendo ao express que todas as requisições que começam com "/" devem ser direcionadas para as rotas que foram criadas em usuarios.js em na pasta 'rotas'
app.use("/", userRoutes);

/** escutando os servidor na porta 8800. o aplicativo irá escutar e responder requisições nessa porta */
app.listen(8800);

/**o arquivo index.js cria um aplicativo web usando o framework Express, importa o arquivo usuarios.js que contém as rotas para lidar com as requisições dos usuários, usa os módulos express.json e cors para habilitar o formato JSON e o compartilhamento de recursos entre origens diferentes, e inicia o servidor web na porta 8800. O nome index.js é uma convenção comum para indicar que esse é o arquivo principal do projeto */