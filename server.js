// 1. Importando os módulos necessários
const express = require('express');
const cors = require('cors');

// 2. Inicializando a aplicação Express
const app = express();
const PORT = process.env.PORT || 3000; // A porta que o servidor vai ouvir

// 3. Configurando os middlewares
app.use(cors()); // Permite requisições de outras origens (nosso frontend)
app.use(express.json()); // Permite que o servidor entenda JSON no corpo das requisições
app.use(express.static('public')); // Serve arquivos estáticos da pasta 'public' (nosso frontend)

// 4. "Banco de Dados" em memória
let produtos = [
    { id: 1, nome: 'Notebook Gamer', preco: 4500.00, quantidade: 10 },
    { id: 2, nome: 'Mouse sem Fio', preco: 150.50, quantidade: 50 },
    { id: 3, nome: 'Teclado Mecânico', preco: 350.00, quantidade: 25 }
];
let proximoId = 4; // Para gerar IDs únicos para novos produtos

// 5. Definindo as Rotas da API (os "endpoints")

// ROTA GET: Obter todos os produtos (Read)
app.get('/api/produtos', (req, res) => {
    res.json(produtos); // Retorna a lista de produtos como JSON
});

// ROTA POST: Criar um novo produto (Create)
app.post('/api/produtos', (req, res) => {
    const { nome, preco, quantidade } = req.body; // Pega os dados do corpo da requisição

    if (!nome || !preco || !quantidade) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
    }

    const novoProduto = {
        id: proximoId++,
        nome,
        preco: parseFloat(preco),
        quantidade: parseInt(quantidade)
    };

    produtos.push(novoProduto);
    res.status(201).json(novoProduto); // Retorna o produto criado com status 201 (Created)
});

// ROTA PUT: Atualizar um produto existente (Update)
app.put('/api/produtos/:id', (req, res) => {
    const { id } = req.params; // Pega o ID da URL
    const { nome, preco, quantidade } = req.body;

    const indexProduto = produtos.findIndex(p => p.id == id);

    if (indexProduto === -1) {
        return res.status(404).json({ message: 'Produto não encontrado!' });
    }

    produtos[indexProduto] = { ...produtos[indexProduto], nome, preco: parseFloat(preco), quantidade: parseInt(quantidade) };
    res.json(produtos[indexProduto]); // Retorna o produto atualizado
});

// ROTA DELETE: Deletar um produto (Delete)
app.delete('/api/produtos/:id', (req, res) => {
    const { id } = req.params;
    produtos = produtos.filter(p => p.id != id);
    res.status(204).send(); // Retorna status 204 (No Content) que indica sucesso sem corpo de resposta
});

// 6. Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor SG-Stock rodando na porta ${PORT}`);
});