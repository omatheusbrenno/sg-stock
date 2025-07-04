# 📦 SG-Stock

## 📚 Sobre o Projeto

O **SG-Stock** foi desenvolvido como parte da disciplina *Imersão Profissional* do curso de **Análise e Desenvolvimento de Sistemas** – UNIASSELVI.

O objetivo foi aplicar, na prática, os conhecimentos adquiridos ao longo do curso, criando uma solução web simples e funcional para um problema recorrente em pequenas empresas: a **gestão de estoque**.

O sistema permite realizar operações básicas de **CRUD (Create, Read, Update, Delete)** sobre produtos, por meio de uma **API REST** no backend e uma **interface web intuitiva** no frontend.

---

## ✨ Tecnologias Utilizadas

### 🔙 Backend
- **Node.js** — ambiente de execução JavaScript server-side.
- **Express.js** — framework web minimalista para criação da API REST.
- **CORS** — middleware que permite comunicação entre frontend e backend.

### 🎨 Frontend
- **HTML5** — estrutura e conteúdo da página.
- **CSS3** — estilização e layout visual.
- **JavaScript** — lógica de interação e comunicação com a API.

### 🗂️ Versionamento
- **Git** — controle de versões do código.
- **GitHub** — hospedagem e colaboração do repositório.

### ☁️ Deployment
- **Vercel** — plataforma para deploy gratuito e rápido da aplicação.

---

## 🚀 Como Executar o Projeto

### ✅ Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:
- [Node.js](https://nodejs.org/)
- npm (vem junto com o Node.js)

---

### 🔧 Backend (API)

Clone o repositório:

```bash
git clone https://github.com/omatheusbrenno/sg-stock.git

cd sg-stock

npm install

node server.js
```

> Você verá a mensagem: Servidor SG-Stock rodando na porta 3000.

### 🌐 Frontend (Interface do Usuário)

Com o servidor rodando, abra seu navegador e acesse: [http://localhost:3000](http://localhost:3000)

> Pronto! Você verá a interface web do SG-Stock para gerenciar seus produtos.

## 🛠️ Estrutura do Projeto

```bash
sg-stock/
├── public/
│   ├── index.html       # Estrutura da página web
│   ├── style.css        # Estilização da interface
│   └── script.js        # Lógica e interação com a API
├── server.js            # API REST com Express.js
├── package.json         # Dependências e scripts do Node.js
├── .gitignore           # Arquivos ignorados pelo Git
└── node_modules/        # Pacotes instalados (ignorado no Git)
```

## 💻 Funcionalidades da Aplicação

- 📋 *Listar Produtos (Read):* Exibe todos os produtos cadastrados.

- ➕ *Cadastrar Novo Produto (Create):* Formulário para adicionar novos itens.

- ✏️ *Editar Produto (Update):* Permite alterar os dados de um produto.

- ❌ *Deletar Produto (Delete):* Remove um item específico do estoque.
