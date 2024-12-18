// scripts.js
const btn_left = "<div class='service-btn-space'><button class='carousel-btn prev-btn' onclick='moveCarousel(-1)'>&#9664;</button></div>";
const btn_right = "<div class='service-btn-space'><button class='carousel-btn next-btn' onclick='moveCarousel(1)'>&#9654;</button></div>";

const card_0 = "<div class='service-item' id='card-0'><div class='service-item-icon'><img src='assets/landing-pages-icon.webp' alt='Landing page icon'></div><div class='service-item-title'><p id='service-1'>Landing Page</p></div><div class='service-item-description' id='service-1-description'>Uma Página web bem projetada é essencial para captar a atenção do seu público-alvo e convertê-los em clientes. Oferecemos páginas focadas em resultados, com design otimizado e chamadas para ação que aumentam suas chances de sucesso, tenha uma presença digital forte com um website novinho produzido por nós!</div></div>";
const card_0_es = "<div class='service-item' id='card-0'><div class='service-item-icon'><img src='assets/landing-pages-icon.webp' alt='Landing page icon'></div><div class='service-item-title'><p id='service-1'>Landing Page</p></div><div class='service-item-description' id='service-1-description'>Una página web bien diseñada es esencial para captar la atención de tu público objetivo y convertirlos en clientes. Ofrecemos páginas enfocadas en resultados, con diseño optimizado y llamados a la acción que aumentan tus posibilidades de éxito. ¡Construye una sólida presencia digital con un sitio web desarrollado por nosotros!</div></div>";
const card_0_en = "<div class='service-item' id='card-0'><div class='service-item-icon'><img src='assets/landing-pages-icon.webp' alt='Landing page icon'></div><div class='service-item-title'><p id='service-1'>Landing Page</p></div><div class='service-item-description' id='service-1-description'>A well-designed webpage is essential to capture the attention of your target audience and convert them into customers. We offer result-driven pages with optimized design and calls-to-action that boost your chances of success. Build a strong digital presence with a brand-new website developed by us!</div></div>"; 

const card_1 = "<div class='service-item' id='card-1'><div class='service-item-icon'><img src='assets/lojas-virtuais-icon.webp' alt='E-commerce icon'></div><div class='service-item-title'><p id='service-2'>E-commerce</p></div><div class='service-item-description' id='service-2-description'>Transforme sua ideia em uma loja virtual de sucesso! Criamos e-commerces completos, intuitivos e otimizados para proporcionar uma experiência de compra incrível para seus clientes. Com design responsivo, integrações seguras e foco em resultados, aumentamos suas vendas e potencializamos sua presença no mercado digital.</div></div>";
const card_1_es = "<div class='service-item' id='card-1'><div class='service-item-icon'><img src='assets/lojas-virtuais-icon.webp' alt='E-commerce icon'></div><div class='service-item-title'><p id='service-2'>E-commerce</p></div><div class='service-item-description' id='service-2-description'>¡Convierte tu idea en una tienda online exitosa! Creamos plataformas de comercio electrónico, intuitivas y optimizadas para brindar una experiencia de compra increíble a tus clientes. Con diseño responsivo, seguras y enfocada en resultados, aumentamos tus ventas y fortalecemos tu presencia digital.</div></div>";
const card_1_en = "<div class='service-item' id='card-1'><div class='service-item-icon'><img src='assets/lojas-virtuais-icon.webp' alt='E-commerce icon'></div><div class='service-item-title'><p id='service-2'>E-commerce</p></div><div class='service-item-description' id='service-2-description'>Turn your idea into a successful online store! We create complete, intuitive, and optimized e-commerce platforms to provide an amazing shopping experience for your customers. With responsive design, secure integrations, and a focus on results, we enhance your sales and strengthen your digital presence.</div></div>"; 

const card_2 = "<div class='service-item' id='card-2'><div class='service-item-icon'><img src='assets/aplicativos-icon.webp' alt='App icon'></div><div class='service-item-title'><p id='service-3'>App</p></div><div class='service-item-description' id='service-3-description'>Leve sua marca para o bolso do seu público! Desenvolvemos aplicativos personalizados que unem design moderno, desempenho impecável e funcionalidades sob medida para engajar seus usuários e facilitar o alcance de seus objetivos. Seja em Android ou iOS, entregamos soluções que encantam e fidelizam.</div></div>";
const card_2_es = "<div class='service-item' id='card-2'><div class='service-item-icon'><img src='assets/aplicativos-icon.webp' alt='App icon'></div><div class='service-item-title'><p id='service-3'>App</p></div><div class='service-item-description' id='service-3-description'>¡Lleva tu marca más cerca de tu público! Desarrollamos aplicaciones que combinan diseño moderno, rendimiento impecable y características hechas a medida para involucrar a los usuarios y ayudarte a alcanzar tus objetivos. En Android o iOS, ofrecemos soluciones que impresionan y fidelizan a los clientes.</div></div>";
const card_2_en = "<div class='service-item' id='card-2'><div class='service-item-icon'><img src='assets/aplicativos-icon.webp' alt='App icon'></div><div class='service-item-title'><p id='service-3'>App</p></div><div class='service-item-description' id='service-3-description'>Bring your brand closer to your audience! We develop custom applications that combine modern design, flawless performance, and tailored features to engage users and help you achieve your goals. Whether for Android or iOS, we deliver solutions that impress and retain customers.</div></div>"; 

const card_3 = "<div class='service-item' id='card-3'><div class='service-item-icon'><img src='assets/sites-icon.webp' alt='ERP System icon'></div><div class='service-item-title'><p id='service-4'>Sistema ERP</p></div><div class='service-item-description' id='service-4-description'>Otimize seus processos e tome decisões mais inteligentes com um ERP feito para você. Oferecemos sistemas de gestão empresarial que simplificam o controle de estoque, vendas, finanças e muito mais, tudo em um só lugar. Ganhe eficiência e controle total sobre o seu negócio, e o melhor, de forma totalmente personalizada.</div></div>";
const card_3_es = "<div class='service-item' id='card-3'><div class='service-item-icon'><img src='assets/sites-icon.webp' alt='ERP System icon'></div><div class='service-item-title'><p id='service-4'>Sistema ERP</p></div><div class='service-item-description' id='service-4-description'>Optimiza tus procesos y toma decisiones más inteligentes con un sistema ERP diseñado especialmente para ti. Ofrecemos sistemas de gestión empresarial que simplifican el control de inventario, ventas, finanzas y mucho más, todo en un solo lugar. Gana eficiencia y control total sobre tu negocio con un sistema proprio.</div></div>";
const card_3_en = "<div class='service-item' id='card-3'><div class='service-item-icon'><img src='assets/sites-icon.webp' alt='ERP System icon'></div><div class='service-item-title'><p id='service-4'>ERP System</p></div><div class='service-item-description' id='service-4-description'>Optimize your processes and make smarter decisions with an ERP designed just for you. We offer business management systems that simplify inventory, sales, finance control, and much more, all in one place. Gain efficiency and complete control over your business with a fully customized system.</div></div>"; 

const card_4 = "<div class='service-item' id='card-4'><div class='service-item-icon'><img src='assets/site-captura-leads-icon.webp' alt='Paid Traffic icon'></div><div class='service-item-title'><p id='service-5'>Tráfego pago</p></div><div class='service-item-description' id='service-5-description'>Acelere seus resultados com campanhas de tráfego pago estrategicamente planejadas! Gerenciamos anúncios no Google, Facebook, Instagram e outras plataformas, conectando sua marca ao público certo. Aumente sua visibilidade, alcance e conversões de forma mensurável e consistente.</div></div>";
const card_4_es = "<div class='service-item' id='card-4'><div class='service-item-icon'><img src='assets/site-captura-leads-icon.webp' alt='Paid Traffic icon'></div><div class='service-item-title'><p id='service-5'>Tráfico Pagado</p></div><div class='service-item-description' id='service-5-description'>¡Acelera tus resultados con campañas de tráfico pagado estratégicamente planificadas! Administramos anuncios en Google, Facebook, Instagram y otras plataformas, conectando tu marca con el público adecuado. Incrementa tu visibilidad, alcance y conversiones de manera consistente y medible.</div></div>";
const card_4_en = "<div class='service-item' id='card-4'><div class='service-item-icon'><img src='assets/site-captura-leads-icon.webp' alt='Paid Traffic icon'></div><div class='service-item-title'><p id='service-5'>Paid Traffic</p></div><div class='service-item-description' id='service-5-description'>Boost your results with strategically planned paid traffic campaigns! We manage ads on Google, Facebook, Instagram, and other platforms, connecting your brand with the right audience. Increase your visibility, reach, and conversions consistently and measurably.</div></div>"; 

const card_5 = "<div class='service-item' id='card-5'><div class='service-item-icon'><img src='assets/identidade-visual-icon.webp' alt='Branding icon'></div><div class='service-item-title'><p id='service-6'>Branding</p></div><div class='service-item-description' id='service-6-description'>Destaque-se no mercado com uma identidade visual única e marcante! Criamos logos, paletas de cores e materiais visuais que traduzem a essência da sua marca e comunicam seus valores de forma profissional e criativa. Conquiste a confiança do público com uma imagem que impressiona e conecta.</div></div>";
const card_5_es = "<div class='service-item' id='card-5'><div class='service-item-icon'><img src='assets/identidade-visual-icon.webp' alt='Branding icon'></div><div class='service-item-title'><p id='service-6'>Identidad de marca</p></div><div class='service-item-description' id='service-6-description'>¡Destaca en el mercado con una identidad visual única e impactante! Creamos logotipos, paletas de colores y materiales visuales que reflejan la esencia de tu marca y comunican sus valores de forma profesional y creativa. Gana la confianza del público con una imagen que impresiona y conecta.</div></div>";
const card_5_en = "<div class='service-item' id='card-5'><div class='service-item-icon'><img src='assets/identidade-visual-icon.webp' alt='Branding icon'></div><div class='service-item-title'><p id='service-6'>Branding</p></div><div class='service-item-description' id='service-6-description'>Stand out in the market with a unique and impactful visual identity! We create logos, color palettes, and visual materials that reflect your brand’s essence and professionally and creatively communicate its values. Earn your audience’s trust with an image that impresses and connects.</div></div>"; 

let cards = [card_0, card_1, card_2, card_3, card_4, card_5];
const pt_cards = [card_0, card_1, card_2, card_3, card_4, card_5];
const es_cards = [card_0_es, card_1_es, card_2_es, card_3_es, card_4_es, card_5_es];
const en_cards = [card_0_en, card_1_en, card_2_en, card_3_en, card_4_en, card_5_en];
let usingCards = [card_0, card_1, card_2];
let cardsSize = null;

document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('rocket-video');

  const carousel = document.getElementById('interative-carousel');
  carousel.innerHTML = btn_left+card_0+card_1+card_2+btn_right;
  
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
  const icon1 = document.getElementById('insta-icon');
  const icon2 = document.getElementById('wpp-icon');
  const icon3 = document.getElementById('email-icon');

  themeToggle.addEventListener('change', function() {
    if (themeToggle.checked) {
      // Ativar o modo claro
      body.classList.add('light-mode');
      logo1.src = 'assets/logo-v2.webp';
      icon1.src = 'assets/instagram-alternative-icon.webp'
      icon2.src = 'assets/whatsapp-alternative-icon.webp'
      icon3.src = 'assets/gmail-alternative-icon.webp'
    } else {
      // Ativar o modo escuro
      body.classList.remove('light-mode');
      logo1.src = 'assets/logo.webp';
      icon1.src = 'assets/instagram-footer-icon.webp'
      icon2.src = 'assets/whatsapp-footer-icon.webp'
      icon3.src = 'assets/gmail-footer-icon.webp'
    }
  });

   // Troca de idioma
   langPT.addEventListener('click', () => {
        document.documentElement.lang = 'pt';
        cards = pt_cards;
        updateUsingCards(pt_cards);
        document.getElementById('services').textContent = 'Serviços';
        document.getElementById('about-us').textContent = 'Quem somos';
        document.getElementById('advantages').textContent = 'Vantagens';
        document.getElementById('plans').textContent = 'Planos';
        document.getElementById('hero-title').textContent = 'Aumente seus resultados com um site profissional bem posicionado';
        document.getElementById('hero-description').textContent = 'Nós criamos sites, landing pages e aplicativos que contam histórias e que refletem a personalidade única da sua marca, além de posicionarmos o seu negócio como uma referência no setor.';
        document.getElementById('button-text').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.webp" alt="WhatsApp icon">Pedir orçamento';
        document.getElementById('button-text-2').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.webp" alt="WhatsApp icon">Pedir orçamento';
        document.getElementById('button-text-3').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.webp" alt="WhatsApp icon">Pedir orçamento';
        document.getElementById('button-text-4').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.webp" alt="WhatsApp icon">Pedir orçamento';
        document.getElementById('button-text-5').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.webp" alt="WhatsApp icon">Pedir orçamento';
        document.getElementById('advantage-1').textContent = 'Visibilidade';
        document.getElementById('advantage-2').textContent = 'Personalidade';
        document.getElementById('advantage-3').textContent = 'Conexão';
        document.getElementById('advantage-4').textContent = 'Engajamento';
        document.getElementById('advantage-5').textContent = 'Performance';
        document.getElementById('advantage-6').textContent = 'Responsividade';
        document.getElementById('advantage-7').textContent = 'Conversão';
        document.getElementById('advantage-8').textContent = 'Resultados';
        document.getElementById('advantage-9').textContent = 'Confiança';
        document.getElementById('advantage-10').textContent = 'Visibilidade';
        document.getElementById('advantage-11').textContent = 'Personalidade';
        document.getElementById('advantage-12').textContent = 'Conexão';
        document.getElementById('advantage-13').textContent = 'Engajamento';
        document.getElementById('advantage-14').textContent = 'Performance';
        document.getElementById('advantage-15').textContent = 'Responsividade';
        document.getElementById('advantage-16').textContent = 'Conversão';
        document.getElementById('advantage-17').textContent = 'Resultados';
        document.getElementById('advantage-18').textContent = 'Confiança';
        document.getElementById('services-title').textContent = 'Soluções inovadoras e personalizadas para o seu negócio!'; 
        if(document.getElementById('service-4')) {
          document.getElementById('service-4').textContent = 'Sistema ERP';
        }
        if(document.getElementById('service-5')) {
          document.getElementById('service-5').textContent = 'Tráfego pago';
        }
        if(document.getElementById('service-6')) {
          document.getElementById('service-6').textContent = 'Branding';
        }
        if(document.getElementById('service-1-description')) {
          document.getElementById('service-1-description').textContent = 'Uma Página web bem projetada é essencial para captar a atenção do seu público-alvo e convertê-los em clientes. Oferecemos páginas focadas em resultados, com design otimizado e chamadas para ação que aumentam suas chances de sucesso, tenha uma presença digital forte com um website novinho produzido por nós!';
        }
        if(document.getElementById('service-2-description')) {
          document.getElementById('service-2-description').textContent = 'Transforme sua ideia em uma loja virtual de sucesso! Criamos e-commerces completos, intuitivos e otimizados para proporcionar uma experiência de compra incrível para seus clientes. Com design responsivo, integrações seguras e foco em resultados, aumentamos suas vendas e potencializamos sua presença no mercado digital.';
        }
        if(document.getElementById('service-3-description')) {
          document.getElementById('service-3-description').textContent = 'Leve sua marca para o bolso do seu público! Desenvolvemos aplicativos personalizados que unem design moderno, desempenho impecável e funcionalidades sob medida para engajar seus usuários e facilitar o alcance de seus objetivos. Seja em Android ou iOS, entregamos soluções que encantam e fidelizam.';
        }
        if(document.getElementById('service-4-description')) {
          document.getElementById('service-4-description').textContent = ' Otimize seus processos e tome decisões mais inteligentes com um ERP feito para você. Oferecemos sistemas de gestão empresarial que simplificam o controle de estoque, vendas, finanças e muito mais, tudo em um só lugar. Ganhe eficiência e controle total sobre o seu negócio, e o melhor, de forma totalmente personalizada.';
        }
        if(document.getElementById('service-5-description')) {
          document.getElementById('service-5-description').textContent = ' Acelere seus resultados com campanhas de tráfego pago estrategicamente planejadas! Gerenciamos anúncios no Google, Facebook, Instagram e outras plataformas, conectando sua marca ao público certo. Aumente sua visibilidade, alcance e conversões de forma mensurável e consistente.';
        }
        if(document.getElementById('service-6-description')) {
          document.getElementById('service-6-description').textContent = 'Destaque-se no mercado com uma identidade visual única e marcante! Criamos logos, paletas de cores e materiais visuais que traduzem a essência da sua marca e comunicam seus valores de forma profissional e criativa. Conquiste a confiança do público com uma imagem que impressiona e conecta.';
        }
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
        document.getElementById('testimonial-text-1').innerHTML = 'A Future Digital foi fundamental para reestruturarmos nossa estratégia de marketing digital. Com a consultoria deles, identificamos falhas no nosso funil de vendas e otimizações necessárias nas campanhas pagas. Em pouco tempo, eles ajustaram nossos anúncios, resultando em um aumento de 50% no retorno sobre investimento. Além disso, criaram campanhas direcionadas que ampliaram nossa presença nas redes sociais e posicionaram a TecnoMax como uma referência em tecnologia no nosso nicho.<br/><br/>';
        document.getElementById('testimonial-text-2').textContent = 'O time da Future nos ajudou a redefinir nossa estratégia de branding e marketing digital. Com a expertise deles, desenvolvemos campanhas mais focadas em resultados e otimizamos nossa comunicação nas plataformas digitais. As consultorias frequentes e o acompanhamento próximo garantiram que nossas campanhas fossem eficientes e totalmente alinhadas ao nosso público-alvo. Em três meses, nossa visibilidade online triplicou e as campanhas geraram um aumento de 35% nas interações. Fica minha recomendação!';
        document.getElementById('testimonial-text-3').innerHTML = 'Precisávamos de uma estratégia digital mais robusta para alavancar nossos lançamentos, e a Future entregou exatamente o que buscávamos. Com as consultorias regulares, eles nos ajudaram a otimizar campanhas no Google e redes sociais, além de desenvolverem landing pages altamente eficazes para captação de leads. O resultado foi um aumento significativo na taxa de conversão e um crescimento expressivo no número de leads qualificados, impulsionando nosso lançamento com grande sucesso.<br/><br/>';
        document.getElementById('testimonial-company-1').textContent = 'CEO da TecnoMax Solutions';
        document.getElementById('testimonial-company-2').textContent = 'Diretora de Marketing da BellaVita';
        document.getElementById('testimonial-company-3').textContent = 'CMO da StartUp Pro';

        document.getElementById('contact-section-title').textContent = 'FALE CONOSCO';
        document.getElementById('contact-section-description').innerHTML = 'Somos especialistas em criar soluções digitais sob medida para seu negócio!<br/><br/>Quer dar o próximo passo? Preencha o formulário e agende uma conversa sem compromisso com nossos especialistas. Estamos prontos para trazer resultados que realmente fazem a diferença. 🚀';
        var placeholderText = document.getElementById('contact-text');
        placeholderText.placeholder = "Insira seu número";

        document.getElementById('company-label').textContent = 'Empresa';
        var placeholderTextCompany = document.getElementById('empresa');
        placeholderTextCompany.placeholder = "Sua Empresa";

        /*
        document.getElementById('company-label').textContent = 'Empresa';
        document.getElementById('company-label').textContent = 'Empresa';
        document.getElementById('company-label').textContent = 'Empresa';
        document.getElementById('company-label').textContent = 'Empresa';
        document.getElementById('company-label').textContent = 'Empresa';
        document.getElementById('company-label').textContent = 'Empresa';
        document.getElementById('confirmation-form-text').textContent = 'Confirmar';


        <div class="form-group">
                <label for="empresa" id="company-label">Empresa</label>
                <input type="text" id="empresa" name="empresa" placeholder="Sua Empresa" required>
              </div>
              
              <div class="form-group">
                <label for="site" id="site-label">Site (opcional)</label>
                <input type="url" id="site" name="site" placeholder="https://">
              </div>
            </div>
            <div class="grid">
              <div class="form-group">
                <label for="nome" id="name-label">Nome</label>
                <input type="text" id="nome" name="nome" placeholder="Seu Nome" required>
              </div>
              <div class="form-group">
                <label for="cargo" id="position-label">Cargo (opcional)</label>
                <input type="text" id="cargo" name="cargo" placeholder="Seu Cargo">
              </div>
            </div>
            <div class="grid">
              <div class="form-group">
                <label for="email" id="email-label">E-mail Corporativo</label>
                <input type="email" id="email" name="email" placeholder="Seu E-mail" required>
              </div>
      
              <div class="form-group">
                <label for="celular" id="number-label">Celular</label>
                <input type="tel" id="celular" name="celular" required placeholder="+XX (XX) XXXXX-XXXX">
              </div>
            </div>

            <div class="form-group">
              <label for="descricao" id="necessity-label">Descreva como podemos te ajudar a alavancar seu negócio:</label>
              <textarea id="descricao" name="descricao" rows="5" placeholder="Conte-nos sobre suas necessidades..."></textarea>
            </div>
        */

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
        document.getElementById('copy-text').innerHTML = 'Copyright &copy; 2024 Future. Todos os direitos reservados à Agência <a href="https://www.instagram.com/futuredigital.ag" target="_blank"> Future Digital.</a>';
        document.getElementById('error-message').textContent = 'Número inválido, não esqueça do DDD!';
        document.getElementById('error-message-2').textContent = 'Número inválido! Insira um número válido.';
    });

    // Troca de idioma
    langEN.addEventListener('click', () => {
        document.documentElement.lang = 'en';
        cards = en_cards;
        updateUsingCards(en_cards);
        document.getElementById('services').textContent = 'Services';
        document.getElementById('about-us').textContent = 'About Us';
        document.getElementById('advantages').textContent = 'Advantages';
        document.getElementById('plans').textContent = 'Plans';
        document.getElementById('hero-title').textContent = 'Boost your results with a well-positioned professional website';
        document.getElementById('hero-description').textContent = 'We create websites, landing pages, and apps that tell stories and reflect your brand\'s unique personality, positioning your business as a leader in your industry.';
        document.getElementById('button-text').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.webp" alt="WhatsApp icon">Request a Quote';
        document.getElementById('button-text-2').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.webp" alt="WhatsApp icon">Request a Quote';
        document.getElementById('button-text-3').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.webp" alt="WhatsApp icon">Request a Quote';
        document.getElementById('button-text-4').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.webp" alt="WhatsApp icon">Request a Quote';
        document.getElementById('button-text-5').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.webp" alt="WhatsApp icon">Request a Quote';
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
        if(document.getElementById('service-4')) {
          document.getElementById('service-4').textContent = 'ERP System';
        }
        
        if(document.getElementById('service-5')) {
          document.getElementById('service-5').textContent = 'Paid Traffic';
        }
        
        if(document.getElementById('service-6')) {
          document.getElementById('service-6').textContent = 'Branding';
        }
        if(document.getElementById('service-1-description')) {
          document.getElementById('service-1-description').textContent = 'A well-designed webpage is essential to capture the attention of your target audience and convert them into customers. We offer result-driven pages with optimized design and calls-to-action that boost your chances of success. Build a strong digital presence with a brand-new website developed by us!';
        }
        if(document.getElementById('service-2-description')) {
          document.getElementById('service-2-description').textContent = 'Turn your idea into a successful online store! We create complete, intuitive, and optimized e-commerce platforms to provide an amazing shopping experience for your customers. With responsive design, secure integrations, and a focus on results, we enhance your sales and strengthen your digital presence.';
        }
        if(document.getElementById('service-3-description')) {
          document.getElementById('service-3-description').textContent = 'Bring your brand closer to your audience! We develop custom applications that combine modern design, flawless performance, and tailored features to engage users and help you achieve your goals. Whether for Android or iOS, we deliver solutions that impress and retain customers.';
        }
        if(document.getElementById('service-4-description')) {
          document.getElementById('service-4-description').textContent = 'Optimize your processes and make smarter decisions with an ERP designed just for you. We offer business management systems that simplify inventory, sales, finance control, and much more, all in one place. Gain efficiency and complete control over your business with a fully customized system.';
        }
        if(document.getElementById('service-5-description')) {
          document.getElementById('service-5-description').textContent = 'Boost your results with strategically planned paid traffic campaigns! We manage ads on Google, Facebook, Instagram, and other platforms, connecting your brand with the right audience. Increase your visibility, reach, and conversions consistently and measurably.';
        }
        if(document.getElementById('service-6-description')) {
          document.getElementById('service-6-description').textContent = 'Stand out in the market with a unique and impactful visual identity! We create logos, color palettes, and visual materials that reflect your brand’s essence and professionally and creatively communicate its values. Earn your audience’s trust with an image that impresses and connects.';      
        }  
        document.getElementById('advantages-title').textContent = 'A professional website will bring many benefits for your business';
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
        document.getElementById('testimonial-text-1').innerHTML = 'Future Digital was crucial in restructuring our digital marketing strategy. Their consulting services identified flaws in our sales funnel and necessary optimizations in our paid campaigns. Soon, they adjusted our ads, resulting in a 50% increase in return on investment. They also created targeted campaigns that expanded our social media presence and positioned TecnoMax as a tech leader in our niche.<br/><br/>';
        document.getElementById('testimonial-text-2').innerHTML = 'Future\'s team helped us redefine our branding and digital marketing strategy. Their expertise enabled us to develop result-oriented campaigns and optimize our communication on digital platforms. Their ongoing consultancy and close monitoring ensured our campaigns were efficient and fully aligned with our target audience. Within three months, our online visibility tripled, and the campaigns generated a 35% increase in engagement. Highly recommended!';
        document.getElementById('testimonial-text-3').innerHTML = 'We needed a robustness digital strategy for our product launches, and Future delivered exactly what we were looking for. With regular consulting, they helped us optimize campaigns on Google and social media, and developed highly effective landing pages for lead generation. The result was a significant increase in conversion rates and a notable rise in qualified leads, propelling our launch to great success.<br/><br/>';
        document.getElementById('testimonial-company-1').textContent = 'CEO of TecnoMax Solutions';
        document.getElementById('testimonial-company-2').textContent = 'Marketing Director at BellaVita';
        document.getElementById('testimonial-company-3').textContent = 'CMO of StartUp Pro';
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
        document.getElementById('copy-text').innerHTML = 'Copyright &copy; 2024 Future. All rights reserved to the Agency <a href="https://www.instagram.com/futuredigital.ag" target="_blank"> Future Digital.</a>';
        document.getElementById('error-message').textContent = 'Invalid Number! Use at least 12 digits.';
        document.getElementById('error-message-2').textContent = 'Invalid Number! please, type a valid number.';
    });

    // Troca de idioma para Espanhol
    langES.addEventListener('click', () => {
        document.documentElement.lang = 'es';
        cards = es_cards;
        updateUsingCards(es_cards);
        document.getElementById('services').textContent = 'Servicios';
        document.getElementById('about-us').textContent = 'Sobre nosotros';
        document.getElementById('advantages').textContent = 'Ventajas';
        document.getElementById('plans').textContent = 'Planes';
        document.getElementById('hero-title').textContent = 'Impulsa tus resultados con un sitio web profesional bien posicionado';
        document.getElementById('hero-description').textContent = 'Creamos sitios web, landing pages y aplicaciones que cuentan historias y reflejan la personalidad única de tu marca, posicionando tu negocio como líder en su sector.';
        document.getElementById('button-text').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.webp" alt="WhatsApp icon">Solicitar Cotización';
        document.getElementById('button-text-2').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.webp" alt="WhatsApp icon">Solicitar Cotización';
        document.getElementById('button-text-3').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.webp" alt="WhatsApp icon">Solicitar Cotización';
        document.getElementById('button-text-4').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.webp" alt="WhatsApp icon">Solicitar Cotización';
        document.getElementById('button-text-5').innerHTML = '<img class="button-whatsapp-icon" src="assets/whatsapp-footer-icon.webp" alt="WhatsApp icon">Solicitar Cotización';
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
        if(document.getElementById('service-4')) {
          document.getElementById('service-4').textContent = 'Sistema ERP';
        }
        if(document.getElementById('service-5')) {
          document.getElementById('service-5').textContent = 'Tráfico Pagado';
        }
        if(document.getElementById('service-6')) {
          document.getElementById('service-6').textContent = 'Identidad de marca';
        }
        if(document.getElementById('service-1-description')) {
          document.getElementById('service-1-description').textContent = 'Una página web bien diseñada es esencial para captar la atención de tu público objetivo y convertirlos en clientes. Ofrecemos páginas enfocadas en resultados, con diseño optimizado y llamados a la acción que aumentan tus posibilidades de éxito. ¡Construye una sólida presencia digital con un sitio web desarrollado por nosotros!';
        }
        if(document.getElementById('service-2-description')) {
          document.getElementById('service-2-description').textContent = '¡Convierte tu idea en una tienda online exitosa! Creamos plataformas de comercio electrónico, intuitivas y optimizadas para brindar una experiencia de compra increíble a tus clientes. Con diseño responsivo, seguras y enfocada en resultados, aumentamos tus ventas y fortalecemos tu presencia digital.';
        }
        if(document.getElementById('service-3-description')) {
          document.getElementById('service-3-description').textContent = '¡Lleva tu marca más cerca de tu público! Desarrollamos aplicaciones que combinan diseño moderno, rendimiento impecable y características hechas a medida para involucrar a los usuarios y ayudarte a alcanzar tus objetivos. En Android o iOS, ofrecemos soluciones que impresionan y fidelizan a los clientes.';
        }
        if(document.getElementById('service-4-description')) {
          document.getElementById('service-4-description').textContent = 'Optimiza tus procesos y toma decisiones más inteligentes con un sistema ERP diseñado especialmente para ti. Ofrecemos sistemas de gestión empresarial que simplifican el control de inventario, ventas, finanzas y mucho más, todo en un solo lugar. Gana eficiencia y control total sobre tu negocio con un sistema proprio.';
        }
        if(document.getElementById('service-5-description')) {
          document.getElementById('service-5-description').textContent = '¡Acelera tus resultados con campañas de tráfico pagado estratégicamente planificadas! Administramos anuncios en Google, Facebook, Instagram y otras plataformas, conectando tu marca con el público adecuado. Incrementa tu visibilidad, alcance y conversiones de manera consistente y medible.';
        }
        if(document.getElementById('service-6-description')) {
          document.getElementById('service-6-description').textContent = '¡Destaca en el mercado con una identidad visual única e impactante! Creamos logotipos, paletas de colores y materiales visuales que reflejan la esencia de tu marca y comunican sus valores de forma profesional y creativa. Gana la confianza del público con una imagen que impresiona y conecta.';         
        }
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
        document.getElementById('testimonial-text-1').innerHTML = 'Future Digital fue crucial en la reestructuración de nuestra estrategia de marketing digital. Sus servicios de consultoría identificaron fallas en nuestro embudo de ventas y optimizaciones necesarias en nuestras campañas pagas. Pronto ajustaron nuestros anuncios, lo que resultó en un aumento del 50% en el retorno de inversión. También crearon campañas dirigidas que ampliaron nuestra presencia en redes sociales y posicionaron a TecnoMax como líder tecnológico en nuestro nicho.<br/><br/>';
        document.getElementById('testimonial-text-2').innerHTML = 'El equipo de Future nos ayudó a redefinir nuestra estrategia de branding y marketing digital. Su experiencia nos permitió desarrollar campañas orientadas a resultados y optimizar nuestra comunicación en plataformas digitales. Su consultoría continua y su monitoreo cercano garantizaron que nuestras campañas fueran eficientes y estuvieran totalmente alineadas con nuestro público objetivo. En tres meses, nuestra visibilidad en línea se triplicó, y las campañas generaron un aumento del 35% en el compromiso. ¡Altamente recomendado! <br/>';
        document.getElementById('testimonial-text-3').innerHTML = 'Necesitábamos una estrategia digital más sólida para el lanzamiento de nuestros productos, y Future entregó exactamente lo que buscábamos. Con una consultoría regular, nos ayudaron a optimizar campañas en Google y redes sociales, y desarrollaron landing pages altamente efectivas para la generación de leads. El resultado fue un aumento significativo en las tasas de conversión y un notable incremento en los leads calificados, impulsando nuestro lanzamiento a un gran éxito.<br/><br/>';
        document.getElementById('testimonial-company-1').textContent = 'CEO de TecnoMax Solutions';
        document.getElementById('testimonial-company-2').textContent = 'Director de Marketing en BellaVita';
        document.getElementById('testimonial-company-3').textContent = 'CMO de StartUp Pro';
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
        document.getElementById('copy-text').innerHTML = 'Derechos de autor &copy; 2024 Future. Todos los derechos reservados a la Agencia <a href="https://www.instagram.com/futuredigital.ag" target="_blank">Future Digital.</a>';
        document.getElementById('error-message').textContent = '¡Número inválido! Ingrese al menos 12 dígitos.';
        document.getElementById('error-message-2').textContent = '¡Número inválido! Ingrese un número válido.';
    });

  
    var sun = `<svg id="sun-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 64 64">
  <!-- Círculo central -->
  <circle cx="32" cy="25" r="16" fill="#000"/>

  <!-- Raios de sol -->
  <g fill="#000">
    <path d="M32 2 L36 14 L32 10 L28 14 Z" transform="rotate(0 32 25)"/>
    <path d="M32 2 L36 14 L32 10 L28 14 Z" transform="rotate(45 32 25)"/>
    <path d="M32 2 L36 14 L32 10 L28 14 Z" transform="rotate(90 32 25)"/>
    <path d="M32 2 L36 14 L32 10 L28 14 Z" transform="rotate(135 32 25)"/>
    <path d="M32 2 L36 14 L32 10 L28 14 Z" transform="rotate(180 32 25)"/>
    <path d="M32 2 L36 14 L32 10 L28 14 Z" transform="rotate(225 32 25)"/>
    <path d="M32 2 L36 14 L32 10 L28 14 Z" transform="rotate(270 32 25)"/>
    <path d="M32 2 L36 14 L32 10 L28 14 Z" transform="rotate(315 32 25)"/>
  </g>
</svg>`;
    var moon = `<svg id="moon-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16"><path d="M6 0a6 6 0 1 0 8.486 9.957A7.001 7.001 0 0 1 7.018.018 5.973 5.973 0 0 0 6 0z"/></svg>`;
    var toggleColor = document.getElementById('color-mode-toggle');
    
    // Troca de tema
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
          toggleColor.innerHTML = sun; 
          document.documentElement.setAttribute('data-theme', 'light');
        } else {
          toggleColor.innerHTML = moon; 
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
      formImage.src = 'assets/check-icon-2.webp';
    }
  }),

  // Formulário de contato - Validação
  document.getElementById('principal-contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário
    
    const form = event.target; // Obtém o formulário atual
    
    // Abre uma nova aba/guia para a página de confirmação
    window.open('', 'formTarget');
    form.target = 'formTarget'; // Envia o formulário para a nova aba/guia
    form.submit();
    
    // Esvazia os campos do formulário
    form.reset();
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
      formImage.src = 'assets/check-icon.webp';
      formAnimation.classList.add('ready');
    }else{
      formImage.src = 'assets/check-icon-2.webp';
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
        icon.src = 'assets/faq-button.webp';
    } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.src = 'assets/faq-button-2.webp';
    }
}

// Função para mudar a imagem ao passar o mouse
function hoverIn(element) {
    const icon = element.querySelector('.faq-icon');
    if (!element.nextElementSibling.style.maxHeight) {
        // Só troca a imagem se o FAQ não estiver aberto
        icon.src = 'assets/faq-button-2.webp'; // Coloca uma imagem diferente ao passar o mouse
    }
}

// Função para voltar a imagem ao tirar o mouse
function hoverOut(element) {
    const icon = element.querySelector('.faq-icon');
    if (!element.nextElementSibling.style.maxHeight) {
        // Só troca a imagem de volta se o FAQ não estiver aberto
        icon.src = 'assets/faq-button.webp'; // Volta para a seta para baixo
    }
}

// Detectar se o usuário está no topo ou na parte inferior da página
window.onscroll = function() {
    toggleScrollButton();
  };
  
  function toggleScrollButton() {
    const scrollButton = document.getElementById("scrollButton");

    // Verifica se a largura da tela é menor que 1310px
    const isSmallScreen = window.matchMedia("(max-width: 1035px)").matches;

    // Se a tela for menor que 1310px, esconde o botão
    if (isSmallScreen) {
      scrollButton.style.display = "none";
      return; // Não executa o restante da função
    }
  
    // Verifica se o usuário está perto do topo
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = "block"; // Mostra o botão
      scrollButton.innerHTML = '<img src="assets/faq-button-2.webp" alt="Arrow">'; // Muda o ícone para seta para cima
    } else {
      scrollButton.innerHTML = '<img src="assets/faq-button.webp" alt="Arrow">'; // Ícone para seta para baixo
    }
  
    // Verifica se o usuário está na parte inferior da página
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
      scrollButton.innerHTML = '<img src="assets/faq-button-2.webp" alt="Arrow">'; // Muda para cima quando estiver no final da página
    } else {
      scrollButton.innerHTML = '<img src="assets/faq-button.webp" alt="Arrow">'; // Muda para baixo quando não estiver no final
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
    
    if (screenWidth < 1020) {
      if (cardsSize !== 1) {
        checkCarousel(1);
      }
    } else {
      if (cardsSize !== 0) {
        checkCarousel(0);
      }
    }
}

function checkCarousel(size){
  const carousel = document.getElementById('interative-carousel');
  if (size === 1) {
    carousel.innerHTML = btn_left + cards.join('') + btn_right;
    cardsSize = 1;
  } else if (size === 0) {
    carousel.innerHTML = btn_left + usingCards.join('') + btn_right;
    cardsSize = 0;
  }
}

function updateUsingCards(newCards){
  const newIndexes = [];
  let currentIndexMapper = currentIndex;

  for(var i = 0; i < 3; i++){
    newIndexes.push(newCards[currentIndexMapper]);

    currentIndexMapper--;
    
    if(currentIndexMapper < 0){
      currentIndexMapper = 5;
    }
  }

  usingCards = newIndexes.reverse();
}

let currentIndex = 2;
let isCarouselAnimating = false;

function moveCarousel(direction) {
  if (isCarouselAnimating) return;

  isCarouselAnimating = true;

  const carousel = document.getElementById('interative-carousel');
  const allCards = carousel.querySelectorAll('.service-item');

  // Classes de animação de saída
  if (direction > 0) {
    allCards[0].classList.add('exit-left', 'animating');
    allCards[0].style.opacity = '0';
    allCards[1].classList.add('exit-left', 'animating');
    allCards[2].classList.add('exit-left', 'animating');
  } else {
    allCards[2].classList.add('exit-right', 'animating');
    allCards[2].style.opacity = '0';
    allCards[1].classList.add('exit-right', 'animating'); 
    allCards[0].classList.add('exit-right', 'animating'); 
  }

  // Aguarda o término da animação de saída
  setTimeout(() => {
    let newNumber = 0;
    let auxiliarNumber = 0;

    if (direction > 0) {
      // Lógica existente para avançar
      if (currentIndex + direction > 5) {
        currentIndex = 0;
      } else {
        currentIndex = currentIndex + direction;
      }

      if (currentIndex < 3) {
        newNumber = currentIndex + 3;
      } else {
        newNumber = currentIndex - 3;
      }

      usingCards.shift(); // Remove o primeiro card
      usingCards.push(cards[currentIndex]); // Adiciona o próximo card ao final
    } else {
      // Lógica existente para voltar
      newNumber = currentIndex;

      if (currentIndex - 1 < 0) {
        currentIndex = 5;
      } else {
        currentIndex = currentIndex - 1;
      }

      if (currentIndex < 3 || newNumber == 0) {
        if (newNumber == 3) {
          auxiliarNumber = 0;
        } else {
          auxiliarNumber = newNumber + 3;
        }
      } else {
        auxiliarNumber = newNumber - 3;
      }

      usingCards.pop(); // Remove o último card
      usingCards.unshift(cards[auxiliarNumber]); // Adiciona o card anterior no início
    }

    carousel.innerHTML = btn_left + usingCards.join('') + btn_right;

    const newCards = carousel.querySelectorAll('.service-item');

    if (direction > 0) {
        newCards[2].classList.add('enter-right', 'animating');
    } else {
        newCards[0].classList.add('enter-left', 'animating');
    }

    // Remove classes de animação após a transição
    const newCardsDom = carousel.querySelectorAll('.service-item');
    setTimeout(() => {
      newCardsDom.forEach(card => card.classList.remove('exit-left', 'exit-right', 'enter-left', 'enter-right', 'animating'));

      isCarouselAnimating = false;
    }, 500);
  }, 500);
}

// Verificar o tamanho da tela quando a página for carregada
window.addEventListener('load', toggleMedia);

// Verificar o tamanho da tela quando a janela for redimensionada
window.addEventListener('resize', toggleMedia);
