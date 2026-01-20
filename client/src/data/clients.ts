export interface Campaign {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  description: string;
  sendBefore: number; // dias antes
  offers: string[];
  scripts: Script[];
}

export interface Script {
  id: string;
  title: string;
  content: string;
}

export interface Client {
  id: string;
  name: string;
  segment: string;
  description: string;
  color: string;
  campaigns: Campaign[];
}

export const clients: Client[] = [
   {
    id: "rdcpharma",
    name: "RDC Pharma",
    segment: "Farmácia de Manipulação",
    description: "Farmácia especializada em fórmulas personalizadas, suplementação e cosméticos manipulados",
    color: "from-red-500 to-red-600",
    campaigns: [
      {
        id: "rdcpharma-001",
        date: "2026-01-01",
        title: "Ano Novo - Detox e Renovação",
        description: "Comece o ano com saúde e bem-estar",
        sendBefore: 7,
        offers: [
          "Kit Detox com 30% de desconto",
          "Consulta com farmacêutico grátis",
          "Fórmula personalizada com 20% off"
        ],
        scripts: [
          {
            id: "rdcpharma-001-1",
            title: "Roteiro 1: Renovação",
            content: "Ano novo, corpo novo. Nossas fórmulas personalizadas ajudam você a começar 2026 com saúde."
          },
          {
            id: "rdcpharma-001-2",
            title: "Roteiro 2: Personalização",
            content: "Cada corpo é único. Nossas fórmulas são manipuladas especialmente para você."
          },
          {
            id: "rdcpharma-001-3",
            title: "Roteiro 3: Autoridade",
            content: "Farmacêutico consultivo. Converse com nossos especialistas e encontre a solução perfeita."
          }
        ]
      },
      {
        id: "rdcpharma-002",
        date: "2026-03-08",
        title: "Dia da Mulher - Beleza Personalizada",
        description: "Skincare e cosméticos sob medida para você",
        sendBefore: 7,
        offers: [
          "Skincare personalizado com 25% off",
          "Análise de pele gratuita",
          "Brinde: amostra de sérum premium"
        ],
        scripts: [
          {
            id: "rdcpharma-002-1",
            title: "Roteiro 1: Empoderamento",
            content: "Mulher que se cuida é mulher que se ama. Skincare personalizado para sua beleza única."
          },
          {
            id: "rdcpharma-002-2",
            title: "Roteiro 2: Confiança",
            content: "Pele bonita começa com os produtos certos. Nossas fórmulas são feitas para você."
          },
          {
            id: "rdcpharma-002-3",
            title: "Roteiro 3: Celebração",
            content: "Celebre o Dia da Mulher com produtos que valorizam sua beleza natural."
          }
        ]
      },
      {
        id: "rdcpharma-003",
        date: "2026-06-21",
        title: "Dia do Nutricionista - Suplementação",
        description: "Suplementos personalizados para sua saúde",
        sendBefore: 7,
        offers: [
          "Suplementos com 20% de desconto",
          "Consulta nutricional grátis",
          "Kit iniciante com 3 produtos"
        ],
        scripts: [
          {
            id: "rdcpharma-003-1",
            title: "Roteiro 1: Saúde",
            content: "Suplementação inteligente. Nossos produtos são formulados com base em análise individual."
          },
          {
            id: "rdcpharma-003-2",
            title: "Roteiro 2: Eficácia",
            content: "Resultados reais. Suplementos que funcionam porque são feitos para você."
          },
          {
            id: "rdcpharma-003-3",
            title: "Roteiro 3: Confiança",
            content: "Confiança de quem conhece. Farmacêuticos especializados cuidando da sua saúde."
          }
        ]
      },
      {
        id: "rdcpharma-004",
        date: "2026-09-22",
        title: "Primavera - Renovação de Skincare",
        description: "Prepare sua pele para a estação mais linda do ano",
        sendBefore: 30,
        offers: [
          "Kit Primavera com 30% off",
          "Análise de pele com desconto",
          "Fórmula seasonal personalizada"
        ],
        scripts: [
          {
            id: "rdcpharma-004-1",
            title: "Roteiro 1: Renovação",
            content: "Primavera é estação de renovação. Renove sua rotina de skincare com nossas fórmulas."
          },
          {
            id: "rdcpharma-004-2",
            title: "Roteiro 2: Natureza",
            content: "Ingredientes naturais, resultados científicos. Skincare que respeita sua pele e a natureza."
          },
          {
            id: "rdcpharma-004-3",
            title: "Roteiro 3: Beleza",
            content: "Brilhe nesta primavera. Pele radiante com produtos manipulados especialmente para você."
          }
        ]
      },
      {
        id: "rdcpharma-005",
        date: "2026-11-15",
        title: "Black Friday - Saúde em Promoção",
        description: "Os melhores preços do ano em fórmulas e cosméticos",
        sendBefore: 30,
        offers: [
          "Desconto de até 40% em produtos",
          "Kits promocionais com economia",
          "Frete grátis em compras acima de R$200"
        ],
        scripts: [
          {
            id: "rdcpharma-005-1",
            title: "Roteiro 1: Oportunidade",
            content: "Black Friday RDC: os melhores preços do ano em saúde e beleza personalizada."
          },
          {
            id: "rdcpharma-005-2",
            title: "Roteiro 2: Economia",
            content: "Economize em saúde. Fórmulas personalizadas com até 40% de desconto."
          },
          {
            id: "rdcpharma-005-3",
            title: "Roteiro 3: Urgência",
            content: "Estoque limitado! Não perca a Black Friday RDC. Aproveite enquanto durar."
          }
        ]
      },
      {
        id: "rdcpharma-006",
        date: "2026-12-25",
        title: "Natal - Presentes de Bem-estar",
        description: "Presenteie quem você ama com saúde e beleza",
        sendBefore: 30,
        offers: [
          "Kits de presente com 25% off",
          "Embalagem especial de Natal grátis",
          "Cartão personalizado incluído"
        ],
        scripts: [
          {
            id: "rdcpharma-006-1",
            title: "Roteiro 1: Presente",
            content: "O presente que cuida. Kits de saúde e beleza para quem você ama."
          },
          {
            id: "rdcpharma-006-2",
            title: "Roteiro 2: Cuidado",
            content: "Presenteie com cuidado. Produtos que mostram que você se importa com a saúde deles."
          },
          {
            id: "rdcpharma-006-3",
            title: "Roteiro 3: Magia",
            content: "Natal é magia. Presenteie com produtos que transformam vidas."
          }
        ]
      }
    ]
  },
  {
    id: "squadclinic",
    name: "Squad Clinic",
    segment: "Clínica Integrada / Estética",
    description: "Clínica premium com foco em estética avançada, protocolos corporais e bem-estar",
    color: "from-red-600 to-red-700",
    campaigns: [
      {
        id: "squadclinic-001",
        date: "2026-01-01",
        title: "Ano Novo - Resoluções Estéticas",
        description: "Comece 2026 com confiança e autoestima",
        sendBefore: 7,
        offers: [
          "Avaliação gratuita de protocolos",
          "Desconto de 20% no primeiro procedimento",
          "Plano anual com 15% off"
        ],
        scripts: [
          {
            id: "squadclinic-001-1",
            title: "Roteiro 1: Transformação",
            content: "Ano novo, você novo. Nossos protocolos ajudam você a alcançar seus objetivos estéticos."
          },
          {
            id: "squadclinic-001-2",
            title: "Roteiro 2: Confiança",
            content: "Confiança vem de dentro. Procedimentos que realçam sua beleza natural."
          },
          {
            id: "squadclinic-001-3",
            title: "Roteiro 3: Segurança",
            content: "Segurança em primeiro lugar. Todos os procedimentos com respaldo clínico e profissional."
          }
        ]
      },
      {
        id: "squadclinic-002",
        date: "2026-03-08",
        title: "Dia da Mulher - Beleza Empoderada",
        description: "Procedimentos especiais para mulheres que se amam",
        sendBefore: 7,
        offers: [
          "Desconto de 25% em procedimentos",
          "Consulta com especialista grátis",
          "Brinde: sessão de limpeza de pele"
        ],
        scripts: [
          {
            id: "squadclinic-002-1",
            title: "Roteiro 1: Empoderamento",
            content: "Mulher que se cuida é mulher que se ama. Procedimentos que realçam sua beleza."
          },
          {
            id: "squadclinic-002-2",
            title: "Roteiro 2: Autoestima",
            content: "Autoestima em alta. Protocolos que transformam e empoderam."
          },
          {
            id: "squadclinic-002-3",
            title: "Roteiro 3: Celebração",
            content: "Celebre o Dia da Mulher com procedimentos que valorizam você."
          }
        ]
      },
      {
        id: "squadclinic-003",
        date: "2026-06-21",
        title: "Inverno - Protocolos Corporais",
        description: "Prepare seu corpo para as estações",
        sendBefore: 30,
        offers: [
          "Pacote de 4 sessões com 30% off",
          "Avaliação corporal gratuita",
          "Plano customizado sem custo"
        ],
        scripts: [
          {
            id: "squadclinic-003-1",
            title: "Roteiro 1: Preparação",
            content: "Prepare seu corpo. Protocolos que definem, tonificam e transformam."
          },
          {
            id: "squadclinic-003-2",
            title: "Roteiro 2: Resultados",
            content: "Resultados visíveis. Procedimentos com tecnologia de ponta e respaldo científico."
          },
          {
            id: "squadclinic-003-3",
            title: "Roteiro 3: Bem-estar",
            content: "Bem-estar integral. Cuidamos de você de forma segura e profissional."
          }
        ]
      },
      {
        id: "squadclinic-004",
        date: "2026-09-22",
        title: "Primavera - Preparação para Verão",
        description: "Comece a se preparar para o verão",
        sendBefore: 30,
        offers: [
          "Pacote Verão com 25% de desconto",
          "Sessões ilimitadas por 90 dias",
          "Consulta de estética grátis"
        ],
        scripts: [
          {
            id: "squadclinic-004-1",
            title: "Roteiro 1: Preparação",
            content: "Verão chegando. Comece agora a se preparar com nossos protocolos especiais."
          },
          {
            id: "squadclinic-004-2",
            title: "Roteiro 2: Confiança",
            content: "Confiança para o verão. Procedimentos que definem e realçam sua beleza."
          },
          {
            id: "squadclinic-004-3",
            title: "Roteiro 3: Transformação",
            content: "Transformação garantida. Comece agora e veja os resultados até o verão."
          }
        ]
      },
      {
        id: "squadclinic-005",
        date: "2026-11-15",
        title: "Black Friday - Estética em Promoção",
        description: "Maior promoção do ano em procedimentos",
        sendBefore: 30,
        offers: [
          "Desconto de até 35% em procedimentos",
          "Pacotes com economia de até R$3000",
          "Parcelamento em até 12x sem juros"
        ],
        scripts: [
          {
            id: "squadclinic-005-1",
            title: "Roteiro 1: Oportunidade",
            content: "Black Friday Squad: os melhores preços do ano em procedimentos estéticos."
          },
          {
            id: "squadclinic-005-2",
            title: "Roteiro 2: Economia",
            content: "Economize em beleza. Procedimentos com até 35% de desconto."
          },
          {
            id: "squadclinic-005-3",
            title: "Roteiro 3: Urgência",
            content: "Vagas limitadas! Não perca a Black Friday Squad. Agende agora."
          }
        ]
      },
      {
        id: "squadclinic-006",
        date: "2026-12-25",
        title: "Natal - Presentes de Bem-estar",
        description: "Presenteie com saúde e beleza",
        sendBefore: 30,
        offers: [
          "Gift cards com 20% de bônus",
          "Pacotes de presente especiais",
          "Embalagem premium grátis"
        ],
        scripts: [
          {
            id: "squadclinic-006-1",
            title: "Roteiro 1: Presente",
            content: "O presente que transforma. Gift cards Squad para quem você ama."
          },
          {
            id: "squadclinic-006-2",
            title: "Roteiro 2: Cuidado",
            content: "Presenteie com cuidado. Procedimentos que mostram que você se importa."
          },
          {
            id: "squadclinic-006-3",
            title: "Roteiro 3: Magia",
            content: "Natal é magia. Presenteie com procedimentos que transformam vidas."
          }
        ]
      }
    ]
  },
  {
    id: "viamed",
    name: "ViaMed",
    segment: "Distribuidora Hospitalar",
    description: "Distribuidora de materiais hospitalares e clínicos com atendimento B2B",
    color: "from-red-500 to-red-600",
    campaigns: [
      {
        id: "viamed-001",
        date: "2026-01-01",
        title: "Ano Novo - Reposição de Estoque",
        description: "Comece o ano com estoque completo",
        sendBefore: 7,
        offers: [
          "Desconto de 15% em compras acima de R$5000",
          "Frete grátis para pedidos mínimos",
          "Prazo de pagamento estendido"
        ],
        scripts: [
          {
            id: "viamed-001-1",
            title: "Roteiro 1: Logística",
            content: "Ano novo, estoque novo. Reposição rápida e confiável de todos os produtos."
          },
          {
            id: "viamed-001-2",
            title: "Roteiro 2: Confiabilidade",
            content: "Confiabilidade que você merece. Entrega rápida e produtos de qualidade garantida."
          },
          {
            id: "viamed-001-3",
            title: "Roteiro 3: Parceria",
            content: "Somos seus parceiros. Suporte técnico e atendimento dedicado para sua clínica."
          }
        ]
      },
      {
        id: "viamed-002",
        date: "2026-03-15",
        title: "Dia do Consumidor - Promoções B2B",
        description: "Ofertas especiais para clínicas e hospitais",
        sendBefore: 7,
        offers: [
          "Desconto de 20% em produtos selecionados",
          "Consulta de estoque sem custo",
          "Suporte técnico prioritário"
        ],
        scripts: [
          {
            id: "viamed-002-1",
            title: "Roteiro 1: Qualidade",
            content: "Qualidade garantida. Todos os produtos com certificação e garantia."
          },
          {
            id: "viamed-002-2",
            title: "Roteiro 2: Confiança",
            content: "Confiança de quem conhece. Distribuidor confiável há anos no mercado."
          },
          {
            id: "viamed-002-3",
            title: "Roteiro 3: Economia",
            content: "Economize em abastecimento. Preços competitivos sem perder qualidade."
          }
        ]
      },
      {
        id: "viamed-003",
        date: "2026-05-12",
        title: "Dia do Enfermeiro - Produtos Especiais",
        description: "Homenagem aos profissionais de enfermagem",
        sendBefore: 7,
        offers: [
          "Desconto de 18% em produtos de enfermagem",
          "Kits especiais com economia",
          "Brinde: material de consumo grátis"
        ],
        scripts: [
          {
            id: "viamed-003-1",
            title: "Roteiro 1: Respeito",
            content: "Respeito aos profissionais. Produtos que facilitam o trabalho dos enfermeiros."
          },
          {
            id: "viamed-003-2",
            title: "Roteiro 2: Qualidade",
            content: "Qualidade para quem cuida. Materiais que garantem segurança e conforto."
          },
          {
            id: "viamed-003-3",
            title: "Roteiro 3: Parceria",
            content: "Parceria com quem cuida. Suporte técnico e produtos confiáveis."
          }
        ]
      },
      {
        id: "viamed-004",
        date: "2026-06-19",
        title: "Dia do Médico - Parcerias Médicas",
        description: "Produtos e serviços para profissionais médicos",
        sendBefore: 7,
        offers: [
          "Desconto de 20% em equipamentos",
          "Consultoria técnica grátis",
          "Programa de fidelização exclusivo"
        ],
        scripts: [
          {
            id: "viamed-004-1",
            title: "Roteiro 1: Profissionalismo",
            content: "Profissionalismo acima de tudo. Produtos que atendem aos padrões mais altos."
          },
          {
            id: "viamed-004-2",
            title: "Roteiro 2: Confiabilidade",
            content: "Confiabilidade para diagnósticos precisos. Equipamentos de qualidade superior."
          },
          {
            id: "viamed-004-3",
            title: "Roteiro 3: Parceria",
            content: "Parceria com profissionais. Suporte técnico e atendimento prioritário."
          }
        ]
      },
      {
        id: "viamed-005",
        date: "2026-11-15",
        title: "Black Friday - Abastecimento em Promoção",
        description: "Maior promoção do ano para clínicas e hospitais",
        sendBefore: 30,
        offers: [
          "Desconto de até 35% em produtos",
          "Frete grátis em compras acima de R$10000",
          "Prazo de pagamento estendido"
        ],
        scripts: [
          {
            id: "viamed-005-1",
            title: "Roteiro 1: Oportunidade",
            content: "Black Friday ViaMed: os melhores preços do ano em abastecimento hospitalar."
          },
          {
            id: "viamed-005-2",
            title: "Roteiro 2: Economia",
            content: "Economize em abastecimento. Produtos com até 35% de desconto."
          },
          {
            id: "viamed-005-3",
            title: "Roteiro 3: Urgência",
            content: "Estoque limitado! Não perca a Black Friday ViaMed. Aproveite enquanto durar."
          }
        ]
      },
      {
        id: "viamed-006",
        date: "2026-12-25",
        title: "Natal - Presentes Corporativos",
        description: "Presentes e brindes para clientes e parceiros",
        sendBefore: 30,
        offers: [
          "Kits corporativos com 25% off",
          "Embalagem especial de Natal grátis",
          "Entrega rápida garantida"
        ],
        scripts: [
          {
            id: "viamed-006-1",
            title: "Roteiro 1: Gratidão",
            content: "Gratidão aos nossos parceiros. Presentes especiais para clientes VIP."
          },
          {
            id: "viamed-006-2",
            title: "Roteiro 2: Relacionamento",
            content: "Fortalecendo relacionamentos. Presentes que mostram nosso apreço."
          },
          {
            id: "viamed-006-3",
            title: "Roteiro 3: Magia",
            content: "Natal é magia. Presenteie seus parceiros com produtos de qualidade."
          }
        ]
      }
    ]
  },
  {
    id: "duzzi",
    name: "Duzzi Móveis",
    segment: "Móveis e Decoração",
    description: "Loja tradicional de móveis e decoração premium com 34 anos de mercado",
    color: "from-red-600 to-red-700",
    campaigns: [
      {
        id: "duzzi-001",
        date: "2026-01-01",
        title: "Ano Novo - Renovação de Ambientes",
        description: "Comece o ano renovando seus espaços",
        sendBefore: 7,
        offers: [
          "Desconto de 20% em móveis selecionados",
          "Frete e montagem grátis",
          "Parcelamento em até 24x"
        ],
        scripts: [
          {
            id: "duzzi-001-1",
            title: "Roteiro 1: Renovação",
            content: "Ano novo, casa nova. Renove seus ambientes com móveis que combinam conforto e estilo."
          },
          {
            id: "duzzi-001-2",
            title: "Roteiro 2: Conforto",
            content: "Conforto que você merece. Móveis de qualidade para sua casa."
          },
          {
            id: "duzzi-001-3",
            title: "Roteiro 3: Estilo",
            content: "Estilo que marca presença. Decoração que reflete sua personalidade."
          }
        ]
      },
      {
        id: "duzzi-002",
        date: "2026-03-08",
        title: "Dia da Mulher - Decoração Feminina",
        description: "Ambientes que celebram a feminilidade",
        sendBefore: 7,
        offers: [
          "Desconto de 25% em coleção feminina",
          "Consultoria de design grátis",
          "Brinde: almofadas decorativas"
        ],
        scripts: [
          {
            id: "duzzi-002-1",
            title: "Roteiro 1: Empoderamento",
            content: "Mulher que se cuida é mulher que se ama. Ambientes que celebram você."
          },
          {
            id: "duzzi-002-2",
            title: "Roteiro 2: Elegância",
            content: "Elegância em cada detalhe. Móveis que realçam sua beleza e personalidade."
          },
          {
            id: "duzzi-002-3",
            title: "Roteiro 3: Celebração",
            content: "Celebre o Dia da Mulher com ambientes que refletem seu estilo."
          }
        ]
      },
      {
        id: "duzzi-003",
        date: "2026-03-21",
        title: "Primavera - Renovação Primaveril",
        description: "Prepare seus ambientes para a primavera",
        sendBefore: 30,
        offers: [
          "Desconto de 22% em coleção primavera",
          "Consultoria de design sem custo",
          "Entrega rápida garantida"
        ],
        scripts: [
          {
            id: "duzzi-003-1",
            title: "Roteiro 1: Renovação",
            content: "Primavera é estação de renovação. Renove seus ambientes com cores e estilos frescos."
          },
          {
            id: "duzzi-003-2",
            title: "Roteiro 2: Luz",
            content: "Luz e leveza. Móveis que trazem claridade e alegria para seus espaços."
          },
          {
            id: "duzzi-003-3",
            title: "Roteiro 3: Beleza",
            content: "Beleza natural. Decoração que celebra a estação mais linda do ano."
          }
        ]
      },
      {
        id: "duzzi-004",
        date: "2026-05-10",
        title: "Dia das Mães - Presentes Decorativos",
        description: "Presentes que decoram e aquecem",
        sendBefore: 7,
        offers: [
          "Desconto de 20% em presentes",
          "Embalagem especial grátis",
          "Cartão personalizado incluído"
        ],
        scripts: [
          {
            id: "duzzi-004-1",
            title: "Roteiro 1: Amor",
            content: "Amor que decora. Presentes que mostram o quanto você se importa."
          },
          {
            id: "duzzi-004-2",
            title: "Roteiro 2: Conforto",
            content: "Conforto e carinho. Móveis e decoração para quem você ama."
          },
          {
            id: "duzzi-004-3",
            title: "Roteiro 3: Celebração",
            content: "Celebre o Dia das Mães com presentes que transformam ambientes."
          }
        ]
      },
      {
        id: "duzzi-005",
        date: "2026-06-21",
        title: "Inverno - Aconchego Invernal",
        description: "Crie ambientes aconchegantes para o inverno",
        sendBefore: 30,
        offers: [
          "Desconto de 18% em móveis inverno",
          "Consultoria de design grátis",
          "Frete grátis em compras acima de R$3000"
        ],
        scripts: [
          {
            id: "duzzi-005-1",
            title: "Roteiro 1: Aconchego",
            content: "Inverno pede aconchego. Móveis que trazem calor e conforto para sua casa."
          },
          {
            id: "duzzi-005-2",
            title: "Roteiro 2: Conforto",
            content: "Conforto em primeiro lugar. Móveis que abraçam você no frio."
          },
          {
            id: "duzzi-005-3",
            title: "Roteiro 3: Beleza",
            content: "Beleza invernal. Decoração que traz elegância e calor para seus espaços."
          }
        ]
      },
      {
        id: "duzzi-006",
        date: "2026-09-22",
        title: "Primavera - Preparação para Verão",
        description: "Prepare seus ambientes para o verão",
        sendBefore: 30,
        offers: [
          "Desconto de 25% em coleção verão",
          "Consultoria de design sem custo",
          "Parcelamento em até 18x"
        ],
        scripts: [
          {
            id: "duzzi-006-1",
            title: "Roteiro 1: Preparação",
            content: "Verão chegando. Prepare seus ambientes com móveis e decoração frescos."
          },
          {
            id: "duzzi-006-2",
            title: "Roteiro 2: Leveza",
            content: "Leveza e elegância. Móveis que trazem claridade para o verão."
          },
          {
            id: "duzzi-006-3",
            title: "Roteiro 3: Transformação",
            content: "Transforme seus espaços. Decoração que celebra a estação mais quente do ano."
          }
        ]
      },
      {
        id: "duzzi-007",
        date: "2026-11-15",
        title: "Black Friday - Móveis em Promoção",
        description: "Maior promoção do ano em móveis e decoração",
        sendBefore: 30,
        offers: [
          "Desconto de até 40% em móveis",
          "Frete e montagem grátis",
          "Parcelamento em até 36x"
        ],
        scripts: [
          {
            id: "duzzi-007-1",
            title: "Roteiro 1: Oportunidade",
            content: "Black Friday Duzzi: os melhores preços do ano em móveis e decoração."
          },
          {
            id: "duzzi-007-2",
            title: "Roteiro 2: Economia",
            content: "Economize em decoração. Móveis com até 40% de desconto."
          },
          {
            id: "duzzi-007-3",
            title: "Roteiro 3: Urgência",
            content: "Estoque limitado! Não perca a Black Friday Duzzi. Aproveite enquanto durar."
          }
        ]
      },
      {
        id: "duzzi-008",
        date: "2026-12-25",
        title: "Natal - Decoração Natalina",
        description: "Prepare sua casa para o Natal",
        sendBefore: 30,
        offers: [
          "Desconto de 20% em coleção Natal",
          "Embalagem especial de Natal grátis",
          "Entrega rápida garantida"
        ],
        scripts: [
          {
            id: "duzzi-008-1",
            title: "Roteiro 1: Magia",
            content: "Natal é magia. Transforme sua casa com decoração que celebra a estação."
          },
          {
            id: "duzzi-008-2",
            title: "Roteiro 2: Aconchego",
            content: "Aconchego natalino. Móveis e decoração que trazem calor familiar."
          },
          {
            id: "duzzi-008-3",
            title: "Roteiro 3: Celebração",
            content: "Celebre o Natal com ambientes que refletem a magia da estação."
          }
        ]
      }
    ]
  },
  {
    id: "saojao",
    name: "São João Materiais",
    segment: "Material de Construção",
    description: "Loja de materiais de construção com foco em obras, reformas e manutenção",
    color: "from-red-500 to-red-600",
    campaigns: [
      {
        id: "saojao-001",
        date: "2026-01-01",
        title: "Ano Novo - Reformas de Ano Novo",
        description: "Comece o ano com reforma e renovação",
        sendBefore: 7,
        offers: [
          "Desconto de 15% em materiais selecionados",
          "Frete grátis para compras acima de R$500",
          "Consultoria de obra sem custo"
        ],
        scripts: [
          {
            id: "saojao-001-1",
            title: "Roteiro 1: Renovação",
            content: "Ano novo, casa nova. Comece 2026 com uma reforma que transforma seu espaço."
          },
          {
            id: "saojao-001-2",
            title: "Roteiro 2: Qualidade",
            content: "Qualidade garantida. Materiais de primeira linha para sua obra."
          },
          {
            id: "saojao-001-3",
            title: "Roteiro 3: Economia",
            content: "Economize em reforma. Preços competitivos sem perder qualidade."
          }
        ]
      },
      {
        id: "saojao-002",
        date: "2026-03-21",
        title: "Primavera - Obras e Reformas",
        description: "Aproveite a primavera para reformar",
        sendBefore: 30,
        offers: [
          "Desconto de 20% em materiais de construção",
          "Frete grátis em compras acima de R$1000",
          "Consultoria técnica grátis"
        ],
        scripts: [
          {
            id: "saojao-002-1",
            title: "Roteiro 1: Oportunidade",
            content: "Primavera é estação de obras. Aproveite o clima para reformar sua casa."
          },
          {
            id: "saojao-002-2",
            title: "Roteiro 2: Qualidade",
            content: "Qualidade em cada material. Produtos que garantem durabilidade."
          },
          {
            id: "saojao-002-3",
            title: "Roteiro 3: Profissionalismo",
            content: "Profissionalismo em tudo. Consultoria técnica para sua obra."
          }
        ]
      },
      {
        id: "saojao-003",
        date: "2026-06-21",
        title: "Inverno - Manutenção Invernal",
        description: "Prepare sua casa para o inverno",
        sendBefore: 30,
        offers: [
          "Desconto de 18% em materiais de manutenção",
          "Frete grátis em compras acima de R$800",
          "Consultoria sem custo"
        ],
        scripts: [
          {
            id: "saojao-003-1",
            title: "Roteiro 1: Preparação",
            content: "Inverno chegando. Prepare sua casa com materiais de qualidade."
          },
          {
            id: "saojao-003-2",
            title: "Roteiro 2: Proteção",
            content: "Proteção contra o frio. Materiais que isolam e protegem."
          },
          {
            id: "saojao-003-3",
            title: "Roteiro 3: Conforto",
            content: "Conforto garantido. Manutenção que deixa sua casa pronta para o inverno."
          }
        ]
      },
      {
        id: "saojao-004",
        date: "2026-09-22",
        title: "Primavera - Preparação para Verão",
        description: "Prepare sua casa para o verão",
        sendBefore: 30,
        offers: [
          "Desconto de 22% em materiais selecionados",
          "Frete grátis em compras acima de R$1000",
          "Consultoria técnica grátis"
        ],
        scripts: [
          {
            id: "saojao-004-1",
            title: "Roteiro 1: Preparação",
            content: "Verão chegando. Prepare sua casa com materiais de qualidade."
          },
          {
            id: "saojao-004-2",
            title: "Roteiro 2: Renovação",
            content: "Renovação total. Materiais que transformam sua casa."
          },
          {
            id: "saojao-004-3",
            title: "Roteiro 3: Conforto",
            content: "Conforto no verão. Preparação completa para a estação mais quente."
          }
        ]
      },
      {
        id: "saojao-005",
        date: "2026-11-15",
        title: "Black Friday - Construção em Promoção",
        description: "Maior promoção do ano em materiais",
        sendBefore: 30,
        offers: [
          "Desconto de até 35% em materiais",
          "Frete grátis em compras acima de R$2000",
          "Parcelamento em até 12x"
        ],
        scripts: [
          {
            id: "saojao-005-1",
            title: "Roteiro 1: Oportunidade",
            content: "Black Friday São João: os melhores preços do ano em materiais de construção."
          },
          {
            id: "saojao-005-2",
            title: "Roteiro 2: Economia",
            content: "Economize em reforma. Materiais com até 35% de desconto."
          },
          {
            id: "saojao-005-3",
            title: "Roteiro 3: Urgência",
            content: "Estoque limitado! Não perca a Black Friday São João. Aproveite enquanto durar."
          }
        ]
      },
      {
        id: "saojao-006",
        date: "2026-12-25",
        title: "Natal - Presentes e Reformas",
        description: "Presenteie com reforma ou materiais",
        sendBefore: 30,
        offers: [
          "Desconto de 15% em kits de presentes",
          "Embalagem especial grátis",
          "Entrega rápida garantida"
        ],
        scripts: [
          {
            id: "saojao-006-1",
            title: "Roteiro 1: Presente",
            content: "Natal é época de presentes. Presenteie com uma reforma que transforma."
          },
          {
            id: "saojao-006-2",
            title: "Roteiro 2: Transformação",
            content: "Transformação garantida. Materiais de qualidade para sua obra."
          },
          {
            id: "saojao-006-3",
            title: "Roteiro 3: Magia",
            content: "Natal é magia. Presenteie com uma reforma que muda vidas."
          }
        ]
      }
    ]
  },
  {
    id: "appeal",
    name: "Appeal Móveis",
    segment: "Móveis Planejados",
    description: "Especializada em móveis planejados sob medida para todos os ambientes",
    color: "from-amber-600 to-amber-700",
    campaigns: [
      {
        id: "appeal-001",
        date: "2026-01-15",
        title: "Casa Nova - Início de Ano",
        description: "Planeje seus ambientes para começar o ano com tudo organizado",
        sendBefore: 7,
        offers: [],
        scripts: []
      },
      {
        id: "appeal-002",
        date: "2026-03-15",
        title: "Dia do Consumidor",
        description: "Condições especiais para planejar seus móveis",
        sendBefore: 7,
        offers: [],
        scripts: []
      },
      {
        id: "appeal-003",
        date: "2026-05-10",
        title: "Dia das Mães",
        description: "Presenteie com ambientes planejados",
        sendBefore: 30,
        offers: [],
        scripts: []
      },
      {
        id: "appeal-004",
        date: "2026-08-09",
        title: "Dia dos Pais",
        description: "Escritório e espaços masculinos sob medida",
        sendBefore: 30,
        offers: [],
        scripts: []
      },
      {
        id: "appeal-005",
        date: "2026-11-27",
        title: "Black Friday",
        description: "Descontos especiais em projetos planejados",
        sendBefore: 30,
        offers: [],
        scripts: []
      },
      {
        id: "appeal-006",
        date: "2026-12-25",
        title: "Natal",
        description: "Renove sua casa para as festas",
        sendBefore: 30,
        offers: [],
        scripts: []
      }
    ]
  },
  {
    id: "trajeton",
    name: "Trajeton Magazine",
    segment: "Varejo Multisegmento",
    description: "Loja de departamentos com roupas, material escolar, itens de casa e muito mais",
    color: "from-blue-600 to-blue-700",
    campaigns: [
      {
        id: "trajeton-001",
        date: "2026-01-15",
        title: "Volta às Aulas",
        description: "Tudo para o ano letivo: material escolar, uniformes e mochilas",
        sendBefore: 7,
        offers: [],
        scripts: []
      },
      {
        id: "trajeton-002",
        date: "2026-03-15",
        title: "Dia do Consumidor",
        description: "Ofertas em todos os departamentos",
        sendBefore: 7,
        offers: [],
        scripts: []
      },
      {
        id: "trajeton-003",
        date: "2026-03-20",
        title: "Outono - Coleção Nova",
        description: "Roupas e acessórios para a nova estação",
        sendBefore: 7,
        offers: [],
        scripts: []
      },
      {
        id: "trajeton-004",
        date: "2026-05-10",
        title: "Dia das Mães",
        description: "Presentes especiais em todos os departamentos",
        sendBefore: 30,
        offers: [],
        scripts: []
      },
      {
        id: "trajeton-005",
        date: "2026-06-12",
        title: "Dia dos Namorados",
        description: "Presentes românticos e moda para o casal",
        sendBefore: 7,
        offers: [],
        scripts: []
      },
      {
        id: "trajeton-006",
        date: "2026-06-24",
        title: "Festa Junina",
        description: "Roupas típicas e decoração junina",
        sendBefore: 7,
        offers: [],
        scripts: []
      },
      {
        id: "trajeton-007",
        date: "2026-08-09",
        title: "Dia dos Pais",
        description: "Presentes masculinos: roupas, ferramentas e acessórios",
        sendBefore: 30,
        offers: [],
        scripts: []
      },
      {
        id: "trajeton-008",
        date: "2026-09-22",
        title: "Primavera - Coleção Nova",
        description: "Renove seu guarda-roupa e sua casa",
        sendBefore: 7,
        offers: [],
        scripts: []
      },
      {
        id: "trajeton-009",
        date: "2026-10-12",
        title: "Dia das Crianças",
        description: "Brinquedos, roupas e presentes infantis",
        sendBefore: 7,
        offers: [],
        scripts: []
      },
      {
        id: "trajeton-010",
        date: "2026-11-27",
        title: "Black Friday",
        description: "Descontos em todos os departamentos",
        sendBefore: 30,
        offers: [],
        scripts: []
      },
      {
        id: "trajeton-011",
        date: "2026-12-25",
        title: "Natal",
        description: "Presentes para toda a família",
        sendBefore: 30,
        offers: [],
        scripts: []
      }
    ]
  },
  {
    id: "oralsin",
    name: "Oral Sin",
    segment: "Clínica Odontológica",
    description: "Clínica odontológica completa com tratamentos estéticos e preventivos",
    color: "from-teal-600 to-teal-700",
    campaigns: [
      {
        id: "oralsin-001",
        date: "2026-01-15",
        title: "Ano Novo - Sorriso Novo",
        description: "Comece 2026 com um sorriso renovado",
        sendBefore: 7,
        offers: [],
        scripts: []
      },
      {
        id: "oralsin-002",
        date: "2026-03-08",
        title: "Dia da Mulher - Estética Dental",
        description: "Clareamento e estética para o sorriso feminino",
        sendBefore: 7,
        offers: [],
        scripts: []
      },
      {
        id: "oralsin-003",
        date: "2026-05-10",
        title: "Dia das Mães",
        description: "Cuide do sorriso de quem você ama",
        sendBefore: 30,
        offers: [],
        scripts: []
      },
      {
        id: "oralsin-004",
        date: "2026-08-09",
        title: "Dia dos Pais",
        description: "Saúde bucal para toda a família",
        sendBefore: 30,
        offers: [],
        scripts: []
      },
      {
        id: "oralsin-005",
        date: "2026-10-12",
        title: "Dia das Crianças - Odontopediatria",
        description: "Cuidados especiais com o sorriso dos pequenos",
        sendBefore: 7,
        offers: [],
        scripts: []
      },
      {
        id: "oralsin-006",
        date: "2026-11-27",
        title: "Black Odonto",
        description: "Descontos em tratamentos estéticos",
        sendBefore: 30,
        offers: [],
        scripts: []
      },
      {
        id: "oralsin-007",
        date: "2026-12-15",
        title: "Festas de Fim de Ano",
        description: "Sorria com confiança nas festas",
        sendBefore: 7,
        offers: [],
        scripts: []
      }
    ]
  },
];
