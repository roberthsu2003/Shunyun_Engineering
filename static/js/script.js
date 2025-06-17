document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');

    const checkInputs = () => {
        if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
            loginButton.disabled = false;
        } else {
            loginButton.disabled = true;
        }
    };

    usernameInput.addEventListener('input', checkInputs);
    passwordInput.addEventListener('input', checkInputs);

    loginButton.addEventListener('click', () => {
        if (!loginButton.disabled) {
            alert('登入成功！'); // 這裡可以替換成實際的登入邏輯
            // 例如：window.location.href = '/dashboard';
        }
    });

    // Initial check in case inputs are pre-filled by browser
    checkInputs();
});