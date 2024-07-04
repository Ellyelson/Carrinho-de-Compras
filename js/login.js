function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        sessionStorage.setItem('loggedIn', true);
        alert("Login realizado com sucesso!");
        window.location.href = "index.html";
    } else {
        alert("Email ou senha incorretos!");
    }
}

function registerUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(u => u.email === email);

    if (existingUser) {
        alert("Usuário já registrado com este email!");
        return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registrado com sucesso!");
    window.location.href = "login.html";
}
