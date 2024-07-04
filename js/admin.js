function loginAdmin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Administrador' && password === '123') {
        sessionStorage.setItem('adminLoggedIn', true);
        alert("Login de administrador realizado com sucesso!");
        window.location.href = 'products.html';
    } else {
        alert('Usuário ou senha incorretos!');
    }
}

function logoutAdmin() {
    sessionStorage.removeItem('adminLoggedIn');
    window.location.href = 'login-admin.html';
}

function verifyAdminLogin() {
    const currentPage = window.location.pathname.split('/').pop();

    // Verificar se estamos na página de cadastro de produtos
    if (currentPage === 'products.html') {
        const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
        if (!isLoggedIn) {
            window.location.href = 'login-admin.html';
        }
    }
}