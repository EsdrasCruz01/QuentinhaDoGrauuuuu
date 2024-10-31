let cart = []; // Cria um array vazio para armazenar os itens do carrinho
let total = 0; // Inicializa a variável total com zero

// Função para adicionar um item ao carrinho
function addToCart(item, price) {
    cart.push({ item, price }); // Adiciona um objeto com o nome e preço do item ao carrinho
    total += price; // Atualiza o total somando o preço do item
    updateCart(); // Chama a função para atualizar a visualização do carrinho
}

// Função para remover um item do carrinho
function removeFromCart(index) {
    total -= cart[index].price; // Subtrai o preço do item removido do total
    cart.splice(index, 1); // Remove o item do carrinho pelo índice
    updateCart(); // Chama a função para atualizar a visualização do carrinho
}

// Função para atualizar a visualização do carrinho
function updateCart() {
    const cartItems = document.getElementById('cart-items'); // Obtém o elemento da lista de itens do carrinho
    cartItems.innerHTML = ''; // Limpa a lista de itens do carrinho

    // Percorre cada item no carrinho
    cart.forEach((cartItem, index) => {
        const li = document.createElement('li'); // Cria um novo elemento de lista
        li.textContent = `${cartItem.item} - R$ ${cartItem.price.toFixed(2)}`; // Define o texto do item com seu preço formatado
        const removeButton = document.createElement('button'); // Cria um botão de remover
        removeButton.textContent = 'Remover'; // Define o texto do botão
        removeButton.onclick = () => removeFromCart(index); // Define a função a ser chamada ao clicar no botão
        li.appendChild(removeButton); // Adiciona o botão ao item da lista
        cartItems.appendChild(li); // Adiciona o item da lista ao elemento da lista do carrinho
    });

    // Atualiza o total exibido
    document.getElementById('total-price').textContent = `Total: R$ ${total.toFixed(2)}`; // Exibe o total formatado
}
     