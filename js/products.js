function loadProducts(productsToLoad) {
    const products = productsToLoad || JSON.parse(localStorage.getItem("products")) || [];
    const catalog = document.getElementById("product-catalog");
    catalog.innerHTML = ''; // Clear any existing content
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Preço: ${product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        `;
        catalog.appendChild(productDiv);
    });
}

function addProduct() {
    const name = document.getElementById("product-name").value;
    const description = document.getElementById("product-description").value;
    let price = document.getElementById("product-price").value;
    const image = document.getElementById("product-image").value;

    // Convertendo o preço para o formato adequado
    price = parseFloat(price.replace(",", "."));

    if (isNaN(price)) {
        alert("Preço inválido. Por favor, insira um número válido.");
        return;
    }

    const products = JSON.parse(localStorage.getItem("products")) || [];
    const newProduct = {
        id: products.length ? products[products.length - 1].id + 1 : 1,
        name: name,
        description: description,
        price: price,
        image: image,
        available: true
    };

    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));
    alert("Produto cadastrado com sucesso!");
    window.location.href = "index.html";
}

function searchProducts() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
    loadProducts(filteredProducts);
}
