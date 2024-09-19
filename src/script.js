// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');

  // Define the text content for each language
    const translations = {
    'pt': {
        'services': 'Serviços',
        'purpose': 'Quem somos',
        'advantages': 'Vantagens',
        'plans': 'Planos',
        'heroTitle': 'Aumente seus resultados com um site profissional bem posicionado',
        'heroDescription': 'Nós criamos sites, landing pages e aplicativos que contam histórias e que refletem a personalidade única da sua marca, além de posicionarmos o seu negócio como uma referência no setor.',
        'getQuote': 'Pedir orçamento',
        'visibility': 'Visibilidade',
        'personality': 'Personalidade',
        'connection': 'Conexão',
        'engagement': 'Engajamento',
        'performance': 'Performance',
        'responsiveness': 'Responsividade',
        'conversion': 'Conversão',
        'solutionsTitle': 'Soluções inovadoras e personalizadas para o seu negócio!',
        'servicesList': {
            'landingPages': 'Landing Pages',
            'websites': 'Sites',
            'virtualStores': 'Lojas Virtuais',
            'apps': 'Aplicativos',
            'visualIdentity': 'Identidade Visual',
            '3dLogo': 'Logotipo 3D',
            'digitalCard': 'Cartão Digital'
        },
        'siteBenefitsTitle': 'Um site profissional trará inúmeras vantagens para o seu negócio',
        'benefits': {
            'revenue': 'Faturamento',
            'positioning': 'Posicionamento',
            'visibility': 'Visibilidade',
            'authority': 'Autoridade',
            'credibility': 'Credibilidade',
            'connection': 'Conexão'
        },
        'revenueBenefitText': 'Tenha mais um ponto de contato para atrair potenciais clientes, foque na conversão e aumente seu faturamento.',
        'positioningBenefitText': 'Consolide o posicionamento da sua marca como referência no seu nicho e gere mais confiança no seu público.',
        'visibilityBenefitText': 'Seja facilmente descoberto e atraia mais clientes e parceiros para o seu negócio.',
        'authorityBenefitText': 'Mostre que você sabe do que está falando, apresente seus cases de sucesso e os problemas que você pode resolver.',
        'credibilityBenefitText': 'Demonstre zelo e profissionalismo ao apresentar uma página feita por especialistas.',
        'connectionBenefitText': 'Proporcione uma experiência agradável adaptada para ser perfeitamente funcional em todos os dispositivos.',
        'highPerformanceTitle': 'Trabalhamos para entregar sites em alta performance',
        'highPerformanceDescription': '47% dos usuários, esperam, no máximo, 2 segundos até o carregamento da página. Com um desempenho de excelência, você atrai mais visitantes e eleva o nível da sua empresa no mercado.',
        'customSolutionsTitle': 'Soluções personalizadas para o seu negócio',
        'testimonialsTitle': 'O que nossos clientes dizem sobre nós',
        'rodrigoAlmeidaTestimonial': 'A Future Solutions foi fundamental para reestruturarmos nossa estratégia de marketing digital. Com a consultoria deles, identificamos falhas no nosso funil de vendas e otimizações necessárias nas campanhas pagas. Em pouco tempo, eles ajustaram nossos anúncios, resultando em um aumento de 50% no retorno sobre investimento.',
        'marianaCostaTestimonial': 'O time da Future nos ajudou a redefinir nossa estratégia de branding e marketing digital. Em três meses, nossa visibilidade online triplicou e as campanhas geraram um aumento de 35% nas interações. Fica minha recomendação!',
        'lucasFernandesTestimonial': 'Precisávamos de uma estratégia digital mais robusta para alavancar nossos lançamentos, e a Future entregou exatamente o que buscávamos. O resultado foi um aumento significativo na taxa de conversão e no número de leads qualificados.',
        'purposeTitle': 'Quem somos',
        'purposeText': 'A Future não é apenas uma agência; é um laboratório de inovação, onde cada projeto é uma aposta na criação de um mundo melhor. Com uma equipe talentosa e apaixonada, a Future trabalha para transformar ideias em avanços tangíveis.',
        'faqTitle': 'Perguntas frequentes',
        'faq': {
            'deliveryTime': 'Qual é o prazo de entrega do site?',
            'deliveryTimeAnswer': 'O prazo de entrega do site varia de acordo com a complexidade do projeto, mas geralmente em torno de 30 dias úteis.',
            'paymentMethods': 'Quais são as formas de pagamento?',
            'paymentMethodsAnswer': 'As formas de pagamento aceitas são transferência bancária, transferência PIX, cartão de crédito e parcelamento.',
            'hosting': 'Preciso contratar um serviço de hospedagem?',
            'hostingAnswer': 'Não é necessário, nós cuidamos de toda parte de infraestrutura para você, tirando a sua preocupação com domínios e hospedagem.',
            'seo': 'Meu site vai aparecer no Google?',
            'seoAnswer': 'Sim, seu site será otimizado para motores de busca, como o Google, mas o processo de indexação pode levar algum tempo.',
            'responsiveness': 'Meu site vai funcionar bem em smartphones e tablets?',
            'responsivenessAnswer': 'Sim, todos os sites são desenvolvidos para serem responsivos e funcionarem perfeitamente em dispositivos móveis.',
            'siteUpdates': 'Como faço para alimentar o site ou trocar algum elemento?',
            'siteUpdatesAnswer': 'Você pode contar com um painel de edições ou contratar um pacote de acompanhamento para cuidar das atualizações.',
            'postSupport': 'Se eu tiver algum problema com o site depois dos 30 dias de acompanhamento, posso entrar em contato?',
            'postSupportAnswer': 'Sim, mesmo após o período de acompanhamento, você pode entrar em contato com o suporte.',
            'customSite': 'Meu site será feito com template pronto?',
            'customSiteAnswer': 'Não, o site será desenvolvido sob medida, de acordo com as suas necessidades e preferências.',
            'futureDifference': 'Qual a diferença do site feito pela Agência Future para um site gratuito?',
            'futureDifferenceAnswer': 'Sites feitos pela Agência Future são personalizados e profissionais, garantindo maior desempenho e flexibilidade em comparação a plataformas gratuitas.'
        },
        'footer': {
            'aboutUs': 'Olhar para o futuro é ser o arquiteto do amanhã, construindo com coragem e persistência as bases para uma jornada grandiosa.',
            'menu': 'Menu',
            'support': 'Suporte',
            'contact': 'Contate-nos',
            'rightsReserved': 'Copyright &copy; 2024 Future. Todos os direitos reservados à Agência Future Digital.'
        }
    },
    'en': {
        'services': 'Services',
        'purpose': 'Who we are',
        'advantages': 'Advantages',
        'plans': 'Plans',
        'heroTitle': 'Increase your results with a well-positioned professional website',
        'heroDescription': 'We create websites, landing pages, and applications that tell stories and reflect the unique personality of your brand, while positioning your business as a reference in the industry.',
        'getQuote': 'Request a quote',
        'visibility': 'Visibility',
        'personality': 'Personality',
        'connection': 'Connection',
        'engagement': 'Engagement',
        'performance': 'Performance',
        'responsiveness': 'Responsiveness',
        'conversion': 'Conversion',
        'solutionsTitle': 'Innovative and personalized solutions for your business!',
        'servicesList': {
            'landingPages': 'Landing Pages',
            'websites': 'Websites',
            'virtualStores': 'Online Stores',
            'apps': 'Applications',
            'visualIdentity': 'Visual Identity',
            '3dLogo': '3D Logo',
            'digitalCard': 'Digital Card'
        },
        'siteBenefitsTitle': 'A professional website will bring numerous advantages to your business',
        'benefits': {
            'revenue': 'Revenue',
            'positioning': 'Positioning',
            'visibility': 'Visibility',
            'authority': 'Authority',
            'credibility': 'Credibility',
            'connection': 'Connection'
        },
        'revenueBenefitText': 'Gain an additional point of contact to attract potential customers, focus on conversion, and increase your revenue.',
        'positioningBenefitText': 'Consolidate your brand’s positioning as a reference in your niche and generate more trust with your audience.',
        'visibilityBenefitText': 'Be easily discovered and attract more customers and partners to your business.',
        'authorityBenefitText': 'Show that you know what you’re talking about, present your success stories and the problems you can solve.',
        'credibilityBenefitText': 'Demonstrate care and professionalism by presenting a page made by specialists.',
        'connectionBenefitText': 'Provide a pleasant experience adapted to be fully functional on all devices.',
        'highPerformanceTitle': 'We work to deliver high-performance websites',
        'highPerformanceDescription': '47% of users expect a page to load within 2 seconds. With excellent performance, you attract more visitors and elevate your company’s market standing.',
        'customSolutionsTitle': 'Custom solutions for your business',
        'testimonialsTitle': 'What our clients say about us',
        'rodrigoAlmeidaTestimonial': 'Future Solutions was essential in restructuring our digital marketing strategy. With their consultancy, we identified flaws in our sales funnel and necessary optimizations in paid campaigns. In a short time, they adjusted our ads, resulting in a 50% increase in return on investment.',
        'marianaCostaTestimonial': 'The Future team helped us redefine our branding and digital marketing strategy. In three months, our online visibility tripled, and the campaigns generated a 35% increase in interactions. Highly recommended!',
        'lucasFernandesTestimonial': 'We needed a more robust digital strategy to boost our launches, and Future delivered exactly what we were looking for. The result was a significant increase in conversion rates and the number of qualified leads.',
        'purposeTitle': 'Who we are',
        'purposeText': 'Future is not just an agency; it’s an innovation lab, where every project is a bet on creating a better world. With a talented and passionate team, Future works to turn ideas into tangible advancements.',
        'faqTitle': 'Frequently Asked Questions',
        'faq': {
            'deliveryTime': 'What is the website delivery time?',
            'deliveryTimeAnswer': 'The website delivery time varies depending on the complexity of the project, but it’s usually around 30 business days.',
            'paymentMethods': 'What payment methods are available?',
            'paymentMethodsAnswer': 'Accepted payment methods include bank transfer, PIX transfer, credit card, and installment payments.',
            'hosting': 'Do I need to hire a hosting service?',
            'hostingAnswer': 'No, we take care of all the infrastructure for you, so you don’t have to worry about domains and hosting.',
            'seo': 'Will my website appear on Google?',
            'seoAnswer': 'Yes, your website will be optimized for search engines like Google, but the indexing process may take some time.',
            'responsiveness': 'Will my website work well on smartphones and tablets?',
            'responsivenessAnswer': 'Yes, all websites are developed to be responsive and work perfectly on mobile devices.',
            'siteUpdates': 'How can I update the website or change an element?',
            'siteUpdatesAnswer': 'You can use an editing panel or hire a maintenance package to manage updates.',
            'postSupport': 'If I have a problem with the website after the 30-day follow-up, can I still contact you?',
            'postSupportAnswer': 'Yes, even after the follow-up period, you can still contact support.',
            'customSite': 'Will my website be built with a pre-made template?',
            'customSiteAnswer': 'No, the website will be custom-developed according to your needs and preferences.',
            'futureDifference': 'What’s the difference between a site made by Future Agency and a free website?',
            'futureDifferenceAnswer': 'Websites made by Future Agency are personalized and professional, ensuring better performance and flexibility compared to free platforms.'
        },
        'footer': {
            'aboutUs': 'Looking towards the future means being the architect of tomorrow, building with courage and persistence the foundations for a grand journey.',
            'menu': 'Menu',
            'support': 'Support',
            'contact': 'Contact us',
            'rightsReserved': 'Copyright &copy; 2024 Future. All rights reserved to Future Digital Agency.'
        }
    },
    'es': {
        'services': 'Servicios',
        'purpose': 'Quiénes somos',
        'advantages': 'Ventajas',
        'plans': 'Planes',
        'heroTitle': 'Aumenta tus resultados con un sitio web profesional bien posicionado',
        'heroDescription': 'Creamos sitios web, landing pages y aplicaciones que cuentan historias y reflejan la personalidad única de tu marca, además de posicionar tu negocio como una referencia en el sector.',
        'getQuote': 'Solicitar presupuesto',
        'visibility': 'Visibilidad',
        'personality': 'Personalidad',
        'connection': 'Conexión',
        'engagement': 'Compromiso',
        'performance': 'Desempeño',
        'responsiveness': 'Responsividad',
        'conversion': 'Conversión',
        'solutionsTitle': '¡Soluciones innovadoras y personalizadas para tu negocio!',
        'servicesList': {
            'landingPages': 'Landing Pages',
            'websites': 'Sitios web',
            'virtualStores': 'Tiendas Virtuales',
            'apps': 'Aplicaciones',
            'visualIdentity': 'Identidad Visual',
            '3dLogo': 'Logotipo 3D',
            'digitalCard': 'Tarjeta Digital'
        },
        'siteBenefitsTitle': 'Un sitio web profesional traerá numerosas ventajas para tu negocio',
        'benefits': {
            'revenue': 'Ingresos',
            'positioning': 'Posicionamiento',
            'visibility': 'Visibilidad',
            'authority': 'Autoridad',
            'credibility': 'Credibilidad',
            'connection': 'Conexión'
        },
        'revenueBenefitText': 'Obtén un punto de contacto adicional para atraer potenciales clientes, enfócate en la conversión y aumenta tus ingresos.',
        'positioningBenefitText': 'Consolida el posicionamiento de tu marca como referencia en tu nicho y genera mayor confianza en tu público.',
        'visibilityBenefitText': 'Sé fácilmente descubierto y atrae más clientes y socios para tu negocio.',
        'authorityBenefitText': 'Demuestra que sabes de lo que hablas, presenta tus casos de éxito y los problemas que puedes resolver.',
        'credibilityBenefitText': 'Demuestra cuidado y profesionalismo al presentar una página hecha por especialistas.',
        'connectionBenefitText': 'Proporciona una experiencia agradable adaptada para ser perfectamente funcional en todos los dispositivos.',
        'highPerformanceTitle': 'Trabajamos para entregar sitios web de alto rendimiento',
        'highPerformanceDescription': 'El 47% de los usuarios esperan, como máximo, 2 segundos para que la página cargue. Con un rendimiento de excelencia, atraerás más visitantes y elevarás el nivel de tu empresa en el mercado.',
        'customSolutionsTitle': 'Soluciones personalizadas para tu negocio',
        'testimonialsTitle': 'Lo que nuestros clientes dicen sobre nosotros',
        'rodrigoAlmeidaTestimonial': 'Future Solutions fue fundamental para reestructurar nuestra estrategia de marketing digital. Con su consultoría, identificamos fallas en nuestro embudo de ventas y optimizaciones necesarias en las campañas pagadas. En poco tiempo, ajustaron nuestros anuncios, lo que resultó en un aumento del 50% en el retorno sobre la inversión.',
        'marianaCostaTestimonial': 'El equipo de Future nos ayudó a redefinir nuestra estrategia de branding y marketing digital. En tres meses, nuestra visibilidad online se triplicó y las campañas generaron un aumento del 35% en las interacciones. ¡Lo recomiendo mucho!',
        'lucasFernandesTestimonial': 'Necesitábamos una estrategia digital más robusta para impulsar nuestros lanzamientos, y Future entregó exactamente lo que buscábamos. El resultado fue un aumento significativo en la tasa de conversión y en el número de leads calificados.',
        'purposeTitle': 'Quiénes somos',
        'purposeText': 'Future no es solo una agencia; es un laboratorio de innovación, donde cada proyecto es una apuesta por crear un mundo mejor. Con un equipo talentoso y apasionado, Future trabaja para transformar ideas en avances tangibles.',
        'faqTitle': 'Preguntas frecuentes',
        'faq': {
            'deliveryTime': '¿Cuál es el plazo de entrega del sitio web?',
            'deliveryTimeAnswer': 'El plazo de entrega del sitio web varía según la complejidad del proyecto, pero generalmente es de alrededor de 30 días hábiles.',
            'paymentMethods': '¿Cuáles son las formas de pago?',
            'paymentMethodsAnswer': 'Las formas de pago aceptadas son transferencia bancaria, transferencia PIX, tarjeta de crédito y pago a plazos.',
            'hosting': '¿Necesito contratar un servicio de alojamiento?',
            'hostingAnswer': 'No es necesario, nosotros nos encargamos de toda la infraestructura, eliminando tus preocupaciones sobre dominios y alojamiento.',
            'seo': '¿Mi sitio web aparecerá en Google?',
            'seoAnswer': 'Sí, tu sitio web estará optimizado para motores de búsqueda como Google, pero el proceso de indexación puede tomar tiempo.',
            'responsiveness': '¿Mi sitio funcionará bien en smartphones y tablets?',
            'responsivenessAnswer': 'Sí, todos los sitios están diseñados para ser responsivos y funcionar perfectamente en dispositivos móviles.',
            'siteUpdates': '¿Cómo puedo actualizar o cambiar algún elemento del sitio web?',
            'siteUpdatesAnswer': 'Puedes contar con un panel de edición o contratar un paquete de mantenimiento para gestionar las actualizaciones.',
            'postSupport': 'Si tengo algún problema con el sitio después de los 30 días de seguimiento, ¿puedo contactar con ustedes?',
            'postSupportAnswer': 'Sí, incluso después del periodo de seguimiento, puedes contactar con el soporte.',
            'customSite': '¿Mi sitio será hecho con una plantilla predefinida?',
            'customSiteAnswer': 'No, el sitio será desarrollado a medida, según tus necesidades y preferencias.',
            'futureDifference': '¿Cuál es la diferencia entre un sitio web hecho por Future Agency y uno gratuito?',
            'futureDifferenceAnswer': 'Los sitios hechos por Future Agency son personalizados y profesionales, garantizando mayor rendimiento y flexibilidad en comparación con plataformas gratuitas.'
        },
        'footer': {
            'aboutUs': 'Mirar hacia el futuro es ser el arquitecto del mañana, construyendo con valentía y persistencia las bases para un viaje grandioso.',
            'menu': 'Menú',
            'support': 'Soporte',
            'contact': 'Contáctanos',
            'rightsReserved': 'Copyright &copy; 2024 Future. Todos los derechos reservados a Future Digital Agency.'
        }
    }
  };
  
    // Função para alterar o idioma
    function changeLanguage(lang) {
        // Defina o idioma nos elementos do menu
        document.querySelector('a[href="#services"]').textContent = translations[lang].services;
        document.querySelector('a[href="#purpose"]').textContent = translations[lang].purpose;
        document.querySelector('a[href="#advantages"]').textContent = translations[lang].advantages;
        document.querySelector('a[href="https://wa.me/5522981812993"]').textContent = translations[lang].plans;

        // Seção Hero
        document.querySelector('.hero-content h1').textContent = translations[lang].heroTitle;
        document.querySelector('.hero-content p').textContent = translations[lang].heroDescription;
        document.querySelector('.hero-content button').textContent = translations[lang].getQuote;

        // Seção Vantagens
        const advantages = ['visibility', 'personality', 'connection', 'engagement', 'performance', 'responsiveness', 'conversion'];
        advantages.forEach((advantage, index) => {
            document.querySelector(`.advantages-presentation-list h3:nth-child(${index + 1})`).textContent = translations[lang][advantage];
        });

        // Soluções
        document.querySelector('.services h2').textContent = translations[lang].solutionsTitle;

        // Lista de Serviços
        const serviceItems = ['landingPages', 'websites', 'virtualStores', 'apps', 'visualIdentity', '3dLogo', 'digitalCard'];
        serviceItems.forEach((service, index) => {
            document.querySelector(`.service-item:nth-child(${index + 1})`).textContent = translations[lang].servicesList[service];
        });

        // Benefícios do site
        document.querySelector('.advantage h3').textContent = translations[lang].siteBenefitsTitle;
        const benefitItems = ['revenue', 'positioning', 'visibility', 'authority', 'credibility', 'connection'];
        benefitItems.forEach((benefit, index) => {
            document.querySelector(`.detail-item:nth-child(${index + 1}) h4`).textContent = translations[lang].benefits[benefit];
            document.querySelector(`.detail-item:nth-child(${index + 1}) p`).textContent = translations[lang][`${benefit}BenefitText`];
        });

        // Seção de performance
        document.querySelector('.second-info-first h2').textContent = translations[lang].highPerformanceTitle;
        document.querySelector('.second-info-first p').textContent = translations[lang].highPerformanceDescription;

        // Depoimentos
        document.querySelector('.testimonials-title h2').textContent = translations[lang].testimonialsTitle;
        document.querySelectorAll('.testimonial').forEach((testimonial, index) => {
            const names = ['rodrigoAlmeidaTestimonial', 'marianaCostaTestimonial', 'lucasFernandesTestimonial'];
            testimonial.querySelector('p').textContent = translations[lang][names[index]];
        });

        // Perguntas Frequentes
        document.querySelector('.faq-section h2').textContent = translations[lang].faqTitle;
        const faqItems = ['deliveryTime', 'paymentMethods', 'hosting', 'seo', 'responsiveness', 'siteUpdates', 'postSupport', 'customSite', 'futureDifference'];
        faqItems.forEach((faq, index) => {
            document.querySelector(`.faq-item:nth-child(${index + 1}) .faq-question`).textContent = translations[lang].faq[faq];
            document.querySelector(`.faq-item:nth-child(${index + 1}) .faq-answer p`).textContent = translations[lang].faq[`${faq}Answer`];
        });

        // Rodapé
        document.querySelector('.social-medias p').textContent = translations[lang].footer.aboutUs;
        document.querySelector('.footer-menu h3').textContent = translations[lang].footer.menu;
        document.querySelector('.support-menu h3').textContent = translations[lang].footer.support;
        document.querySelector('.contact-menu h3').textContent = translations[lang].footer.contact;
        document.querySelector('.copy-text p').innerHTML = translations[lang].footer.rightsReserved;
    }


  
  // Add event listeners to the language buttons
  document.getElementById('lang-pt').addEventListener('click', function() {
    changeLanguage('pt');
  });
  
  document.getElementById('lang-en').addEventListener('click', function() {
    changeLanguage('en');
  });
  
  document.getElementById('lang-es').addEventListener('click', function() {
    changeLanguage('es');
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

 // Exibe as respostas do FAQ
 function toggleAnswer(element) {
    const answer = element.nextElementSibling;

    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
    } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
    }
}