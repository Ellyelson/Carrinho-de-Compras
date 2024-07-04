function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartSummary = document.getElementById("cart-summary");

    if (cart.length === 0) {
        cartSummary.innerHTML = "<p>Seu carrinho está vazio.</p>";
        return;
    }

    let total = 0;
    cartSummary.innerHTML = "<ul>";
    cart.forEach(product => {
        total += product.price * product.quantity;
        cartSummary.innerHTML += `
            <li>
                <img src="${product.image}" alt="${product.name}">
                <div class="cart-details">
                    <p><strong>Nome do Produto:</strong> ${product.name}</p>
                    <p><strong>Quantidade:</strong> ${product.quantity}</p>
                    <p><strong>Preço:</strong> ${product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    <p><strong>Total:</strong> ${(product.price * product.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </div>
            </li>
        `;
    });
    cartSummary.innerHTML += `</ul><p>Total: ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>`;
}

function addToCart(productId) {
    const loggedIn = sessionStorage.getItem('loggedIn');
    if (!loggedIn) {
        alert("Você precisa estar logado para adicionar itens ao carrinho.");
        window.location.href = "login.html";
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const product = products.find(p => p.id === productId);
    const productInCart = cart.find(p => p.id === productId);

    if (productInCart) {
        productInCart.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Produto adicionado ao carrinho!");
}

function finalizePurchase() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Seu carrinho está vazio.");
        return;
    }

    // Envio de Notificação
    alert("Compra finalizada!");

    // Limpar carrinho
    localStorage.removeItem("cart");
    loadCart();
}
