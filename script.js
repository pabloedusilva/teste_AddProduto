document.getElementById('add-product').addEventListener('click', function() {
    const productsList = document.getElementById('products-list');

    // Criação de um novo produto
    const newProduct = document.createElement('div');
    newProduct.classList.add('product');
    
    newProduct.innerHTML = `
        <h3>Produto</h3>
        <p>Descrição do produto</p>
        <p>Preço: R$ 99,99</p>
    `;

    // Adicionar o novo produto à lista
    productsList.appendChild(newProduct);
});
