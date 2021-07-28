# Projeto Módulo 4 - API 
### Tecnologias utilizadas
![NODE](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![EXPRESS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) ![SQLLITE](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white) ![HEROKUAPP](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white) ![SEQUELIZE](https://camo.githubusercontent.com/0a4aff6e255d17730282bc6b00ed6c73a3f09bca95365a4f5d73462106f8a789/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d53657175656c697a6526636f6c6f723d323232323232266c6f676f3d53657175656c697a65266c6f676f436f6c6f723d353242304537266c6162656c3d) ![MARKDOWN](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white) 

# Sobre o projeto

![Screenshot](https://uploaddeimagens.com.br/images/003/354/672/full/Amarelo_e_Preto_Topografia_Abstrato_T%C3%A1tico_Banner_para_Twitch.png?1627406948)
Projeto do fim do módulo 4 da Resilia Educação com intuito de aprendizagem em REST API, para que saibamos aplicar corretamente no mundo corporativo.

### * **Instalação das dependências** 

Instalar o Express - Framework utilizado para criar as rotas da aplicação.

```jsx
npm install express
```

Instalar o Nodemon - Ele é uma ferramenta que ajuda a desenvolver aplicativos baseados em node.js

```jsx
npm install nodemon --save-dev
```

Instalar o Sequelize - Sequelize é um Node.js ORM baseado em promessa para Postgres, MySQL, MariaDB, SQLite e Microsoft SQL Server.

```jsx
 npm install --save sequelize
```
Instalar o SQLite3 - É uma biblioteca em linguagem C que implementa um banco de dados SQL embutido.

```jsx
npm install sqlite3
```

Instalar Body-parser - Serve para trabalhar com os dados vindo do seu cliente

```jsx
npm install body-parser
```


# ** Rotas possíveis 
- Comidas 🍔
- Bebidas Quentes 🍹
- Bebidas Frias 🍻
- Musicas 🎶
- Funcionários 🙋

## Como executar o projeto

*inicie instalando e executando as dependências

**determine as rotas possíveis do projeto;

Monte o local onde as rotas ficarão guardadas ([https://www.oracle.com/br/database/what-is-database/](https://www.oracle.com/br/database/what-is-database/))

monte as entidades das possíveis rotas e arne-as na pasta models

```jsx
const {Sequelize, DataTypes} = require('sequelize');
const database = require('../database/data.js');

const SuaEntidade = database.define('SuaEntidade', {

    ID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    }
}
```

na pasta controllers execute as funções de cada requisição (GET, POST, PATCH e DELETE)

Crie o arquivo routes armazenado em uma pasta routers

Peça requisição do Router no arquivo routes.js

```jsx
const express = require('express');
```

```jsx
const roteador = express.Router(); 
```

Exemplo da rota:

```jsx
roteador.get('/sua-rota', ControllerSuaRota.index);
```

Faça sua rota e execute a função respectiva do método na pasta Controller

Ao fazer todos os passos acima, execute o arquivo index

```jsx
node "caminho da pasta do index"
```
 
 # Autores
 
 #### Glauco Tolotto
 https://www.linkedin.com/in/glauco-tolotto/
 #### Bruna Wesselka Tardoque
 https://www.linkedin.com/in/bruna-wesselka-tardoque/
 #### Pedro Ronald Barbosa
 https://www.linkedin.com/in/pedro-ronald-barbosa/
 #### Junior Bertão
 https://www.linkedin.com/in/junior-bert%C3%A3o-5448481a5/
 #### Allan Lima
 https://www.linkedin.com/in/allanlima1/
