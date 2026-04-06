export interface Service {
  title: string;
  description: string;
  icon?: string;
}

export interface Testimonial {
  name: string;
  text: string;
  source?: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip?: string;
  neighborhood?: string;
}

export interface Social {
  platform: string;
  url: string;
}

export interface BusinessHours {
  day: string;
  hours: string;
}

export interface ImageAudit {
  filename: string;
  originalUrl: string;
  used: boolean;
  reason: string;
}

export const companyName = "Blanc Odontologia";

export const slogan = "Clínica Odontológica no Centro de Florianópolis";

export const heroTitle = "Aliviando dores, reconstruindo sorrisos e harmonizando faces!";

export const heroSubtitle =
  "Na Blanc você encontra excelentes dentistas para Implantes, Alinhadores Invisíveis, Lentes de Contato e Harmonização Orofacial.";

export const primaryCtaLabel = "(48) 99108-6854";

export const primaryCtaHref = "https://wa.me/5548991086854";

export const about = {
  title: "Excelência em Odontologia",
  content: [
    "Localizada no centro de Florianópolis, a Blanc Odontologia é referência em Implantes Dentários, Lentes de Contato, Ortodontia e Harmonização Orofacial.",
    "Nossos dentistas especialistas e clínicos gerais, devidamente registrados no CRO-SC, estão prontos para atender você com excelência.",
  ],
};

export const services: Service[] = [
  {
    title: "Estética Dental",
    description: "Lentes de Contato, Facetas em Resina e Clareamento.",
  },
  {
    title: "Implantes Dentários",
    description: "Implante unitário e Prótese Protocolo.",
  },
  {
    title: "Ortodontia (Aparelhos)",
    description: "Alinhadores Invisíveis e Aparelhos estéticos/metálicos.",
  },
  {
    title: "Odontopediatria",
    description: "Cuidado especializado para crianças e Ortopedia Infantil.",
  },
  {
    title: "Clínico Geral e Prevenção",
    description: "Check-up, Limpeza Dental, Restaurações e Tratamento de Gengiva.",
  },
  {
    title: "Harmonização Orofacial",
    description: "Botox terapêutico e Preenchimento com Ácido Hialurônico.",
  },
  {
    title: "Tratamentos Especializados",
    description: "Tratamento de Canal (Endodontia) e Cirurgias (Extração de Siso).",
  },
];

export const insurancePartners = [
  "Unimed Odonto",
  "Uniodonto",
  "SulAmérica",
  "Amil Dental",
  "Bradesco Dental",
  "Porto Seguro",
  "Hapvida",
  "Care Plus",
  "Metlife",
  "Dentaluni",
  "Odontológico",
  "Aesp Odonto",
  "Athena Saúde",
  "Celos",
  "Cruz Dental",
  "Geap Saúde",
  "Ideal Odonto",
  "Inpao Dental",
  "Life Empresarial",
];

export const differentialTitle = "Por que escolher a Blanc Odontologia?";

export const differentials = [
  "Dentistas especialistas e clínicos gerais registrados no CRO-SC",
  "Atendimento humanizado e personalizado",
  "Estrutura moderna com tecnologia de ponta",
  "Localização privilegiada no centro de Florianópolis",
  "Aceitamos diversos planos odontológicos",
];

export const addresses: Address[] = [
  {
    street: "R. Bento Gonçalves, 183 - Sala 401",
    city: "Florianópolis",
    state: "SC",
    neighborhood: "Centro",
  },
];

export const phones = ["(48) 3030-4600"];

export const whatsapp = "(48) 99108-6854";

export const email = "";

export const socials: Social[] = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/blanc_odontologia_/",
  },
  {
    platform: "Google Maps",
    url: "https://www.google.com/maps/place/Blanc+Odontologia/data=!4m2!3m1!1s0x0:0xab4f40f69cd87c77?sa=X&ved=1t:2428&ictx=111",
  },
];

export const businessHours: BusinessHours[] = [
  { day: "Seg - Sex", hours: "8h às 19h" },
  { day: "Sáb", hours: "8h às 13h" }
];

export const areasServed = ["Florianópolis", "Centro de Florianópolis"];

export const seoTitle = "Blanc Odontologia Clínica Odontológica | Dentista em Florianópolis";

export const seoDescription =
  "Localizada no centro de Florianópolis. Somos referência em Implantes Dentários, Lentes de Contato, Ortodontia e HOF. Agende sua avaliação!";

export const imageAudit: ImageAudit[] = [
  {
    filename: "Estetica-Dental-Lentes-de-Contato-Facetas-em-Resina-e-Clareamento.png",
    originalUrl: "https://blancodontologia.com/wp-content/uploads/2025/11/Estetica-Dental-Lentes-de-Contato-Facetas-em-Resina-e-Clareamento.-Dentista-Centro-Florianopolis.png",
    used: true,
    reason: "Imagem principal de estética dental - alta qualidade, relevante para o serviço",
  },
  {
    filename: "Implantes-Dentarios-Recupere-seusorriso.png",
    originalUrl: "https://blancodontologia.com/wp-content/uploads/2025/11/Implantes-Dentarios-Recupere-seusorriso.-Implante-unitario-e-Protese-Protocolo.-Dentista-Centro-Florianopolis.png",
    used: true,
    reason: "Imagem principal de implantes - alta qualidade, relevante para o serviço",
  },
  {
    filename: "Ortodontia-Aparelhos-Alinhadores-Invisiveis.png",
    originalUrl: "https://blancodontologia.com/wp-content/uploads/2025/11/Ortodontia-Aparelhos-Alinhadores-Invisiveis-e-Aparelhos-esteticos_metalicos.-Dentista-Centro-Florianopolis.png",
    used: true,
    reason: "Imagem principal de ortodontia - alta qualidade, relevante para o serviço",
  },
  {
    filename: "Odontopediatria-Cuidado-especializado-para-criancas.png",
    originalUrl: "https://blancodontologia.com/wp-content/uploads/2025/11/Odontopediatria-Cuidado-especializado-para-criancas-e-Cuidado-especializado-para-criancas-e-Ortopedia-Infantil.-Dentista-Centro-Florianopolis.png",
    used: true,
    reason: "Imagem de odontopediatria - relevante para o serviço",
  },
  {
    filename: "Clinico-Geral-e-Prevencao-Check-up.png",
    originalUrl: "https://blancodontologia.com/wp-content/uploads/2025/11/Clinico-Geral-e-Prevencao-Check-up-Limpeza-Dental-Restauracoes-e-Tratamento-de-Gengiva.-Dentista-Centro-Florianopolis.png",
    used: true,
    reason: "Imagem de clínico geral - relevante para o serviço",
  },
  {
    filename: "Harmonizacao-Orofacial-Botox.png",
    originalUrl: "https://blancodontologia.com/wp-content/uploads/2025/11/Harmonizacao-Orofacial-Botox-terapeutico-e-Preenchimento-com-Acido-Hialuronico.-Dentista-Centro-Florianopolis.png",
    used: true,
    reason: "Imagem de harmonização orofacial - relevante para o serviço",
  },
  {
    filename: "Tratamentos-Especializados-Tratamento-de-Canal.png",
    originalUrl: "https://blancodontologia.com/wp-content/uploads/2025/11/Tratamentos-Especializados-Tratamento-de-Canal-Endodontia-e-Cirurgias-Extracao-de-Siso.-Dentista-Centro-Florianopolis.png",
    used: true,
    reason: "Imagem de tratamentos especializados - relevante para o serviço",
  },
  {
    filename: "Clinica-Odontologica-Blanc-Dentista-Centro-Florianopolis.png",
    originalUrl: "https://blancodontologia.com/wp-content/uploads/2025/11/Clinica-Odontologica-Blanc-Dentista-Centro-Florianopolis.png",
    used: true,
    reason: "Imagem da clínica/fachada para seção sobre",
  },
  {
    filename: "Design-sem-nome-3-150x150.png",
    originalUrl: "https://blancodontologia.com/wp-content/uploads/2025/11/Design-sem-nome-3-150x150.png",
    used: true,
    reason: "Logo/favicon da clínica",
  },
];

export const missingData: string[] = [
  "Horário de funcionamento não encontrado no site",
  "E-mail de contato não encontrado no site",
  "Endereço completo com número não encontrado no site",
  "Depoimentos de pacientes não encontrados no site",
];

export const notes: string[] = [
  "Site original WordPress com Elementor",
  "Domain registrado há bastante tempo",
  "Já tentaram atualizar o site mas nunca fica bom",
  "Boa oportunidade de melhoria",
  "Subnicho identificado: Premium/Estética (implantes, lentes de contato, HOF)",
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "Onde a clínica está localizada?",
    answer: "A Blanc Odontologia está localizada em um ponto privilegiado no Centro de Florianópolis, de fácil acesso e com estacionamentos próximos para seu conforto e segurança."
  },
  {
    question: "Vocês atendem por convênios odontológicos?",
    answer: "Trabalhamos com os principais planos e convênios odontológicos do mercado para facilitar seu tratamento. Verifique a nossa lista de planos conveniados ou entre em contato via WhatsApp para confirmar a cobertura do seu plano."
  },
  {
    question: "Como funciona a avaliação para Implantes e Lentes de Contato?",
    answer: "Nossa primeira consulta para linhas estéticas ou de implantes é um momento de mapeamento minucioso do seu sorriso. Nossos especialistas farão uma avaliação clínica, análise de imagem e desenharão um plano de tratamento personalizado para você."
  },
  {
    question: "Quais especialistas atendem na clínica?",
    answer: "Contamos com uma equipe multidisciplinar certificada e registrada no CRO-SC. Nossa equipe tem experientes Especialistas e Clínicos Gerais em Ortodontia (Aparelhos invisíveis), Implantodontia, Odontopediatria, Harmonização Orofacial e Estética."
  },
  {
    question: "Como faço para agendar minha consulta?",
    answer: "A forma mais rápida de agendar é clicando em nosso botão de WhatsApp nesta página. Nossa equipe de relacionamento fará o agendamento no melhor horário para sua rotina, garantindo um atendimento exclusivo."
  }
];