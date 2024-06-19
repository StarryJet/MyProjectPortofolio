// JavaScript for handling password visibility (optional)
const passwordInput = document.querySelector('input[type="password"]');
const showPasswordBtn = document.createElement('span');
showPasswordBtn.textContent = 'Show';
showPasswordBtn.style.cursor = 'pointer';
showPasswordBtn.style.marginLeft = '10px';
showPasswordBtn.style.fontSize = '14px';
passwordInput.parentNode.insertBefore(showPasswordBtn, passwordInput.nextSibling);

showPasswordBtn.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showPasswordBtn.textContent = 'Hide';
  } else {
    passwordInput.type = 'password';
    showPasswordBtn.textContent = 'Show';
  }
});