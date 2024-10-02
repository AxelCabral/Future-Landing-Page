// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('rocket-video');
  
  // Impedir que o vídeo seja pausado
  video.addEventListener('pause', function(event) {
    video.play(); // Força o vídeo a continuar tocando
  });
  
  // Prevenir que o clique no vídeo também pause
  video.addEventListener('click', function(event) {
    event.preventDefault(); // Remove a ação padrão de clicar para pausar
  });
  
  const langPT = document.getElementById('lang-pt');
  const langEN = document.getElementById('lang-en');
  const langES = document.getElementById('lang-es');

  //Troca de tema
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const logo1 = document.getElementById('logo-1');
  const logo2 = document.getElementById('logo-2');

  themeToggle.addEventListener('change', function() {
    if (themeToggle.checked) {
      // Ativar o modo claro
      body.classList.add('light-mode');
      logo1.src = 'assets/logo-v2.png';
      logo2.src = 'assets/logo-v2.png';
    } else {
      // Ativar o modo escuro
      body.classList.remove('light-mode');
      logo1.src = 'assets/logo.png';
      logo2.src = 'assets/logo.png';
    }
  });

   // Troca de idioma
   langPT.addEventListener('click', () => {
        document.documentElement.lang = 'pt';
        document.getElementById('services').textContent = 'Serviços';
        document.getElementById('about-us').textContent = 'Quem somos';
        document.getElementById('advantages').textContent = 'Vantagens';
        document.getElementById('plans').textContent = 'Planos';
        document.getElementById('hero-title').textContent = 'Aumente seus resultados com um site profissional bem posicionado';
        document.getElementById('hero-description').textContent = 'Nós criamos sites, landing pages e aplicativos que contam histórias e que refletem a personalidade única da sua marca, além de posicionarmos o seu negócio como uma referência no setor.';
        document.getElementById('button-text').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.png" alt="WhatsApp icon">Pedir orçamento';
        document.getElementById('button-text-2').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.png" alt="WhatsApp icon">Pedir orçamento';
        document.getElementById('button-text-3').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.png" alt="WhatsApp icon">Pedir orçamento';
        document.getElementById('button-text-4').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.png" alt="WhatsApp icon">Pedir orçamento';
        document.getElementById('button-text-5').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.png" alt="WhatsApp icon">Pedir orçamento';
        document.getElementById('advantage-1').textContent = 'Visibilidade';
        document.getElementById('advantage-2').textContent = 'Personalidade';
        document.getElementById('advantage-3').textContent = 'Conexão';
        document.getElementById('advantage-4').textContent = 'Engajamento';
        document.getElementById('advantage-5').textContent = 'Performance';
        document.getElementById('advantage-6').textContent = 'Resposividade';
        document.getElementById('advantage-7').textContent = 'Conversão';
        document.getElementById('advantage-8').textContent = 'Resultados';
        document.getElementById('advantage-9').textContent = 'Confiança';
        document.getElementById('advantage-10').textContent = 'Visibilidade';
        document.getElementById('advantage-11').textContent = 'Personalidade';
        document.getElementById('advantage-12').textContent = 'Conexão';
        document.getElementById('advantage-13').textContent = 'Engajamento';
        document.getElementById('advantage-14').textContent = 'Performance';
        document.getElementById('advantage-15').textContent = 'Resposividade';
        document.getElementById('advantage-16').textContent = 'Conversão';
        document.getElementById('advantage-17').textContent = 'Resultados';
        document.getElementById('advantage-18').textContent = 'Confiança';
        document.getElementById('services-title').textContent = 'Soluções inovadoras e personalizadas para o seu negócio!';
        document.getElementById('service-1').textContent = 'Landing Pages';
        document.getElementById('service-2').textContent = 'Site Portfólio';
        document.getElementById('service-3').textContent = 'Site Institucional';
        document.getElementById('service-4').textContent = 'Site de Captura de Lead';
        document.getElementById('service-5').textContent = 'Lojas Virtuais';
        document.getElementById('service-6').textContent = 'Aplicativos';
        document.getElementById('service-7').textContent = 'Branding';
        document.getElementById('service-9').textContent = 'Cartão Digital';
        document.getElementById('service-1-description').textContent = 'Uma Landing Page bem projetada é essencial para captar a atenção do seu público-alvo e convertê-lo em clientes. Oferecemos páginas focadas em resultados, com design otimizado e chamadas para ação que aumentam suas chances de sucesso em campanhas de marketing.';
        document.getElementById('service-2-description').textContent = 'Mostre o melhor do seu trabalho com um site portfólio profissional. Criamos layouts modernos e funcionais que destacam seus projetos de maneira atraente e organizada, valorizando sua expertise e ajudando você a fechar novos negócios.';
        document.getElementById('service-3-description').textContent = 'Fortaleça a presença digital da sua empresa com um site institucional que transmita credibilidade e confiança. Desenvolvemos sites que reforçam sua marca, destacam sua história e serviços, e conectam você ao público de forma clara e objetiva.';
        document.getElementById('service-4-description').textContent = 'Aumente sua base de clientes com sites especializados em captura de leads. Criamos páginas estratégicas com formulários e conteúdos atraentes que estimulam seus visitantes a deixarem seus dados, gerando novas oportunidades de negócios.';
        document.getElementById('service-5-description').textContent = 'Maximize suas vendas online com uma loja virtual robusta, fácil de navegar e segura. Nós desenvolvemos e customizamos e-commerces que oferecem uma experiência de compra agradável para seus clientes, aumentando a taxa de conversão.';
        document.getElementById('service-6-description').textContent = 'Tenha uma solução sob medida na palma da mão dos seus clientes. Criamos aplicativos funcionais e intuitivos que ampliam a presença da sua marca e facilitam a interação com seu público, seja para vendas, serviços ou engajamento.';
        document.getElementById('service-7-description').textContent = 'Sua marca começa com um branding marcante. Desenvolvemos logotipos, cores e elementos visuais que representam sua empresa de forma única, atraindo atenção e criando uma conexão emocional com seus clientes.';
        document.getElementById('service-9-description').textContent = 'Modernize sua rede de contatos com um cartão digital personalizado. Ele pode ser compartilhado digitalmente, facilitando a apresentação do seu negócio e de seus serviços em qualquer lugar, a qualquer momento.';
        document.getElementById('advantages-title').textContent = 'Um site profissional trará inúmeras vantagens para o seu negócio';
        document.getElementById('advantage-title-1').textContent = 'Faturamento';
        document.getElementById('advantage-title-2').textContent = 'Visibilidade';
        document.getElementById('advantage-title-3').textContent = 'Credibilidade';
        document.getElementById('advantage-title-4').textContent = 'Posicionamento';
        document.getElementById('advantage-title-5').textContent = 'Autoridade';
        document.getElementById('advantage-title-6').textContent = 'Conexão';
        document.getElementById('advantage-description-1').textContent = 'Tenha mais um ponto de contato para atrair potenciais clientes, foque na conversão e aumente seu faturamento.';
        document.getElementById('advantage-description-2').textContent = 'Seja facilmente descoberto e atraia mais clientes e parceiros para o seu negócio.';
        document.getElementById('advantage-description-3').textContent = 'Demontre zelo e profissionalismo ao apresentar uma página feita por especialistas.';
        document.getElementById('advantage-description-4').textContent = 'Consolide o posicionamento da sua marca como referência no seu nicho e gere mais confiança no seu público.';
        document.getElementById('advantage-description-5').textContent = 'Mostre que você sabe do que está falando, apresente seus cases de sucesso e os problemas que você pode resolver.';
        document.getElementById('advantage-description-6').textContent = 'Proporcione uma experiência agradável adaptada para ser perfeitamente funcional em todos os dispositivos.';
        document.getElementById('second-info-title').textContent = 'Trabalhamos para entregar sites em alta performance';
        document.getElementById('second-info-description').textContent = '47% dos usuários, esperam, no máximo, 2 segundos até o carregamento da página. Com um desempenho de excelência, você atrai mais visitantes e eleva o nível da sua empresa no mercado.';
        document.getElementById('solutions-title').textContent = 'Soluções personalizadas para o seu negócio';
        document.getElementById('testimonials-title').textContent = 'O que nossos clientes dizem sobre nós';
        document.getElementById('testimonial-text-1').innerHTML = 'A Future Solutions foi fundamental para reestruturarmos nossa estratégia de marketing digital. Com a consultoria deles, identificamos falhas no nosso funil de vendas e otimizações necessárias nas campanhas pagas. Em pouco tempo, eles ajustaram nossos anúncios, resultando em um aumento de 50% no retorno sobre investimento. Além disso, criaram campanhas direcionadas que ampliaram nossa presença nas redes sociais e posicionaram a TecnoMax como uma referência em tecnologia no nosso nicho.<br/><br/>';
        document.getElementById('testimonial-text-2').textContent = 'O time da Future nos ajudou a redefinir nossa estratégia de branding e marketing digital. Com a expertise deles, desenvolvemos campanhas mais focadas em resultados e otimizamos nossa comunicação nas plataformas digitais. As consultorias frequentes e o acompanhamento próximo garantiram que nossas campanhas fossem eficientes e totalmente alinhadas ao nosso público-alvo. Em três meses, nossa visibilidade online triplicou e as campanhas geraram um aumento de 35% nas interações. Fica minha recomendação!';
        document.getElementById('testimonial-text-3').innerHTML = 'Precisávamos de uma estratégia digital mais robusta para alavancar nossos lançamentos, e a Future entregou exatamente o que buscávamos. Com as consultorias regulares, eles nos ajudaram a otimizar campanhas no Google e redes sociais, além de desenvolverem landing pages altamente eficazes para captação de leads. O resultado foi um aumento significativo na taxa de conversão e um crescimento expressivo no número de leads qualificados, impulsionando nosso lançamento com grande sucesso.<br/><br/>';
        document.getElementById('testimonial-company-1').textContent = 'CEO da TecnoMax Solutions';
        document.getElementById('testimonial-company-2').textContent = 'Diretora de Marketing da BellaVita';
        document.getElementById('testimonial-company-3').textContent = 'CMO da StartUp Pro';
        document.getElementById('purpose-text').innerHTML = 'A future não é apenas uma agência; é um laboratório de inovação, onde cada projeto é uma aposta na criação de um mundo melhor. Com uma equipe talentosa e apaixonada, a Future trabalha para transformar ideias em avanços tangíveis, seja na tecnologia, na sustentabilidade ou nas artes.<br/><br/>Na Future, o futuro é agora. É um convite para todos aqueles que acreditam que podemos criar algo extraordinário juntos. Cada cliente, parceiro e colaborador é um co-criador desse futuro, construindo um legado de impacto positivo que transcende gerações.';
        document.getElementById('purpose-affirmation-1-b').textContent = 'Comunicar';
        document.getElementById('purpose-affirmation-2-b').textContent = 'Conectar';
        document.getElementById('purpose-affirmation-3-b').textContent = 'Transformar';
        document.getElementById('purpose-affirmation-1-a').textContent = 'ideias.';
        document.getElementById('purpose-affirmation-2-a').textContent = 'marcas.';
        document.getElementById('purpose-affirmation-3-a').textContent = 'ideias.';
        document.getElementById('faq-title').textContent = 'Perguntas frequentes';
        document.getElementById('faq-question-1').textContent = 'Qual é o prazo de entrega do site?';
        document.getElementById('faq-question-2').textContent = 'Quais são as formas de pagamento?';
        document.getElementById('faq-question-3').textContent = 'Preciso contratar um serviço de hospedagem?';
        document.getElementById('faq-question-4').textContent = 'Meu site vai aparecer no Google?';
        document.getElementById('faq-question-5').textContent = 'Meu site vai funcionar bem em smartphones e tablet?';
        document.getElementById('faq-question-6').textContent = 'Como faço para alimentar o site ou trocar algum elemento?';
        document.getElementById('faq-question-7').textContent = 'Se eu tiver algum problema com o site depois dos 30 dias de acompanhamento, posso entrar em contato?';
        document.getElementById('faq-question-8').textContent = 'Meu site será feito com template pronto?';
        document.getElementById('faq-question-9').textContent = 'Qual a diferença do site feito pela Agência Future para um site gratuito?';
        document.getElementById('faq-answer-1').textContent = 'O prazo de entrega do site varia de acordo com a complexidade do projeto, mas geralmente em torno de 30 dias úteis, você já terá seu site no ar com tudo preparado para alavancar suas conversões.';
        document.getElementById('faq-answer-2').textContent = 'As formas de pagamento aceitas são transferência bancária, transferência PIX, cartão de crédito e parcelamento.';
        document.getElementById('faq-answer-3').textContent = 'Não é necessário, com a Future nós cuidamos de toda parte de infraestrutura para você, tirando a sua preocupação com domínios, hospedagem, tudo isso está incluso no seu projeto conosco.';
        document.getElementById('faq-answer-4').textContent = 'Sim, seu site será otimizado para motores de busca, como o Google, mas o processo de indexação pode levar algum tempo.';
        document.getElementById('faq-answer-5').textContent = 'Sim, todos os sites são desenvolvidos para serem responsivos e funcionarem perfeitamente em dispositivos móveis.';
        document.getElementById('faq-answer-6').textContent = 'Cada projeto tem suas características únicas, você pode contraram o painel de edições, uma plataforma para gerenciar os conteúdos do seu site, ou pode contratar um pacote de acompanhamento conosco, onde cuidamos de todas as atualizações personalizando do seu jeito!';
        document.getElementById('faq-answer-7').textContent = 'Sim, mesmo após o período de acompanhamento, você pode entrar em contato com o suporte para resolver eventuais problemas.';
        document.getElementById('faq-answer-8').textContent = 'Não, o site será desenvolvido sob medida, de acordo com as suas necessidades e preferências.';
        document.getElementById('faq-answer-9').textContent = 'Sites feitos pela Agência Future são personalizados e profissionais, garantindo maior desempenho e flexibilidade em comparação a plataformas gratuitas.';
        document.getElementById('footer-text').textContent = 'Olhar para o futuro é ser o arquiteto do amanhã, construindo com coragem e persistência as bases para uma jornada grandiosa.';
        document.getElementById('footer-nav-1').textContent = 'Menu';
        document.getElementById('footer-nav-2').textContent = 'Suporte';
        document.getElementById('footer-nav-1-text').textContent = 'Serviços';
        document.getElementById('footer-nav-2-text').textContent = 'Quem somos';
        document.getElementById('footer-nav-3-text').textContent = 'Vantagens';
        document.getElementById('footer-nav-4-text').textContent = 'Planos';
        document.getElementById('footer-nav-5-text').textContent = 'Suporte';
        document.getElementById('footer-nav-6-text').textContent = 'Serviço 24h';
        document.getElementById('footer-nav-7-text').textContent = 'Chat Rápido';
        document.getElementById('contact-title').textContent = 'Contate-nos';
        var placeholderText = document.getElementById('contact-text');
        placeholderText.placeholder = "Insira seu número";
        document.getElementById('copy-text').innerHTML = 'Copyright &copy; 2024 Future. Todos os direitos reservados à Agência <a href="https://www.instagram.com/future_digi" target="_blank"> Future Digital.</a>';
        document.getElementById('error-message').textContent = 'Número inválido, não esqueça do DDD!';
        document.getElementById('error-message-2').textContent = 'Número inválido! Insira um número válido.';
    });

    // Troca de idioma
    langEN.addEventListener('click', () => {
        document.documentElement.lang = 'en';
        document.getElementById('services').textContent = 'Services';
        document.getElementById('about-us').textContent = 'About Us';
        document.getElementById('advantages').textContent = 'Advantages';
        document.getElementById('plans').textContent = 'Plans';
        document.getElementById('hero-title').textContent = 'Boost your results with a well-positioned professional website';
        document.getElementById('hero-description').textContent = 'We create websites, landing pages, and apps that tell stories and reflect your brand\'s unique personality, positioning your business as a leader in your sector.';
        document.getElementById('button-text').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.png" alt="WhatsApp icon">Request a Quote';
        document.getElementById('button-text-2').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.png" alt="WhatsApp icon">Request a Quote';
        document.getElementById('button-text-3').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.png" alt="WhatsApp icon">Request a Quote';
        document.getElementById('button-text-4').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.png" alt="WhatsApp icon">Request a Quote';
        document.getElementById('button-text-5').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.png" alt="WhatsApp icon">Request a Quote';
        document.getElementById('advantage-1').textContent = 'Visibility';
        document.getElementById('advantage-2').textContent = 'Personality';
        document.getElementById('advantage-3').textContent = 'Connection';
        document.getElementById('advantage-4').textContent = 'Engagement';
        document.getElementById('advantage-5').textContent = 'Performance';
        document.getElementById('advantage-6').textContent = 'Responsiveness';
        document.getElementById('advantage-7').textContent = 'Conversion';
        document.getElementById('advantage-8').textContent = 'Results';
        document.getElementById('advantage-9').textContent = 'Trustworthiness';
        document.getElementById('advantage-10').textContent = 'Visibility';
        document.getElementById('advantage-11').textContent = 'Personality';
        document.getElementById('advantage-12').textContent = 'Connection';
        document.getElementById('advantage-13').textContent = 'Engagement';
        document.getElementById('advantage-14').textContent = 'Performance';
        document.getElementById('advantage-15').textContent = 'Responsiveness';
        document.getElementById('advantage-16').textContent = 'Conversion';
        document.getElementById('advantage-17').textContent = 'Results';
        document.getElementById('advantage-18').textContent = 'Trustworthiness';
        document.getElementById('services-title').textContent = 'Innovative and customized solutions for your business!';
        document.getElementById('service-1').textContent = 'Landing Pages';
        document.getElementById('service-2').textContent = 'Portfolio Website';
        document.getElementById('service-3').textContent = 'Corporate Website';
        document.getElementById('service-4').textContent = 'Lead Capture Website';
        document.getElementById('service-5').textContent = 'E-commerce';
        document.getElementById('service-6').textContent = 'Applications';
        document.getElementById('service-7').textContent = 'Branding';
        document.getElementById('service-9').textContent = 'Digital Business Card';
        document.getElementById('service-1-description').textContent = 'A well-designed landing page is essential to capture your target audience\'s attention and convert them into customers. We offer result-focused pages with optimized design and calls to action that increase your chances of success in digital marketing campaigns.';
        document.getElementById('service-2-description').textContent = 'Showcase the best of your work with a professional portfolio website. We create modern and functional layouts that highlight your projects in an attractive and organized manner, showcasing your expertise and helping you close new deals.';
        document.getElementById('service-3-description').textContent = 'Strengthen your company\'s digital presence with a corporate website that conveys credibility and trust. We develop sites that reinforce your brand, highlight your history and services, and connect you to your audience clearly and objectively.';
        document.getElementById('service-4-description').textContent = 'Grow your customer base with specialized lead capture websites. We create strategic pages with forms and engaging content that encourage your visitors to leave their information, generating new business opportunities.';
        document.getElementById('service-5-description').textContent = 'Maximize your online sales with a robust, easy-to-navigate, and secure virtual store. We develop and customize e-commerce platforms that provide a pleasant shopping experience for your customers, increasing the conversion rate.';
        document.getElementById('service-6-description').textContent = 'Have a tailored solution at your customers\' fingertips. We create functional and intuitive apps that expand your brand\'s presence and facilitate interaction with your audience, whether for sales, services, or engagement.';
        document.getElementById('service-7-description').textContent = 'Your brand starts with a striking visual identity. We develop logos, colors, and visual elements that uniquely represent your company, attracting attention and creating an emotional connection with your customers.';
        document.getElementById('service-9-description').textContent = 'Modernize your contact network with a personalized digital business card. It can be shared digitally, making it easy to present your business and services anywhere, anytime.';
        document.getElementById('advantages-title').textContent = 'A professional website will bring many benefits to your business';
        document.getElementById('advantage-title-1').textContent = 'Revenue';
        document.getElementById('advantage-title-2').textContent = 'Visibility';
        document.getElementById('advantage-title-3').textContent = 'Credibility';
        document.getElementById('advantage-title-4').textContent = 'Positioning';
        document.getElementById('advantage-title-5').textContent = 'Authority';
        document.getElementById('advantage-title-6').textContent = 'Connection';
        document.getElementById('advantage-description-1').textContent = 'Gain another point of contact to attract potential customers, focus on conversion, and increase your revenue.';
        document.getElementById('advantage-description-2').textContent = 'Be easily found and attract more customers and partners to your business.';
        document.getElementById('advantage-description-3').textContent = 'Show professionalism by presenting a page built by experts.';
        document.getElementById('advantage-description-4').textContent = 'Consolidate your brand\'s positioning as a reference in your niche and generate more trust with your audience.';
        document.getElementById('advantage-description-5').textContent = 'Showcase your expertise, share your success stories, and explain the problems you can solve.';
        document.getElementById('advantage-description-6').textContent = 'Provide a pleasant experience, perfectly functional across all devices.';
        document.getElementById('second-info-title').textContent = 'We work to deliver high-performance websites';
        document.getElementById('second-info-description').textContent = '47% of users expect a page to load within 2 seconds. With excellent performance, you’ll attract more visitors and elevate your company\'s market standing.';
        document.getElementById('solutions-title').textContent = 'Custom solutions for your business';
        document.getElementById('testimonials-title').textContent = 'What our clients say about us';
        document.getElementById('testimonial-text-1').innerHTML = 'Future Solutions was crucial in restructuring our digital marketing strategy. Their consulting services identified flaws in our sales funnel and necessary optimizations in our paid campaigns. Soon, they adjusted our ads, resulting in a 50% increase in return on investment. They also created targeted campaigns that expanded our social media presence and positioned TecnoMax as a tech leader in our niche.<br/><br/>';
        document.getElementById('testimonial-text-2').innerHTML = 'Future\'s team helped us redefine our branding and digital marketing strategy. Their expertise enabled us to develop result-oriented campaigns and optimize our communication on digital platforms. Their ongoing consultancy and close monitoring ensured our campaigns were efficient and fully aligned with our target audience. Within three months, our online visibility tripled, and the campaigns generated a 35% increase in engagement. Highly recommended!';
        document.getElementById('testimonial-text-3').innerHTML = 'We needed a more robust digital strategy for our product launches, and Future delivered exactly what we were looking for. With regular consulting, they helped us optimize campaigns on Google and social media, and developed highly effective landing pages for lead generation. The result was a significant increase in conversion rates and a notable rise in qualified leads, propelling our launch to great success.<br/><br/>';
        document.getElementById('testimonial-company-1').textContent = 'CEO of TecnoMax Solutions';
        document.getElementById('testimonial-company-2').textContent = 'Marketing Director at BellaVita';
        document.getElementById('testimonial-company-3').textContent = 'CMO of StartUp Pro';
        document.getElementById('purpose-text').innerHTML = 'Future is not just an agency; it\'s an innovation lab where each project is a bet on creating a better world. With a talented and passionate team, Future works to turn ideas into tangible advancements, whether in technology, sustainability, or the arts.<br/><br/>At Future, the future is now. It\'s an invitation for everyone who believes we can create something extraordinary together. Every client, partner, and collaborator is a co-creator of this future, building a legacy of positive impact that transcends generations.';
        document.getElementById('purpose-affirmation-1-b').textContent = 'Communicate';
        document.getElementById('purpose-affirmation-2-b').textContent = 'Connect';
        document.getElementById('purpose-affirmation-3-b').textContent = 'Transform';
        document.getElementById('purpose-affirmation-1-a').textContent = 'ideas.';
        document.getElementById('purpose-affirmation-2-a').textContent = 'brands.';
        document.getElementById('purpose-affirmation-3-a').textContent = 'ideas.';
        document.getElementById('faq-title').textContent = 'Frequently asked questions';
        document.getElementById('faq-question-1').textContent = 'What is the website delivery time?';
        document.getElementById('faq-question-2').textContent = 'What are the payment methods?';
        document.getElementById('faq-question-3').textContent = 'Do I need to hire a hosting service?';
        document.getElementById('faq-question-4').textContent = 'Will my website appear on Google?';
        document.getElementById('faq-question-5').textContent = 'Will my website work well on smartphones and tablets?';
        document.getElementById('faq-question-6').textContent = 'How can I update the site or change an element?';
        document.getElementById('faq-question-7').textContent = 'If I have a problem after 30 days of support, can I still contact you?';
        document.getElementById('faq-question-8').textContent = 'Will my website be made using a pre-made template?';
        document.getElementById('faq-question-9').textContent = 'What\'s the difference between a Future Agency website and a free website?';
        document.getElementById('faq-answer-1').textContent = 'The website delivery time varies depending on the project\'s complexity, but typically it will be live within 30 business days, ready to boost your conversions.';
        document.getElementById('faq-answer-2').textContent = 'Accepted payment methods are bank transfer, PIX transfer, credit card, and installment payments.';
        document.getElementById('faq-answer-3').textContent = 'No, Future handles all the infrastructure, including domains and hosting, so you don\'t need to worry about it.';
        document.getElementById('faq-answer-4').textContent = 'Yes, your site will be optimized for search engines like Google, but indexing may take some time.';
        document.getElementById('faq-answer-5').textContent = 'Yes, all websites are developed to be responsive and work perfectly on mobile devices.';
        document.getElementById('faq-answer-6').textContent = 'Each project is unique; you can opt for an editing panel to manage your site content, or you can hire a support package, where we handle all updates, personalizing everything to your liking!';
        document.getElementById('faq-answer-7').textContent = 'Yes, even after the support period, you can contact us for help with any issues.';
        document.getElementById('faq-answer-8').textContent = 'No, the site will be custom-made, tailored to your needs and preferences.';
        document.getElementById('faq-answer-9').textContent = 'Websites created by Future Agency are customized and professional, offering better performance and flexibility compared to free platforms.';
        document.getElementById('footer-text').textContent = 'Looking to the future means being the architect of tomorrow, building with courage and persistence the foundation for a grand journey.';
        document.getElementById('footer-nav-1').textContent = 'Menu';
        document.getElementById('footer-nav-2').textContent = 'Support';
        document.getElementById('footer-nav-1-text').textContent = 'Services';
        document.getElementById('footer-nav-2-text').textContent = 'About Us';
        document.getElementById('footer-nav-3-text').textContent = 'Advantages';
        document.getElementById('footer-nav-4-text').textContent = 'Plans';
        document.getElementById('footer-nav-5-text').textContent = 'Support';
        document.getElementById('footer-nav-6-text').textContent = '24h Service';
        document.getElementById('footer-nav-7-text').textContent = 'Quick Chat';
        document.getElementById('contact-title').textContent = 'Contact Us';
        var placeholderText = document.getElementById('contact-text');
        placeholderText.placeholder = "Enter your number";
        document.getElementById('copy-text').innerHTML = 'Copyright &copy; 2024 Future. All rights reserved to the Agency <a href="https://www.instagram.com/future_digi" target="_blank"> Future Digital.</a>';
        document.getElementById('error-message').textContent = 'Invalid Number! Use at least 12 digits.';
        document.getElementById('error-message-2').textContent = 'Invalid Number! please, type a valid number.';
    });

    // Troca de idioma para Espanhol
    langES.addEventListener('click', () => {
        document.documentElement.lang = 'es';
        document.getElementById('services').textContent = 'Servicios';
        document.getElementById('about-us').textContent = 'Sobre nosotros';
        document.getElementById('advantages').textContent = 'Ventajas';
        document.getElementById('plans').textContent = 'Planes';
        document.getElementById('hero-title').textContent = 'Impulsa tus resultados con un sitio web profesional bien posicionado';
        document.getElementById('hero-description').textContent = 'Creamos sitios web, landing pages y aplicaciones que cuentan historias y reflejan la personalidad única de tu marca, posicionando tu negocio como líder en su sector.';
        document.getElementById('button-text').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.png" alt="WhatsApp icon">Solicita una Cotización';
        document.getElementById('button-text-2').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.png" alt="WhatsApp icon">Solicita una Cotización';
        document.getElementById('button-text-3').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.png" alt="WhatsApp icon">Solicita una Cotización';
        document.getElementById('button-text-4').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.png" alt="WhatsApp icon">Solicita una Cotización';
        document.getElementById('button-text-5').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.png" alt="WhatsApp icon">Solicita una Cotización';
        document.getElementById('advantage-1').textContent = 'Visibilidad';
        document.getElementById('advantage-2').textContent = 'Personalidad';
        document.getElementById('advantage-3').textContent = 'Conexión';
        document.getElementById('advantage-4').textContent = 'Compromiso';
        document.getElementById('advantage-5').textContent = 'Rendimiento';
        document.getElementById('advantage-6').textContent = 'Adaptabilidad';
        document.getElementById('advantage-7').textContent = 'Conversión';
        document.getElementById('advantage-8').textContent = 'Resultados';
        document.getElementById('advantage-9').textContent = 'Confianza';
        document.getElementById('advantage-10').textContent = 'Visibilidad';
        document.getElementById('advantage-11').textContent = 'Personalidad';
        document.getElementById('advantage-12').textContent = 'Conexión';
        document.getElementById('advantage-13').textContent = 'Compromiso';
        document.getElementById('advantage-14').textContent = 'Rendimiento';
        document.getElementById('advantage-15').textContent = 'Adaptabilidad';
        document.getElementById('advantage-16').textContent = 'Conversión';
        document.getElementById('advantage-17').textContent = 'Resultados';
        document.getElementById('advantage-18').textContent = 'Confianza';
        document.getElementById('services-title').textContent = '¡Soluciones innovadoras y personalizadas para tu negocio!';
        document.getElementById('service-1').textContent = 'Landing Pages';
        document.getElementById('service-2').textContent = 'Sitio Web de Portafolio';
        document.getElementById('service-3').textContent = 'Sitio Web Institucional';
        document.getElementById('service-4').textContent = 'Sitio Web de Captura de Leads';
        document.getElementById('service-5').textContent = 'Tiendas Virtuales';
        document.getElementById('service-6').textContent = 'Aplicaciones';
        document.getElementById('service-7').textContent = 'Branding';
        document.getElementById('service-9').textContent = 'Tarjeta de Presentación Virtual';
        document.getElementById('service-1-description').textContent = 'Una página de aterrizaje bien diseñada es esencial para captar la atención de tu público objetivo y convertirlo en clientes. Ofrecemos páginas centradas en resultados, con un diseño optimizado y llamados a la acción que aumentan tus posibilidades de éxito en campañas de marketing digital.';
        document.getElementById('service-2-description').textContent = 'Muestra lo mejor de tu trabajo con un sitio web portafolio profesional. Creamos diseños modernos y funcionales que destacan tus proyectos de manera atractiva y organizada, valorando tu experiencia y ayudándote a cerrar nuevos negocios.';
        document.getElementById('service-3-description').textContent = 'Fortalece la presencia digital de tu empresa con un sitio web institucional que transmita credibilidad y confianza. Desarrollamos sitios que refuerzan tu marca, destacan tu historia y servicios, y te conectan con el público de forma clara y objetiva.';
        document.getElementById('service-4-description').textContent = 'Aumenta tu base de clientes con sitios especializados en captura de leads. Creamos páginas estratégicas con formularios y contenido atractivo que estimula a tus visitantes a dejar sus datos, generando nuevas oportunidades de negocio.';
        document.getElementById('service-5-description').textContent = 'Maximiza tus ventas en línea con una tienda virtual robusta, fácil de navegar y segura. Desarrollamos y personalizamos e-commerce que ofrecen una experiencia de compra agradable para tus clientes, aumentando la tasa de conversión.';
        document.getElementById('service-6-description').textContent = 'Ten una solución a medida en la palma de la mano de tus clientes. Creamos aplicaciones funcionales e intuitivas que amplían la presencia de tu marca y facilitan la interacción con tu público, ya sea para ventas, servicios o compromiso.';
        document.getElementById('service-7-description').textContent = 'Tu marca comienza con un branding impactante. Desarrollamos logotipos, colores y elementos visuales que representan tu empresa de manera única, atrayendo atención y creando una conexión emocional con tus clientes.';
        document.getElementById('service-9-description').textContent = 'Moderniza tu red de contactos con una tarjeta de presentación virtual personalizada. Se puede compartir digitalmente, facilitando la presentación de tu negocio y de tus servicios en cualquier lugar y en cualquier momento.';
        document.getElementById('advantages-title').textContent = 'Un sitio web profesional traerá muchos beneficios a tu negocio';
        document.getElementById('advantage-title-1').textContent = 'Ingresos';
        document.getElementById('advantage-title-2').textContent = 'Visibilidad';
        document.getElementById('advantage-title-3').textContent = 'Credibilidad';
        document.getElementById('advantage-title-4').textContent = 'Posicionamiento';
        document.getElementById('advantage-title-5').textContent = 'Autoridad';
        document.getElementById('advantage-title-6').textContent = 'Conexión';
        document.getElementById('advantage-description-1').textContent = 'Obtén otro punto de contacto para atraer clientes potenciales, enfocándote en la conversión y aumentando tus ingresos.';
        document.getElementById('advantage-description-2').textContent = 'Sé fácilmente encontrado y atrae más clientes y socios a tu negocio.';
        document.getElementById('advantage-description-3').textContent = 'Demuestra profesionalismo presentando una página creada por expertos.';
        document.getElementById('advantage-description-4').textContent = 'Consolida el posicionamiento de tu marca como una referencia en tu nicho y genera más confianza en tu audiencia.';
        document.getElementById('advantage-description-5').textContent = 'Muestra tu experiencia, comparte tus casos de éxito y explica los problemas que puedes resolver.';
        document.getElementById('advantage-description-6').textContent = 'Ofrece una experiencia agradable, perfectamente funcional en todos los dispositivos.';
        document.getElementById('second-info-title').textContent = 'Trabajamos para entregar sitios web de alto rendimiento';
        document.getElementById('second-info-description').textContent = 'El 47% de los usuarios esperan que una página cargue en 2 segundos. Con un excelente rendimiento, atraerás más visitantes y elevarás la posición de tu empresa en el mercado.';
        document.getElementById('solutions-title').textContent = 'Soluciones personalizadas para tu negocio';
        document.getElementById('testimonials-title').textContent = 'Lo que dicen nuestros clientes sobre nosotros';
        document.getElementById('testimonial-text-1').innerHTML = 'Future Solutions fue crucial en la reestructuración de nuestra estrategia de marketing digital. Sus servicios de consultoría identificaron fallas en nuestro embudo de ventas y optimizaciones necesarias en nuestras campañas pagas. Pronto ajustaron nuestros anuncios, lo que resultó en un aumento del 50% en el retorno de inversión. También crearon campañas dirigidas que ampliaron nuestra presencia en redes sociales y posicionaron a TecnoMax como líder tecnológico en nuestro nicho.<br/><br/>';
        document.getElementById('testimonial-text-2').innerHTML = 'El equipo de Future nos ayudó a redefinir nuestra estrategia de branding y marketing digital. Su experiencia nos permitió desarrollar campañas orientadas a resultados y optimizar nuestra comunicación en plataformas digitales. Su consultoría continua y su monitoreo cercano garantizaron que nuestras campañas fueran eficientes y estuvieran totalmente alineadas con nuestro público objetivo. En tres meses, nuestra visibilidad en línea se triplicó, y las campañas generaron un aumento del 35% en el compromiso. ¡Altamente recomendado! <br/>';
        document.getElementById('testimonial-text-3').innerHTML = 'Necesitábamos una estrategia digital más sólida para el lanzamiento de nuestros productos, y Future entregó exactamente lo que buscábamos. Con una consultoría regular, nos ayudaron a optimizar campañas en Google y redes sociales, y desarrollaron landing pages altamente efectivas para la generación de leads. El resultado fue un aumento significativo en las tasas de conversión y un notable incremento en los leads calificados, impulsando nuestro lanzamiento a un gran éxito.<br/><br/>';
        document.getElementById('testimonial-company-1').textContent = 'CEO de TecnoMax Solutions';
        document.getElementById('testimonial-company-2').textContent = 'Director de Marketing en BellaVita';
        document.getElementById('testimonial-company-3').textContent = 'CMO de StartUp Pro';
        document.getElementById('purpose-text').innerHTML = 'Future no es solo una agencia; es un laboratorio de innovación donde cada proyecto es una apuesta por crear un mundo mejor. Con un equipo talentoso y apasionado, Future trabaja para convertir ideas en avances tangibles, ya sea en tecnología, sostenibilidad o las artes.<br/><br/>En Future, el futuro es ahora. Es una invitación para todos los que creen que podemos crear algo extraordinario juntos. Cada cliente, socio y colaborador es un co-creador de este futuro, construyendo un legado de impacto positivo que trasciende generaciones.';
        document.getElementById('purpose-affirmation-1-b').textContent = 'Comunicar';
        document.getElementById('purpose-affirmation-2-b').textContent = 'Conectar';
        document.getElementById('purpose-affirmation-3-b').textContent = 'Transformar';
        document.getElementById('purpose-affirmation-1-a').textContent = 'ideas.';
        document.getElementById('purpose-affirmation-2-a').textContent = 'marcas.';
        document.getElementById('purpose-affirmation-3-a').textContent = 'negocios.';
        document.getElementById('faq-title').textContent = 'Preguntas frecuentes';
        document.getElementById('faq-question-1').textContent = '¿Cuál es el tiempo de entrega del sitio web?';
        document.getElementById('faq-question-2').textContent = '¿Cuáles son los métodos de pago?';
        document.getElementById('faq-question-3').textContent = '¿Necesito contratar un servicio de hosting?';
        document.getElementById('faq-question-4').textContent = '¿Mi sitio web aparecerá en Google?';
        document.getElementById('faq-question-5').textContent = '¿Mi sitio web funcionará bien en smartphones y tabletas?';
        document.getElementById('faq-question-6').textContent = '¿Cómo puedo actualizar el sitio o cambiar un elemento?';
        document.getElementById('faq-question-7').textContent = 'Si tengo un problema después de 30 días de soporte, ¿todavía puedo contactarlos?';
        document.getElementById('faq-question-8').textContent = '¿Mi sitio web se hará utilizando una plantilla pre-diseñada?';
        document.getElementById('faq-question-9').textContent = '¿Cuál es la diferencia entre un sitio web de Future Agency y uno gratuito?';
        document.getElementById('faq-answer-1').textContent = 'El tiempo de entrega del sitio web varía según la complejidad del proyecto, pero generalmente estará en línea dentro de 30 días hábiles, listo para aumentar tus conversiones.';
        document.getElementById('faq-answer-2').textContent = 'Los métodos de pago aceptados son transferencia bancaria, transferencia PIX, tarjeta de crédito y pagos a plazos.';
        document.getElementById('faq-answer-3').textContent = 'No, Future se encarga de toda la infraestructura, incluidos dominios y hosting, por lo que no necesitas preocuparte por ello.';
        document.getElementById('faq-answer-4').textContent = 'Sí, tu sitio estará optimizado para motores de búsqueda como Google, pero la indexación puede tardar un tiempo.';
        document.getElementById('faq-answer-5').textContent = 'Sí, todos los sitios web están desarrollados para ser responsivos y funcionar perfectamente en dispositivos móviles.';
        document.getElementById('faq-answer-6').textContent = 'Cada proyecto es único; puedes optar por un panel de edición para gestionar el contenido de tu sitio o contratar un paquete de soporte, donde nos encargamos de todas las actualizaciones, personalizando todo a tu gusto.';
        document.getElementById('faq-answer-7').textContent = 'Sí, incluso después del período de soporte, puedes contactarnos si tienes algún problema.';
        document.getElementById('faq-answer-8').textContent = 'No, el sitio será hecho a medida, adaptado a tus necesidades y preferencias.';
        document.getElementById('faq-answer-9').textContent = 'Los sitios web creados por Future Agency son personalizados y profesionales, ofreciendo mejor rendimiento y flexibilidad en comparación con las plataformas gratuitas.';
        document.getElementById('footer-text').textContent = 'Mirar al futuro significa ser el arquitecto del mañana, construyendo con coraje y persistencia la base para un gran viaje.';
        document.getElementById('footer-nav-1').textContent = 'Menú';
        document.getElementById('footer-nav-2').textContent = 'Soporte';
        document.getElementById('footer-nav-1-text').textContent = 'Servicios';
        document.getElementById('footer-nav-2-text').textContent = 'Sobre nosotros';
        document.getElementById('footer-nav-3-text').textContent = 'Ventajas';
        document.getElementById('footer-nav-4-text').textContent = 'Planes';
        document.getElementById('footer-nav-5-text').textContent = 'Soporte';
        document.getElementById('footer-nav-6-text').textContent = 'Servicio 24h';
        document.getElementById('footer-nav-7-text').textContent = 'Chat Rápido';
        document.getElementById('contact-title').textContent = 'Contáctanos';
        var placeholderText = document.getElementById('contact-text');
        placeholderText.placeholder = "Introduce tu número";
        document.getElementById('copy-text').innerHTML = 'Derechos de autor &copy; 2024 Future. Todos los derechos reservados a la Agencia <a href="https://www.instagram.com/future_digi" target="_blank">Future Digital.</a>';
        document.getElementById('error-message').textContent = '¡Número inválido! Ingrese al menos 12 dígitos.';
        document.getElementById('error-message-2').textContent = '¡Número inválido! Ingrese un número válido.';
    });

    
  // Troca de tema
  themeToggle.addEventListener('change', () => {
      if (themeToggle.checked) {
          document.documentElement.setAttribute('data-theme', 'light');
      } else {
          document.documentElement.removeAttribute('data-theme');
      }
  });

  const phoneInput = document.getElementById('contact-text');
  const errorMessage = document.getElementById('error-message');
  const errorMessage2 = document.getElementById('error-message-2');
  const formImage = document.getElementById('confirm-image');

  // Formulário de contato - Validação
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário
    const inputValue = phoneInput.value;

    // Verifica se o número é válido (pelo menos 9 dígitos)
    if (inputValue.length < 12) {
      errorMessage.style.display = 'inline'; // Exibe a mensagem de erro
      errorMessage2.style.display = 'none';
    } else if(inputValue.length > 14){
      errorMessage.style.display = 'none';
      errorMessage2.style.display = 'inline';
    }
    else{
      errorMessage.style.display = 'none'; // Esconde a mensagem de erro
      errorMessage2.style.display = 'none'; // Esconde a mensagem de erro
      var form = document.getElementById('contactForm');
      window.open('', 'formTarget');
      form.target = 'formTarget'; // Envia o formulário para a nova aba/guia
      form.submit();
      phoneInput.value = '';
      formImage.src = 'assets/check-icon-2.png';
    }
  });

  // Seleciona o formulário e o campo de input
  const formAnimation = document.getElementById('contactForm');

  // Função que aplica a máscara
  phoneInput.addEventListener('input', function () {
    let inputValue = phoneInput.value;
    // Remove qualquer caractere que não seja número
    inputValue = inputValue.replace(/\D/g, '');
    errorMessage.style.display = 'none'; // Esconde a mensagem de erro
    errorMessage2.style.display = 'none'; // Esconde a mensagem de erro

    // Adiciona o "+" no início
    if (inputValue.length > 0) {
      inputValue = '+' + inputValue;
    }

    if(inputValue.length > 11 && inputValue.length < 15){
      formImage.src = 'assets/check-icon.png';
      formAnimation.classList.add('ready');
    }else{
      formImage.src = 'assets/check-icon-2.png';
      formAnimation.classList.remove('ready');
    }

    // Atualiza o valor do campo de texto
    phoneInput.value = inputValue;
  });

  // Adiciona a classe "focused" ao formulário quando o input estiver em foco
  phoneInput.addEventListener('focus', function() {
    formAnimation.classList.add('focused');
  });

  // Remove a classe "focused" quando o input perde o foco
  phoneInput.addEventListener('blur', function() {
    formAnimation.classList.remove('focused');
  });

});

 // Exibe as respostas do FAQ
 function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.faq-icon');

    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        icon.src = 'assets/faq-button.png';
    } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.src = 'assets/faq-button-2.png';
    }
}

// Função para mudar a imagem ao passar o mouse
function hoverIn(element) {
    const icon = element.querySelector('.faq-icon');
    if (!element.nextElementSibling.style.maxHeight) {
        // Só troca a imagem se o FAQ não estiver aberto
        icon.src = 'assets/faq-button-2.png'; // Coloca uma imagem diferente ao passar o mouse
    }
}

// Função para voltar a imagem ao tirar o mouse
function hoverOut(element) {
    const icon = element.querySelector('.faq-icon');
    if (!element.nextElementSibling.style.maxHeight) {
        // Só troca a imagem de volta se o FAQ não estiver aberto
        icon.src = 'assets/faq-button.png'; // Volta para a seta para baixo
    }
}

// Detectar se o usuário está no topo ou na parte inferior da página
window.onscroll = function() {
    toggleScrollButton();
  };
  
  function toggleScrollButton() {
    const scrollButton = document.getElementById("scrollButton");

    // Verifica se a largura da tela é menor que 1310px
    const isSmallScreen = window.matchMedia("(max-width: 1310px)").matches;

    // Se a tela for menor que 1310px, esconde o botão
    if (isSmallScreen) {
      scrollButton.style.display = "none";
      return; // Não executa o restante da função
    }
  
    // Verifica se o usuário está perto do topo
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = "block"; // Mostra o botão
      scrollButton.innerHTML = '<img src="assets/faq-button-2.png" alt="Arrow">'; // Muda o ícone para seta para cima
    } else {
      scrollButton.innerHTML = '<img src="assets/faq-button.png" alt="Arrow">'; // Ícone para seta para baixo
    }
  
    // Verifica se o usuário está na parte inferior da página
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
      scrollButton.innerHTML = '<img src="assets/faq-button-2.png" alt="Arrow">'; // Muda para cima quando estiver no final da página
    } else {
      scrollButton.innerHTML = '<img src="assets/faq-button.png" alt="Arrow">'; // Muda para baixo quando não estiver no final
    }
  }
  
  // Função para rolar a página para cima ou para baixo
  function scrollFunction() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
      // Rola para o topo
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Rola para o final
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }

  function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('open');
  }

  function toggleMedia() {
    const rocketImage = document.getElementById('rocket-image');
    const rocketVideo = document.getElementById('rocket-video');
    const screenWidth = window.innerWidth;

    if (screenWidth < 1000) {
        // Em telas menores que 1000px, mostrar a imagem e ocultar o vídeo
        rocketImage.style.display = 'block';
        rocketVideo.style.display = 'none';
    } else {
        // Em telas maiores que 1000px, mostrar o vídeo e ocultar a imagem
        rocketImage.style.display = 'none';
        rocketVideo.style.display = 'block';
    }
}

// Verificar o tamanho da tela quando a página for carregada
window.addEventListener('load', toggleMedia);

// Verificar o tamanho da tela quando a janela for redimensionada
window.addEventListener('resize', toggleMedia);
