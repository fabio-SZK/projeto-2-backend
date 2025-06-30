<h1 align="center">KiLogin</h1> 
Consiste na elaboração do 2º projeto da matéria de Web Back-End.

# Alunos: 

2576147 - Álefh Trindade Luz De Lima

2576198 - Fábio Massashi Suzuki

2576201 – Gabriel Batistela Da Silva

# 🚀Tecnologias utilizadas:
✔️Front-End:
- ``HTML``
- ``CSS``
- ``JavaScript``

✔️Back-End:
- ``Node.js``
- ``Express.js``
- ``Handlebars``
  
✔️Banco de dados:
- ``MongoDB``

# 📦​Instalação

## Instalar as dependências:
```bash
npm init -y

npm install express express-session mongoose connect-mongo bcryptjs hbs express-handlebars dotenv cookie-parser
```
## Inicializar o server:
```bash
npm start 
```
### Ou
```bash
node app.js 
```

# 🔗Funcionalidades
- ✅ Cadastro de novos usuários com confirmação de senha

- ✅ Criptografia de senha com bcrypt

- ✅ Login de usuários cadastrados

- ✅ Sessão de usuário usando cookies e express-session

- ✅ Logout seguro

- ✅ Área protegida acessível apenas para usuários logados

- ✅ Exibição da lista de usuários cadastrados na área protegida

- ✅ Estrutura de templates usando Express Handlebars (HBS)

- ✅ Mensagens de erro dinâmicas exibidas na interface (ex: login ou cadastro inválidos)

- ✅ Validação de formulário (senhas iguais, campos obrigatórios)

- ✅ Integração com MongoDB para persistência de usuários

- ✅ Variáveis de ambiente com suporte a .env

- ✅ Estrutura de código organizada em controllers, models e views

# 🏗Estrutura do Projeto
```text
├── controllers/ # Lógica das rotas (ex: login, registro, área protegida)
│ └── authController.js
│
├── models/ # Modelos do Mongoose
│ └── User.js
│
├── node_modules/ # Dependências instaladas
│
├── public/
│ ├── css/
│ │ └── style.css # Estilos da aplicação
│
├── routes/ # Definição das rotas
│
├── views/ # Templates Handlebars
│ ├── layouts/
│ │ └── main.hbs # Layout principal
│ ├── home.hbs # Página inicial
│ ├── login.hbs # Tela de login
│ ├── register.hbs # Tela de cadastro
│ └── dashboard.hbs # Área protegida com lista de usuários
│
├── .env # Variáveis de ambiente
├── app.js # Arquivo principal da aplicação
├── package.json # Configuração do projeto e scripts npm
├── package-lock.json # Controle de versões das dependências
└── README.md # Documentação do projeto
```
