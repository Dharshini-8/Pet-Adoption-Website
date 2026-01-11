document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (response.ok) {
            window.location.href = 'index.html'; // Redirect to home page on success
        } else {
            document.getElementById('loginMessage').textContent = data.message;
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('loginMessage').textContent = 'An error occurred. Please try again later.';
    }
});
