// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  const langPT = document.getElementById('lang-pt');
  const langEN = document.getElementById('lang-en');
  const themeToggle = document.getElementById('theme-toggle');

  // Troca de idioma
  langPT.addEventListener('click', () => {
      document.documentElement.lang = 'pt';
      document.getElementById('nav-servicos').textContent = 'Serviços';
      document.getElementById('nav-quem-somos').textContent = 'Quem Somos';
      document.getElementById('nav-vantagens').textContent = 'Vantagens';
      document.getElementById('nav-planos').textContent = 'Planos';
      document.getElementById('hero-title').textContent = 'Aumente seus resultados com um site profissional bem posicionado';
      document.getElementById('hero-description').textContent = 'Nós criamos sites, landing pages e aplicativos que contam histórias que refletem a personalidade única da sua marca, além de posicionarmos o seu negócio como uma referência no setor.';
      document.getElementById('hero-button').textContent = 'Fale com a gente';
      document.getElementById('feature-landing').textContent = 'Landing Page';
      document.getElementById('feature-sites').textContent = 'Sites';
      document.getElementById('feature-lojas').textContent = 'Lojas Virtuais';
      document.getElementById('feature-aplicativos').textContent = 'Aplicativos';
      document.getElementById('feature-identidade').textContent = 'Identidade Visual';
      document.getElementById('feature-logotipo').textContent = 'Logotipo + 3D';
      document.getElementById('feature-cartao').textContent = 'Cartão Digital';
  });

  langEN.addEventListener('click', () => {
      document.documentElement.lang = 'en';
      document.getElementById('nav-servicos').textContent = 'Services';
      document.getElementById('nav-quem-somos').textContent = 'About Us';
      document.getElementById('nav-vantagens').textContent = 'Advantages';
      document.getElementById('nav-planos').textContent = 'Plans';
      document.getElementById('hero-title').textContent = 'Increase your results with a well-positioned professional website';
      document.getElementById('hero-description').textContent = 'We create websites, landing pages, and apps that tell stories reflecting the unique personality of your brand, in addition to positioning your business as a reference in the sector.';
      document.getElementById('hero-button').textContent = 'Contact us';
      document.getElementById('feature-landing').textContent = 'Landing Page';
      document.getElementById('feature-sites').textContent = 'Websites';
      document.getElementById('feature-lojas').textContent = 'E-commerce';
      document.getElementById('feature-aplicativos').textContent = 'Apps';
      document.getElementById('feature-identidade').textContent = 'Visual Identity';
      document.getElementById('feature-logotipo').textContent = 'Logo + 3D';
      document.getElementById('feature-cartao').textContent = 'Digital Card';
  });

  // Troca de tema
  themeToggle.addEventListener('change', () => {
      if (themeToggle.checked) {
          document.documentElement.setAttribute('data-theme', 'light');
      } else {
          document.documentElement.removeAttribute('data-theme');
      }
  });
});