// URL da nossa API backend
const API_URL = 'http://localhost:3000/api/produtos';

// Elementos do DOM
const form = document.getElementById('form-produto');
const produtoIdInput = document.getElementById('produto-id');
const nomeInput = document.getElementById('nome');
const precoInput = document.getElementById('preco');
const quantidadeInput = document.getElementById('quantidade');
const tabelaCorpo = document.querySelector('#tabela-produtos tbody');
const btnCancelar = document.getElementById('btn-cancelar');

// Função para buscar os produtos da API e renderizar na tabela
async function fetchProdutos() {
    try {
        const response = await fetch(API_URL);
        const produtos = await response.json();

        tabelaCorpo.innerHTML = ''; // Limpa a tabela antes de preencher

        produtos.forEach(produto => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${produto.nome}</td>
                <td>R$ ${produto.preco.toFixed(2)}</td>
                <td>${produto.quantidade}</td>
                <td>
                    <button class="btn-editar" onclick="editarProduto(${produto.id}, '${produto.nome}', ${produto.preco}, ${produto.quantidade})">Editar</button>
                    <button class="btn-deletar" onclick="deletarProduto(${produto.id})">Deletar</button>
                </td>
            `;
            tabelaCorpo.appendChild(tr);
        });
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
}

// Função para lidar com o envio do formulário (Criar ou Atualizar)
form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita o recarregamento da página

    const id = produtoIdInput.value;
    const produto = {
        nome: nomeInput.value,
        preco: precoInput.value,
        quantidade: quantidadeInput.value,
    };

    if (id) {
        // Se tem ID, atualiza (PUT)
        await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(produto)
        });
    } else {
        // Se não tem ID, cria (POST)
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(produto)
        });
    }

    resetarFormulario();
    fetchProdutos();
});

// Função para preparar o formulário para edição
function editarProduto(id, nome, preco, quantidade) {
    produtoIdInput.value = id;
    nomeInput.value = nome;
    precoInput.value = preco;
    quantidadeInput.value = quantidade;
    btnCancelar.style.display = 'inline-block'; // Mostra o botão de cancelar
    window.scrollTo(0, 0); // Rola a página para o topo
}

// Função para deletar um produto
async function deletarProduto(id) {
    if (confirm('Tem certeza que deseja deletar este produto?')) {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        fetchProdutos();
    }
}

// Função para limpar o formulário
function resetarFormulario() {
    form.reset();
    produtoIdInput.value = '';
    btnCancelar.style.display = 'none';
}

// Event listener para o botão de cancelar edição
btnCancelar.addEventListener('click', resetarFormulario);

// Carrega os produtos ao iniciar a página
document.addEventListener('DOMContentLoaded', fetchProdutos);