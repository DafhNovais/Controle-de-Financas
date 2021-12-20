<h1 align="center"> PIGDIN </h1>

![Logo_Pigdin](https://user-images.githubusercontent.com/64945452/146771105-d3175657-92c3-4ca2-9107-0fac6b199cb8.png)

<a href="https://github.com/DafhNovais/Controle-de-Financas/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/DafhNovais/Controle-de-Financas?style=for-the-badge"></a>
<a href="https://github.com/DafhNovais/Controle-de-Financas/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/DafhNovais/Controle-de-Financas?style=for-the-badge"></a>

## Descrição

O PIGDIN é uma aplicação web para controle de finanças. O sistema permite que os usuários cadastrem as saídas e entradas de dinheiro, bem como a visualização do saldo resultante de cada uma dessas operações. 

## :hammer: Funcionalidades

- `Funcionalidade 1`: Cadastro de entrada e saída de dinheiro através de um formulário
- `Funcionalidade 2`: Visualização do saldo total
- `Funcionalidade 3`: Edição de qualquer um dos campos do lançamento
- `Funcionalidade 4`: Deleção de qualquer lançamento

<div align="center">
  <img src="https://user-images.githubusercontent.com/64945452/146772973-cd000152-208c-475a-adae-f6ffd39ee66b.gif" alt="Demonstração" width="360" height="255"> <img        src="https://user-images.githubusercontent.com/64945452/146775122-c778df3e-b895-4466-913d-1f83dd08c551.gif" alt="Demonstração" width="360" height="255">
</div>

<div>
  <h3>Protótipos feitos com o Figma: </h3>
  
  <a href="https://www.figma.com/proto/hKOUclaCnRiLhF4BBDvZV9/PigDin-%2F-TC-Tech-Talents?page-id=10%3A103&node-id=10%3A104&viewport=241%2C48%2C0.11&scaling=min-zoom&starting-point-node-id=10%3A104">Desktop</a>
  <a href="https://www.figma.com/proto/hKOUclaCnRiLhF4BBDvZV9/PigDin-%2F-TC-Tech-Talents?page-id=0%3A1&node-id=2%3A2&viewport=241%2C48%2C0.22&scaling=scale-down&starting-point-node-id=2%3A2">Mobile</a>
</div>

## Tecnologias utilizadas
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" width="60" height="60"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" width="60" height="60"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="60" height="60"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" width="60" height="60"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" width="60" height="60"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" width="60" height="60">

## 📁 Acesso ao projeto
Você pode acessar o <a href="https://github.com/DafhNovais/Controle-de-Financas/find/main">código fonte</a> do projeto inicial. 

## 🛠️ Como contribuir para o projeto?

* É necessário ter o Node.js e o MYSQL instalados na sua máquina.
* Você vai precisar clonar o repositório localmente na sua máquina.
* Criar um banco de dados MYSQL com o nome PIG_DIN. 
  Obs.: a tabela será criada automaticamente quando o servidor for inicializado.

Após os passos anteriores, abra o projeto no seu editor de preferência. Vá até a pasta `infrastructure` e acesse o arquivo `connection.js` . Preencha os campos host, port, user e password com as informações referente ao seu banco de dados.
```
const connection = mysql.createConnection({
    host: '',
    port: '',
    user: '',
    password: '',
    database: 'PIG_DIN'
});
```

Abra o terminal dentro da pasta `api` e execute o comando abaixo para instalar todas as dependências:
```
npm install
```

Para inicializar o servidor:
```
npm start
```
## Documentação da API

Nesse projeto, o Postman foi utilizado para testar todos os verbos da API com as suas respectivas rotas.
Você pode acessar a documentação diretamente da plataforma: <br>
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/1ccd393af2d19d0448cb) <br>
Ou, se preferir, clicando <a href="https://documenter.getpostman.com/view/18712901/UVRBkkrt#7351781e-077f-4828-9d1a-b1a9f1c46094">aqui</a> para ser redirecionado para uma página no navegador.

## Autores

| [<img src="https://user-images.githubusercontent.com/64945452/146818042-2c32939e-f9cc-433d-9b86-da3f0b831cb5.png" width=115><br><sub>Anna Carolina</sub>](https://github.com/anncarln) | [<img src="https://user-images.githubusercontent.com/64945452/146817895-ef4019bd-e3eb-4382-8af6-38d5d9b5c417.png" width=115><br><sub>Dafhne Novais</sub>](https://github.com/DafhNovais) | [<img src="https://user-images.githubusercontent.com/64945452/146817948-e4437b16-9afb-452f-920d-add34a5ff4b0.png" width=115><br><sub>Heidys Yuranis</sub>](https://github.com/zheidys1) | [<img src="https://media-exp1.licdn.com/dms/image/C4D03AQGYWTWE9zm1yg/profile-displayphoto-shrink_800_800/0/1599254607797?e=1645660800&v=beta&t=YpvTy6_dmvg5X01_tC7guJp7c-v806DYimMdTt31ydY" width=115><br><sub>Maurílio Marques</sub>](https://github.com/MAURILIOMARQUES) | [<img src="https://media-exp1.licdn.com/dms/image/C4E03AQHsKlzLvC_WpA/profile-displayphoto-shrink_800_800/0/1589665159239?e=1645660800&v=beta&t=qm-csu-CfUJ86eVNDWxBhak_h2KM4Bf-9_G1kjYqRLg" width=115><br><sub>Linda Ramirez</sub>](https://github.com/lindamoramirez) | [<img src="https://avatars.githubusercontent.com/u/93003236?v=4" width=115><br><sub>Melyssa Rojas</sub>](https://github.com/DOO-MelyssaRojas) | 
| :---: | :---: | :---: | :---: | :---: | :---:
