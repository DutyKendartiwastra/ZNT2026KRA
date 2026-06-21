document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMessage');

    errorMsg.style.display = "none";

    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (data.success) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            
            alert('Login berhasil! Redirect ke WebGIS...');
            window.location.href = "index.html";   // Ganti dengan nama file WebGIS kamu
        } else {
            errorMsg.textContent = data.message || "Username atau password salah";
            errorMsg.style.display = "block";
        }
    } catch (error) {
        console.error(error);
        errorMsg.textContent = "Tidak bisa terhubung ke server. Pastikan backend sedang berjalan.";
        errorMsg.style.display = "block";
    }
});