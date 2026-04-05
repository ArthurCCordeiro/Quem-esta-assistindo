// ========== FUNCIONALIDADE DE TEMA DARK/LIGHT MODE ==========

// Elementos do DOM
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const body = document.body;

// Verifica se há um tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');

// Aplica o tema salvo ou padrão (dark)
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeIcon.textContent = '☀️';
} else {
    body.classList.remove('light-mode');
    themeIcon.textContent = '🌙';
}

// Função para alternar o tema
function toggleTheme() {
    const isLightMode = body.classList.contains('light-mode');

    if (isLightMode) {
        // Muda para dark mode
        body.classList.remove('light-mode');
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    } else {
        // Muda para light mode
        body.classList.add('light-mode');
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    }
}

// Event listener para o botão de toggle
themeToggle.addEventListener('click', toggleTheme);

// ========== ANIMAÇÃO SUAVE DO BOTÃO ==========
themeToggle.addEventListener('mouseenter', () => {
    themeToggle.style.transform = 'scale(1.1)';
});

themeToggle.addEventListener('mouseleave', () => {
    themeToggle.style.transform = 'scale(1)';
});