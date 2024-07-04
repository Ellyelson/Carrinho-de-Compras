document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("product-catalog")) {
        loadProducts();
    }

    if (document.getElementById("cart-summary")) {
        loadCart();
    }

    if (document.getElementById("add-product-form")) {
        document.getElementById("add-product-form").addEventListener("submit", function (event) {
            event.preventDefault();
            addProduct();
        });
    }

    if (document.getElementById("login-form")) {
        document.getElementById("login-form").addEventListener("submit", function (event) {
            event.preventDefault();
            loginUser();
        });
    }

    if (document.getElementById("register-form")) {
        document.getElementById("register-form").addEventListener("submit", function (event) {
            event.preventDefault();
            registerUser();
        });
    }

    if (document.getElementById("checkout-button")) {
        document.getElementById("checkout-button").addEventListener("click", function () {
            finalizePurchase();
        });
    }

    if (document.getElementById("search-bar")) {
        document.getElementById("search-bar").addEventListener("input", function () {
            searchProducts();
        });
    }

    if (document.getElementById("admin-login-form")) {
        document.getElementById("admin-login-form").addEventListener("submit", function (event) {
            event.preventDefault();
            loginAdmin();
        });
    }

    if (document.getElementById("logout-button")) {
        document.getElementById("logout-button").addEventListener("click", function () {
            logoutAdmin();
        });
    }

    verifyAdminLogin();
});
