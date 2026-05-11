document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            const isLight = body.classList.contains('light-theme');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
    }

    // Form Validation Logic
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            // Reset errors
            document.querySelectorAll('.error').forEach(el => el.style.display = 'none');

            if (!name.value.trim()) {
                document.getElementById('nameError').style.display = 'block');
                isValid = false;
            }

            if (!email.value.trim() || !email.value.includes('@')) {
                document.getElementById('emailError').style.display = 'block');
                isValid = false;
            }

            if (!message.value.trim()) {
                document.getElementById('messageError').style.display = 'block');
                isValid = false;
            }

            if (isValid) {
                alert('Obrigado pelo contato, ' + name.value + '! Mensagem enviada com sucesso (simulação).');
                contactForm.reset();
            }
        });
    }
});
