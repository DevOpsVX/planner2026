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
            title: "ROTEIRO 1 — SKINCARE PERSONALIZADO (DIA DA MULHER)",
            content: \`Formato: Vídeo vertical
Apresentador: Farmacêutico ou atendente
Objetivo: Público beleza / skincare feminino

[CENA 1 — Bancada com frascos cosméticos, séruns, cremes]
APRESENTADOR:
Você compra skincare pronto e sente que nunca fica perfeito pra sua pele?

[CENA 2 — Farmacêutico manipulando cosmético]
APRESENTADOR:
Na RDC Pharma você pode manipular cosméticos personalizados: séruns, cremes e fórmulas adaptadas ao seu tipo de pele e à sua rotina.

[CENA 3 — Close em frasco sendo rotulado]
APRESENTADOR:
Você escolhe a proposta do produto e nossa equipe ajusta a composição, textura e concentração.

[CENA 4 — Prateleira com cosméticos manipulados]
APRESENTADOR:
É skincare sob medida, feito exclusivamente pra você. Neste Dia da Mulher, cuide da sua pele com quem entende de personalização.

[CENA 5 — Fachada]
APRESENTADOR (CTA):
Venha criar seu skincare personalizado na RDC Pharma. Rua José Haddad, 1233, Centro de Belford Roxo.\`
          },
          {
            id: "rdcpharma-002-2",
            title: "ROTEIRO 2 — EMPODERAMENTO FEMININO",
            content: \`Formato: Vídeo vertical
Narrador em off
Objetivo: Conexão emocional + conversão

[CENA 1 — Close em mulher aplicando sérum]
NARRADOR:
Mulher que se cuida é mulher que se ama.

[CENA 2 — Laboratório de manipulação]
NARRADOR:
Na RDC Pharma, cada fórmula é criada pensando em você. Sua pele, sua rotina, suas necessidades.

[CENA 3 — Farmacêutico explicando produto para cliente]
NARRADOR:
Não é skincare de prateleira. É cuidado personalizado, com orientação profissional.

[CENA 4 — Produtos sendo embalados]
NARRADOR:
Celebre o Dia da Mulher com produtos que valorizam sua beleza única.

[CENA 5 — Fachada da RDC Pharma]
NARRADOR (CTA):
RDC Pharma. Rua José Haddad, 1233, Centro de Belford Roxo. Agende sua análise de pele.\`
          },
          {
            id: "rdcpharma-002-3",
            title: "ROTEIRO 3 — PRESENTE ESPECIAL",
            content: \`Formato: Vídeo vertical
Apresentador: Atendente da loja
Objetivo: Venda de presente / kit

[CENA 1 — Kits de skincare montados]
APRESENTADOR:
Procurando um presente especial para o Dia da Mulher?

[CENA 2 — Mostrando diferentes produtos]
APRESENTADOR:
Na RDC Pharma você encontra kits de skincare personalizados, séruns anti-idade e cremes manipulados com ingredientes premium.

[CENA 3 — Embalagem sendo preparada]
APRESENTADOR:
Cada kit é montado com carinho e pode ser personalizado para o tipo de pele de quem você ama.

[CENA 4 — Atendimento no balcão]
APRESENTADOR:
Nossa equipe ajuda você a escolher o presente perfeito.

[CENA 5 — Fachada]
APRESENTADOR (CTA):
Venha até a RDC Pharma. Rua José Haddad, 1233, Centro de Belford Roxo.\`
          }
        ]
      },
      {
        id: "rdcpharma-003",
        date: "2026-05-10",
        title: "Dia das Mães - Cuidado e Carinho",
        description: "Presenteie sua mãe com saúde e beleza personalizada",
        sendBefore: 30,
        offers: [
          "Kit Mãe Especial com 30% off",
          "Fórmulas anti-idade personalizadas",
          "Embalagem presenteável grátis"
        ],
        scripts: [
          {
            id: "rdcpharma-003-1",
            title: "ROTEIRO 1 — PRESENTE PARA MÃE (SKINCARE)",
            content: \`Formato: Vídeo vertical
Narrador em off
Objetivo: Venda emocional + presente

[CENA 1 — Close em mãos de mãe e filha]
NARRADOR:
Sua mãe merece um cuidado tão especial quanto ela é.

[CENA 2 — Produtos de skincare sendo manipulados]
NARRADOR:
Na RDC Pharma você encontra skincare personalizado, fórmulas anti-idade e cremes manipulados especialmente para o tipo de pele dela.

[CENA 3 — Kit sendo montado com laço]
NARRADOR:
Neste Dia das Mães, presenteie com saúde e beleza sob medida.

[CENA 4 — Atendimento no balcão]
NARRADOR:
Nossa equipe ajuda você a montar o kit perfeito.

[CENA 5 — Fachada]
NARRADOR (CTA):
RDC Pharma. Rua José Haddad, 1233, Centro de Belford Roxo. Encomende agora.\`
          },
          {
            id: "rdcpharma-003-2",
            title: "ROTEIRO 2 — SAÚDE DA MÃE (SUPLEMENTAÇÃO)",
            content: \`Formato: Vídeo vertical
Apresentador: Farmacêutico
Objetivo: Conversão por cuidado com saúde

[CENA 1 — Farmacêutico em frente à bancada]
APRESENTADOR:
Você cuida da saúde da sua mãe como ela sempre cuidou de você?

[CENA 2 — Close em suplementos e vitaminas]
APRESENTADOR:
Na RDC Pharma manipulamos suplementos personalizados para energia, imunidade, sono e bem-estar.

[CENA 3 — Fórmula sendo preparada]
APRESENTADOR:
Cada fórmula é ajustada para as necessidades específicas dela, com dosagens corretas e qualidade farmacêutica.

[CENA 4 — Embalagem presenteável]
APRESENTADOR:
Neste Dia das Mães, dê o presente da saúde.

[CENA 5 — Fachada]
APRESENTADOR (CTA):
Venha até a RDC Pharma. Rua José Haddad, 1233, Centro de Belford Roxo.\`
          }
        ]
      },
      {
        id: "rdcpharma-004",
        date: "2026-06-21",
        title: "Dia do Nutricionista - Suplementação Inteligente",
        description: "Suplementos personalizados para sua saúde",
        sendBefore: 7,
        offers: [
          "Suplementos com 20% de desconto",
          "Consulta com farmacêutico grátis",
          "Kit iniciante com 3 produtos"
        ],
        scripts: [
          {
            id: "rdcpharma-004-1",
            title: "ROTEIRO 1 — SUPLEMENTAÇÃO PERSONALIZADA",
            content: \`Formato: Vídeo vertical
Apresentador: Farmacêutico
Objetivo: Autoridade + conversão

[CENA 1 — Farmacêutico em frente à bancada de suplementos]
APRESENTADOR:
Você toma suplemento genérico e não sente resultado?

[CENA 2 — Close em matérias-primas e cápsulas]
APRESENTADOR:
Na RDC Pharma manipulamos suplementos personalizados com dosagens ajustadas para o seu corpo e seus objetivos.

[CENA 3 — Balança de precisão, frascos sendo preparados]
APRESENTADOR:
Cada fórmula é feita sob padrão técnico, com controle de qualidade e acompanhamento profissional.

[CENA 4 — Atendimento no balcão]
APRESENTADOR:
Tudo começa com uma conversa para entender o que você realmente precisa.

[CENA 5 — Fachada]
APRESENTADOR (CTA):
Venha até a RDC Pharma. Rua José Haddad, 1233, Centro de Belford Roxo.\`
          },
          {
            id: "rdcpharma-004-2",
            title: "ROTEIRO 2 — DOR (CANSAÇO, IMUNIDADE)",
            content: \`Formato: Vídeo vertical
Narrador em off
Objetivo: Conversão por dor cotidiana

[CENA 1 — Close em frascos organizados]
NARRADOR:
Cansaço constante, imunidade baixa e falta de disposição estão atrapalhando sua rotina?

[CENA 2 — Farmacêutico manipulando fórmula]
NARRADOR:
Na RDC Pharma você encontra suplementos manipulados personalizados para ajudar no equilíbrio do organismo.

[CENA 3 — Embalagem sendo lacrada]
NARRADOR:
Nada genérico. Tudo ajustado conforme a necessidade de cada pessoa.

[CENA 4 — Atendimento no balcão]
NARRADOR:
Nossa equipe orienta você desde a escolha até o uso correto.

[CENA 5 — Fachada]
NARRADOR (CTA):
Passe na RDC Pharma. Rua José Haddad, 1233, Centro de Belford Roxo.\`
          }
        ]
      },
      {
        id: "rdcpharma-005",
        date: "2026-08-09",
        title: "Dia dos Pais - Saúde Masculina",
        description: "Cuide da saúde do seu pai com fórmulas personalizadas",
        sendBefore: 30,
        offers: [
          "Kit Pai Saudável com 25% off",
          "Suplementos para energia e vitalidade",
          "Consulta farmacêutica grátis"
        ],
        scripts: [
          {
            id: "rdcpharma-005-1",
            title: "ROTEIRO 1 — PRESENTE PARA PAI (SAÚDE)",
            content: \`Formato: Vídeo vertical
Narrador em off
Objetivo: Venda emocional + presente

[CENA 1 — Imagem de pai e filho]
NARRADOR:
Seu pai sempre cuidou de você. Agora é sua vez de cuidar dele.

[CENA 2 — Suplementos sendo manipulados]
NARRADOR:
Na RDC Pharma você encontra suplementos personalizados para energia, vitalidade e bem-estar masculino.

[CENA 3 — Fórmula sendo preparada]
NARRADOR:
Cada fórmula é ajustada para as necessidades dele, com dosagens corretas e qualidade farmacêutica.

[CENA 4 — Kit sendo embalado]
NARRADOR:
Neste Dia dos Pais, dê o presente da saúde.

[CENA 5 — Fachada]
NARRADOR (CTA):
RDC Pharma. Rua José Haddad, 1233, Centro de Belford Roxo.\`
          }
        ]
      },
      {
        id: "rdcpharma-006",
        date: "2026-09-22",
        title: "Primavera - Renovação de Skincare",
        description: "Prepare sua pele para a estação mais linda do ano",
        sendBefore: 7,
        offers: [
          "Kit Primavera com 30% off",
          "Análise de pele com desconto",
          "Fórmula seasonal personalizada"
        ],
        scripts: [
          {
            id: "rdcpharma-006-1",
            title: "ROTEIRO 1 — SKINCARE DE PRIMAVERA",
            content: \`Formato: Vídeo vertical
Apresentador: Farmacêutico ou atendente
Objetivo: Renovação sazonal

[CENA 1 — Bancada com produtos de skincare]
APRESENTADOR:
A primavera chegou e sua pele precisa de uma renovação.

[CENA 2 — Farmacêutico manipulando cosmético]
APRESENTADOR:
Na RDC Pharma você pode criar seu skincare de primavera: séruns mais leves, hidratantes com vitamina C e proteção solar manipulada.

[CENA 3 — Close em frasco sendo rotulado]
APRESENTADOR:
Cada produto é ajustado para o clima e para o seu tipo de pele.

[CENA 4 — Prateleira com cosméticos]
APRESENTADOR:
Renove sua rotina de cuidados com produtos feitos exclusivamente para você.

[CENA 5 — Fachada]
APRESENTADOR (CTA):
Venha até a RDC Pharma. Rua José Haddad, 1233, Centro de Belford Roxo.\`
          }
        ]
      },
      {
        id: "rdcpharma-007",
        date: "2026-11-27",
        title: "Black Friday - Fórmulas com Desconto",
        description: "Aproveite descontos especiais em manipulados",
        sendBefore: 30,
        offers: [
          "Até 40% off em fórmulas selecionadas",
          "Skincare com desconto progressivo",
          "Suplementos: leve 3 pague 2"
        ],
        scripts: [
          {
            id: "rdcpharma-007-1",
            title: "ROTEIRO 1 — BLACK FRIDAY RDC",
            content: \`Formato: Vídeo vertical
Narrador em off
Objetivo: Urgência + conversão

[CENA 1 — Fachada da RDC Pharma com banner Black Friday]
NARRADOR:
Black Friday na RDC Pharma! A melhor oportunidade do ano para cuidar da sua saúde e beleza.

[CENA 2 — Close em produtos: suplementos, skincare, fórmulas]
NARRADOR:
Suplementos personalizados, skincare sob medida e fórmulas manipuladas com até 40% de desconto.

[CENA 3 — Farmacêutico atendendo cliente]
NARRADOR:
Aproveite para fazer aquela fórmula que você sempre quis ou renovar seu estoque de suplementos.

[CENA 4 — Produtos sendo embalados]
NARRADOR:
Mas corra! Os descontos são por tempo limitado.

[CENA 5 — Fachada]
NARRADOR (CTA):
RDC Pharma. Rua José Haddad, 1233, Centro de Belford Roxo. Venha aproveitar!\`
          }
        ]
      },
      {
        id: "rdcpharma-008",
        date: "2026-12-20",
        title: "Natal - Presentes de Saúde",
        description: "Presenteie com saúde e bem-estar neste Natal",
        sendBefore: 30,
        offers: [
          "Kits natalinos especiais",
          "Embalagem presenteável grátis",
          "Descontos em compras acima de R$200"
        ],
        scripts: [
          {
            id: "rdcpharma-008-1",
            title: "ROTEIRO 1 — NATAL RDC PHARMA",
            content: \`Formato: Vídeo vertical
Narrador em off
Objetivo: Venda de presentes

[CENA 1 — Loja decorada para o Natal]
NARRADOR:
Neste Natal, presenteie quem você ama com saúde e cuidado personalizado.

[CENA 2 — Kits de presente sendo montados]
NARRADOR:
Na RDC Pharma você encontra kits de skincare, suplementos e fórmulas manipuladas para presentear.

[CENA 3 — Embalagens natalinas]
NARRADOR:
Cada kit é montado com carinho e pode ser personalizado para quem vai receber.

[CENA 4 — Atendimento no balcão]
NARRADOR:
Nossa equipe ajuda você a escolher o presente perfeito.

[CENA 5 — Fachada com decoração natalina]
NARRADOR (CTA):
RDC Pharma. Rua José Haddad, 1233, Centro de Belford Roxo. Feliz Natal!\`
          }
        ]
      }
    ]
  },
  {
    id: "squadclinic",
    name: "Squad Clinic",
    segment: "Clínica de Estética e Saúde",
    description: "Clínica integrada com estética avançada, protocolos corporais e acompanhamento clínico",
    color: "from-pink-500 to-pink-600",
    campaigns: [
      {
        id: "squadclinic-001",
        date: "2026-03-08",
        title: "Dia da Mulher - Autoestima e Cuidado",
        description: "Protocolos estéticos para realçar sua beleza natural",
        sendBefore: 7,
        offers: [
          "Avaliação estética gratuita",
          "Protocolos faciais com 20% off",
          "Pacote Mulher Especial"
        ],
        scripts: [
          {
            id: "squadclinic-001-1",
            title: "ROTEIRO 1 — ESTÉTICA FACIAL (DIA DA MULHER)",
            content: \`Formato: Vídeo vertical
Apresentador: Profissional da clínica
Objetivo: Captação para avaliação estética facial

[CENA 1 — Apresentador na sala de atendimento]
APRESENTADOR:
Você quer dar um up na sua aparência, valorizar seus traços e cuidar da sua pele com segurança?

[CENA 2 — Close em materiais organizados, luvas, bancada limpa]
APRESENTADOR:
Na Squad Clinic trabalhamos com protocolos avançados de estética facial e harmonização, sempre começando por uma avaliação personalizada.

[CENA 3 — Profissional ajustando cadeira, preparando equipamento]
APRESENTADOR:
Aqui o foco é naturalidade, equilíbrio e resultado profissional.

[CENA 4 — Profissional atendendo paciente de costas ou desfocado]
APRESENTADOR:
Cada tratamento é adaptado para o seu perfil e objetivo. Neste Dia da Mulher, cuide de você.

[CENA 5 — Fachada ou logo da clínica]
APRESENTADOR (CTA):
Agende agora sua avaliação estética na Squad Clinic. Rua Banda, 630, Jardim do Mar, São Bernardo do Campo.\`
          },
          {
            id: "squadclinic-001-2",
            title: "ROTEIRO 2 — AUTOESTIMA FEMININA",
            content: \`Formato: Vídeo vertical
Narrador em off
Objetivo: Conexão emocional + captação

[CENA 1 — Mulher sorrindo, confiante]
NARRADOR:
Autoestima não é vaidade. É cuidado, é amor próprio, é se sentir bem consigo mesma.

[CENA 2 — Recepção da clínica, ambiente acolhedor]
NARRADOR:
Na Squad Clinic você encontra um espaço seguro para cuidar da sua estética com profissionais qualificados.

[CENA 3 — Profissional conversando com paciente]
NARRADOR:
Tudo começa com uma avaliação personalizada para entender o que você realmente precisa.

[CENA 4 — Equipamentos modernos]
NARRADOR:
Protocolos avançados, resultados naturais.

[CENA 5 — Fachada]
NARRADOR (CTA):
Squad Clinic. Rua Banda, 630, Jardim do Mar, São Bernardo do Campo. Agende sua avaliação.\`
          }
        ]
      },
      {
        id: "squadclinic-002",
        date: "2026-05-10",
        title: "Dia das Mães - Presente de Autocuidado",
        description: "Presenteie sua mãe com cuidado e bem-estar",
        sendBefore: 30,
        offers: [
          "Voucher de avaliação para presente",
          "Protocolos faciais com desconto",
          "Pacote Mãe Especial"
        ],
        scripts: [
          {
            id: "squadclinic-002-1",
            title: "ROTEIRO 1 — PRESENTE PARA MÃE",
            content: \`Formato: Vídeo vertical
Narrador em off
Objetivo: Venda de voucher/presente

[CENA 1 — Mãe e filha juntas]
NARRADOR:
Sua mãe merece um momento só dela. Um momento de cuidado, relaxamento e autoestima.

[CENA 2 — Ambiente da clínica, acolhedor]
NARRADOR:
Na Squad Clinic você pode presentear sua mãe com uma avaliação estética personalizada e protocolos de cuidado facial.

[CENA 3 — Profissional preparando atendimento]
NARRADOR:
Tudo é feito com foco em segurança, resultado e cuidado individual.

[CENA 4 — Voucher sendo entregue]
NARRADOR:
Neste Dia das Mães, dê o presente do autocuidado.

[CENA 5 — Fachada]
NARRADOR (CTA):
Squad Clinic. Rua Banda, 630, Jardim do Mar, São Bernardo do Campo.\`
          }
        ]
      },
      {
        id: "squadclinic-003",
        date: "2026-08-09",
        title: "Dia dos Pais - Cuidado Masculino",
        description: "Estética e bem-estar também é para homens",
        sendBefore: 30,
        offers: [
          "Avaliação masculina gratuita",
          "Protocolos para rejuvenescimento",
          "Pacote Pai Moderno"
        ],
        scripts: [
          {
            id: "squadclinic-003-1",
            title: "ROTEIRO 1 — ESTÉTICA MASCULINA",
            content: \`Formato: Vídeo vertical
Apresentador: Profissional da clínica
Objetivo: Captação público masculino

[CENA 1 — Apresentador na clínica]
APRESENTADOR:
Cuidar da aparência não é só coisa de mulher. Homens também merecem se sentir bem consigo mesmos.

[CENA 2 — Ambiente da clínica]
APRESENTADOR:
Na Squad Clinic oferecemos protocolos estéticos masculinos: rejuvenescimento facial, tratamento para olheiras e cuidados com a pele.

[CENA 3 — Profissional preparando atendimento]
APRESENTADOR:
Tudo com discrição, segurança e resultados naturais.

[CENA 4 — Atendimento discreto]
APRESENTADOR:
Neste Dia dos Pais, presenteie seu pai com autocuidado.

[CENA 5 — Fachada]
APRESENTADOR (CTA):
Squad Clinic. Rua Banda, 630, Jardim do Mar, São Bernardo do Campo.\`
          }
        ]
      },
      {
        id: "squadclinic-004",
        date: "2026-09-01",
        title: "Retomada da Rotina - Protocolos Corporais",
        description: "Volte à rotina com foco no seu corpo",
        sendBefore: 7,
        offers: [
          "Avaliação corporal gratuita",
          "Protocolos de definição com desconto",
          "Pacote Retomada"
        ],
        scripts: [
          {
            id: "squadclinic-004-1",
            title: "ROTEIRO 1 — PROTOCOLOS CORPORAIS",
            content: \`Formato: Vídeo vertical
Narrador em off
Objetivo: Leads para avaliação corporal

[CENA 1 — Paciente modelo sendo avaliada]
NARRADOR:
Se você quer melhorar o contorno corporal e cuidar do seu corpo com acompanhamento profissional, o primeiro passo é a avaliação certa.

[CENA 2 — Profissionais durante atendimento]
NARRADOR:
Na Squad Clinic utilizamos protocolos corporais modernos aliados à tecnologia e métodos seguros.

[CENA 3 — Profissional explicando algo ao paciente]
NARRADOR:
Cada plano é montado de forma personalizada, respeitando seu corpo e seus objetivos.

[CENA 4 — Recepção da clínica]
NARRADOR:
Nossa agenda está aberta para novas avaliações.

[CENA 5 — Fachada]
NARRADOR (CTA):
Fale agora com a Squad Clinic e agende sua avaliação corporal. Rua Banda, 630, Jardim do Mar, São Bernardo do Campo.\`
          }
        ]
      },
      {
        id: "squadclinic-005",
        date: "2026-11-27",
        title: "Black Friday Estética",
        description: "Descontos especiais em protocolos estéticos",
        sendBefore: 30,
        offers: [
          "Até 30% off em protocolos",
          "Pacotes com preço especial",
          "Avaliação + procedimento com desconto"
        ],
        scripts: [
          {
            id: "squadclinic-005-1",
            title: "ROTEIRO 1 — BLACK FRIDAY SQUAD",
            content: \`Formato: Vídeo vertical
Narrador em off
Objetivo: Urgência + conversão

[CENA 1 — Fachada da clínica]
NARRADOR:
Black Friday na Squad Clinic! A melhor oportunidade do ano para cuidar da sua estética.

[CENA 2 — Ambiente da clínica, equipamentos]
NARRADOR:
Protocolos faciais, corporais e harmonização com até 30% de desconto.

[CENA 3 — Profissional atendendo]
NARRADOR:
Aproveite para fazer aquele procedimento que você sempre quis, com segurança e qualidade.

[CENA 4 — Recepção]
NARRADOR:
Mas corra! As vagas são limitadas.

[CENA 5 — Fachada]
NARRADOR (CTA):
Squad Clinic. Rua Banda, 630, Jardim do Mar, São Bernardo do Campo. Agende agora!\`
          }
        ]
      },
      {
        id: "squadclinic-006",
        date: "2026-12-15",
        title: "Festas de Fim de Ano - Brilhe nas Festas",
        description: "Prepare-se para as festas com protocolos express",
        sendBefore: 7,
        offers: [
          "Protocolos express para festas",
          "Pacote Glow de Fim de Ano",
          "Agendamento prioritário"
        ],
        scripts: [
          {
            id: "squadclinic-006-1",
            title: "ROTEIRO 1 — GLOW DE FIM DE ANO",
            content: \`Formato: Vídeo vertical
Apresentador: Profissional da clínica
Objetivo: Captação para protocolos express

[CENA 1 — Apresentador na clínica]
APRESENTADOR:
As festas de fim de ano estão chegando. Você quer estar radiante para o Natal e Réveillon?

[CENA 2 — Equipamentos e produtos]
APRESENTADOR:
Na Squad Clinic temos protocolos express para deixar sua pele iluminada e seu rosto harmonizado para as festas.

[CENA 3 — Profissional preparando atendimento]
APRESENTADOR:
Resultados rápidos, seguros e naturais.

[CENA 4 — Ambiente festivo]
APRESENTADOR:
Agende agora e garanta sua vaga antes das festas.

[CENA 5 — Fachada]
APRESENTADOR (CTA):
Squad Clinic. Rua Banda, 630, Jardim do Mar, São Bernardo do Campo.\`
          }
        ]
      }
    ]
  },
  {
    id: "viamed",
    name: "Via Med",
    segment: "Distribuidora Hospitalar B2B",
    description: "Fornecimento de materiais clínicos e hospitalares para clínicas, consultórios e hospitais",
    color: "from-blue-500 to-blue-600",
    campaigns: [
      {
        id: "viamed-001",
        date: "2026-02-01",
        title: "Reposição de Início de Ano",
        description: "Comece o ano com estoque completo",
        sendBefore: 7,
        offers: [
          "Desconto em pedidos acima de R$1.000",
          "Frete grátis para primeira compra do ano",
          "Condições especiais para contratos anuais"
        ],
        scripts: [
          {
            id: "viamed-001-1",
            title: "ROTEIRO 1 — REPOSIÇÃO ANUAL",
            content: \`Formato: Vídeo vertical
Apresentador: Funcionário da empresa ou narrador em off
Objetivo: Posicionamento + captação de pedidos

[CENA 1 — Câmera mostrando prateleiras com produtos médicos]
NARRADOR:
Se você é profissional da saúde, sabe como é difícil encontrar um fornecedor que tenha variedade, qualidade e entrega rápida no mesmo lugar.

[CENA 2 — Funcionário organizando caixas ou separando pedidos]
NARRADOR:
A ViaMed é especializada no fornecimento de materiais clínicos e hospitalares para clínicas, consultórios, hospitais e atendimento domiciliar.

[CENA 3 — Close em produtos: luvas, insumos, equipamentos]
NARRADOR:
Aqui você encontra desde insumos básicos até equipamentos e materiais especializados para o seu dia a dia.

[CENA 4 — Equipe conferindo pedidos ou embalando]
NARRADOR:
Trabalhamos com estoque organizado, marcas confiáveis e atendimento ágil. Comece o ano com estoque completo.

[CENA 5 — Logo da ViaMed]
NARRADOR (CTA):
Fale agora com a ViaMed e solicite seu orçamento. Tenha seu material com rapidez e segurança.\`
          }
        ]
      },
      {
        id: "viamed-002",
        date: "2026-04-07",
        title: "Dia Mundial da Saúde",
        description: "Parceria para cuidar de quem cuida",
        sendBefore: 7,
        offers: [
          "Condições especiais para clínicas",
          "Desconto em materiais de prevenção",
          "Consultoria de estoque grátis"
        ],
        scripts: [
          {
            id: "viamed-002-1",
            title: "ROTEIRO 1 — DIA MUNDIAL DA SAÚDE",
            content: \`Formato: Vídeo vertical
Narrador em off
Objetivo: Posicionamento institucional + conversão B2B

[CENA 1 — Estoque organizado]
NARRADOR:
No Dia Mundial da Saúde, a ViaMed celebra quem cuida de vidas todos os dias.

[CENA 2 — Funcionário separando pedidos]
NARRADOR:
Somos parceiros de clínicas, consultórios e hospitais no fornecimento de materiais médicos de qualidade.

[CENA 3 — Close em diferentes produtos]
NARRADOR:
Variedade, procedência e entrega rápida para você nunca parar.

[CENA 4 — Equipe conferindo pedido]
NARRADOR:
Neste mês, condições especiais para novos parceiros.

[CENA 5 — Logo da ViaMed]
NARRADOR (CTA):
Entre em contato com a ViaMed e garanta o abastecimento da sua clínica.\`
          }
        ]
      },
      {
        id: "viamed-003",
        date: "2026-07-01",
        title: "Renovação de Contratos - Segundo Semestre",
        description: "Renove sua parceria com condições especiais",
        sendBefore: 30,
        offers: [
          "Desconto progressivo em contratos",
          "Prioridade na entrega",
          "Consultoria de estoque inclusa"
        ],
        scripts: [
          {
            id: "viamed-003-1",
            title: "ROTEIRO 1 — RENOVAÇÃO DE CONTRATOS",
            content: \`Formato: Vídeo vertical
Narrador em off
Objetivo: Fidelização + renovação

[CENA 1 — Prateleiras organizadas]
NARRADOR:
O segundo semestre chegou. É hora de garantir o abastecimento da sua clínica para os próximos meses.

[CENA 2 — Funcionário separando pedidos]
NARRADOR:
A ViaMed oferece condições especiais para renovação de contratos: desconto progressivo, prioridade na entrega e consultoria de estoque.

[CENA 3 — Close em produtos diversos]
NARRADOR:
Mantenha seu estoque sempre completo com um fornecedor de confiança.

[CENA 4 — Equipe trabalhando]
NARRADOR:
Fale com nosso time e renove sua parceria.

[CENA 5 — Logo da ViaMed]
NARRADOR (CTA):
ViaMed. Seu parceiro em materiais médicos.\`
          }
        ]
      },
      {
        id: "viamed-004",
        date: "2026-10-01",
        title: "Outubro - Mês da Saúde",
        description: "Materiais para campanhas de prevenção",
        sendBefore: 7,
        offers: [
          "Kits para campanhas de prevenção",
          "Materiais de coleta com desconto",
          "Condições especiais para laboratórios"
        ],
        scripts: [
          {
            id: "viamed-004-1",
            title: "ROTEIRO 1 — MÊS DA SAÚDE",
            content: \`Formato: Vídeo vertical
Apresentador: Funcionário da ViaMed
Objetivo: Conversão B2B para campanhas

[CENA 1 — Bancada com produtos para coleta e exames]
APRESENTADOR:
Outubro é mês de conscientização e prevenção. Sua clínica está preparada para as campanhas de saúde?

[CENA 2 — Close em materiais de coleta]
APRESENTADOR:
Na ViaMed você encontra materiais para exames, coleta e prevenção com qualidade e pronta entrega.

[CENA 3 — Funcionário embalando produto]
APRESENTADOR:
Tudo com procedência, variedade e atendimento ágil.

[CENA 4 — Logo da empresa]
APRESENTADOR (CTA):
Chame a ViaMed agora e prepare sua clínica para o mês da saúde.\`
          }
        ]
      },
      {
        id: "viamed-005",
        date: "2026-11-27",
        title: "Black Friday B2B",
        description: "Descontos especiais para estoque",
        sendBefore: 30,
        offers: [
          "Até 25% off em pedidos grandes",
          "Frete grátis acima de R$2.000",
          "Condições especiais para novos clientes"
        ],
        scripts: [
          {
            id: "viamed-005-1",
            title: "ROTEIRO 1 — BLACK FRIDAY VIAMED",
            content: \`Formato: Vídeo vertical
Narrador em off
Objetivo: Urgência + conversão B2B

[CENA 1 — Estoque cheio]
NARRADOR:
Black Friday na ViaMed! A melhor oportunidade do ano para abastecer sua clínica.

[CENA 2 — Funcionário separando pedidos rapidamente]
NARRADOR:
Materiais médicos, descartáveis e equipamentos com até 25% de desconto.

[CENA 3 — Close em caixas prontas para envio]
NARRADOR:
Aproveite para fazer estoque e garantir o abastecimento até o fim do ano.

[CENA 4 — Logo da ViaMed]
NARRADOR (CTA):
Entre em contato agora com a ViaMed. Condições por tempo limitado.\`
          }
        ]
      }
    ]
  },
  {
    id: "duzzi",
    name: "Duzzi Móveis e Decoração",
    segment: "Loja de Móveis e Decoração",
    description: "Há mais de 34 anos levando qualidade e bom gosto para os lares mato-grossenses",
    color: "from-amber-500 to-amber-600",
    campaigns: [
      {
        id: "duzzi-001",
        date: "2026-03-15",
        title: "Dia do Consumidor - Renove sua Casa",
        description: "Ofertas especiais para transformar seus ambientes",
        sendBefore: 7,
        offers: [
          "Até 30% off em sofás selecionados",
          "Mesas de jantar com desconto",
          "Frete grátis para Cuiabá"
        ],
        scripts: [
          {
            id: "duzzi-001-1",
            title: "ROTEIRO 1 — DIA DO CONSUMIDOR",
            content: \`Formato: Vídeo vertical
Apresentador: Narrador em off ou vendedor da loja
Objetivo: Posicionamento + atração para loja

[CENA 1 — Fachada da loja]
NARRADOR:
Sua casa merece mais conforto, mais estilo e mais personalidade.

[CENA 2 — Entrada da loja, mostrando showroom]
NARRADOR:
Na Duzzi Móveis e Decorações você encontra tudo para transformar seus ambientes com beleza e funcionalidade.

[CENA 3 — Takes de sofás, mesas, cadeiras, poltronas e decoração]
NARRADOR:
São mais de 34 anos levando qualidade e bom gosto para os lares mato-grossenses, com móveis e decorações para todos os estilos.

[CENA 4 — Vendedor organizando produtos ou atendendo]
NARRADOR:
No Dia do Consumidor, ofertas especiais para você renovar sua casa.

[CENA 5 — Fachada novamente]
NARRADOR (CTA):
Visite a Duzzi Móveis e Decorações na Avenida Miguel Sutil, 2265, bairro Areão, em Cuiabá.\`
          }
        ]
      },
      {
        id: "duzzi-002",
        date: "2026-05-10",
        title: "Dia das Mães - Conforto para Ela",
        description: "Presenteie sua mãe com móveis e decoração",
        sendBefore: 30,
        offers: [
          "Poltronas com 25% off",
          "Conjuntos de sala com desconto",
          "Decoração com preço especial"
        ],
        scripts: [
          {
            id: "duzzi-002-1",
            title: "ROTEIRO 1 — PRESENTE PARA MÃE",
            content: \`Formato: Vídeo vertical
Narrador em off
Objetivo: Venda emocional

[CENA 1 — Poltrona confortável no showroom]
NARRADOR:
Sua mãe merece um cantinho só dela. Um lugar de conforto, descanso e aconchego.

[CENA 2 — Mostrando poltronas e sofás]
NARRADOR:
Na Duzzi Móveis e Decorações você encontra poltronas, sofás e móveis que vão transformar o dia a dia dela.

[CENA 3 — Detalhes de acabamento]
NARRADOR:
Qualidade, conforto e design para durar por muitos anos.

[CENA 4 — Vendedor atendendo]
NARRADOR:
Neste Dia das Mães, presenteie com carinho e bom gosto.

[CENA 5 — Fachada]
NARRADOR (CTA):
Venha conhecer a Duzzi Móveis e Decorações na Avenida Miguel Sutil, 2265, Areão, Cuiabá.\`
          }
        ]
      },
      {
        id: "duzzi-003",
        date: "2026-08-09",
        title: "Dia dos Pais - Conforto Masculino",
        description: "Móveis para o cantinho do pai",
        sendBefore: 30,
        offers: [
          "Sofás reclinávéis com desconto",
          "Poltronas de home office",
          "Racks e painéis com preço especial"
        ],
        scripts: [
          {
            id: "duzzi-003-1",
            title: "ROTEIRO 1 — PRESENTE PARA PAI",
            content: \`Formato: Vídeo vertical
Narrador em off
Objetivo: Venda emocional

[CENA 1 — Sofá reclinável no showroom]
NARRADOR:
Seu pai merece um lugar de conforto para descansar depois de um dia de trabalho.

[CENA 2 — Mostrando sofás reclinávéis e poltronas]
NARRADOR:
Na Duzzi Móveis e Decorações você encontra sofás reclinávéis, poltronas e móveis para o cantinho dele.

[CENA 3 — Detalhes de acabamento]
NARRADOR:
Qualidade, resistência e conforto de verdade.

[CENA 4 — Vendedor atendendo]
NARRADOR:
Neste Dia dos Pais, presenteie com carinho.

[CENA 5 — Fachada]
NARRADOR (CTA):
Venha conhecer a Duzzi Móveis e Decorações na Avenida Miguel Sutil, 2265, Areão, Cuiabá.\`
          }
        ]
      },
      {
        id: "duzzi-004",
        date: "2026-11-27",
        title: "Black Friday - Móveis com Desconto",
        description: "Os melhores preços do ano em móveis",
        sendBefore: 30,
        offers: [
          "Até 40% off em móveis selecionados",
          "Sofás com desconto imperdível",
          "Mesas de jantar com preço especial"
        ],
        scripts: [
          {
            id: "duzzi-004-1",
            title: "ROTEIRO 1 — BLACK FRIDAY DUZZI",
            content: \`Formato: Vídeo vertical
Narrador em off
Objetivo: Urgência + conversão

[CENA 1 — Fachada da loja com banner Black Friday]
NARRADOR:
Black Friday na Duzzi Móveis e Decorações! A melhor oportunidade do ano para renovar sua casa.

[CENA 2 — Showroom com diversos móveis]
NARRADOR:
Sofás, mesas, poltronas e decoração com até 40% de desconto.

[CENA 3 — Vendedor atendendo cliente]
NARRADOR:
Aproveite para comprar aquele móvel que você sempre quis, com qualidade e preço especial.

[CENA 4 — Produtos sendo vendidos]
NARRADOR:
Mas corra! Os descontos são por tempo limitado.

[CENA 5 — Fachada]
NARRADOR (CTA):
Duzzi Móveis e Decorações. Avenida Miguel Sutil, 2265, Areão, Cuiabá. Venha aproveitar!\`
          }
        ]
      },
      {
        id: "duzzi-005",
        date: "2026-12-20",
        title: "Natal - Casa Nova para as Festas",
        description: "Renove sua casa para receber a família",
        sendBefore: 30,
        offers: [
          "Mesas de jantar para ceia",
          "Sofás para receber visitas",
          "Decoração natalina"
        ],
        scripts: [
          {
            id: "duzzi-005-1",
            title: "ROTEIRO 1 — NATAL DUZZI",
            content: \`Formato: Vídeo vertical
Narrador em off
Objetivo: Venda emocional

[CENA 1 — Mesa de jantar montada no showroom]
NARRADOR:
Momentos em família começam em um ambiente bem planejado.

[CENA 2 — Takes de mesas, cadeiras e conjuntos completos]
NARRADOR:
Na Duzzi Móveis e Decorações você encontra mesas de jantar, cadeiras e conjuntos completos para deixar sua casa pronta para a ceia de Natal.

[CENA 3 — Detalhes de acabamento]
NARRADOR:
Qualidade, resistência e design para o dia a dia e para momentos especiais.

[CENA 4 — Vendedor organizando o espaço]
NARRADOR:
Nossa equipe te ajuda a escolher o conjunto ideal para o seu espaço.

[CENA 5 — Fachada com decoração natalina]
NARRADOR (CTA):
Venha conhecer a Duzzi Móveis e Decorações na Avenida Miguel Sutil, 2265, Areão, Cuiabá. Feliz Natal!\`
          }
        ]
      }
    ]
  },
  {
    id: "saojoao",
    name: "São João Materiais de Construção",
    segment: "Materiais de Construção",
    description: "Tudo para sua obra e reforma em um só lugar, com variedade e atendimento especializado",
    color: "from-orange-500 to-orange-600",
    campaigns: [
      {
        id: "saojoao-001",
        date: "2026-02-01",
        title: "Verão - Reforma sem Atraso",
        description: "Aproveite o tempo bom para reformar",
        sendBefore: 7,
        offers: [
          "Tintas com 20% off",
          "Cimento com preço especial",
          "Frete grátis para Jataí"
        ],
        scripts: [
          {
            id: "saojoao-001-1",
            title: "ROTEIRO 1 — VERÃO (OBRA MAIS RÁPIDA)",
            content: \`Formato: Vídeo vertical
Apresentador: Vendedor da loja ou narrador em off
Objetivo: Atrair quem quer reformar no verão

[CENA 1 — Fachada da loja]
NARRADOR:
Quer aproveitar o verão pra reformar ou construir sem atraso na obra?

[CENA 2 — Entrada da loja, câmera mostrando corredores]
NARRADOR:
Na São João Materiais de Construção você encontra tudo em um só lugar pra sua obra andar mais rápido.

[CENA 3 — Close em cimento, areia, tintas, pisos, hidráulica]
NARRADOR:
Temos cimento, areia, tinta, hidráulica, elétrica e acabamento com variedade e pronta entrega.

[CENA 4 — Funcionário separando pedido ou carregando material]
NARRADOR:
Aqui você compra com agilidade e atendimento que resolve.

[CENA 5 — Fachada novamente]
NARRADOR (CTA):
Passe hoje na São João Materiais de Construção, Av. 31 de Maio, 524, Setor Epaminondas I, Jataí. Faça seu orçamento agora.\`
          },
          {
            id: "saojoao-001-2",
            title: "ROTEIRO 2 — VERÃO (CONFORTO DA CASA)",
            content: \`Formato: Vídeo vertical
Apresentador: Narrador em off
Objetivo: Reforma, pintura e melhorias no calor

[CENA 1 — Entrada da loja]
NARRADOR:
Esse é o melhor período do ano pra pintar, reformar e deixar sua casa mais confortável.

[CENA 2 — Setor de tintas, telhas, materiais externos]
NARRADOR:
Na São João Materiais de Construção você encontra materiais pra pintura, telhado, área externa e acabamento.

[CENA 3 — Funcionário mostrando produtos na prateleira]
NARRADOR:
Tudo com qualidade e preço justo pra sua reforma sair do papel.

[CENA 4 — Caixa ou atendimento no balcão]
NARRADOR:
Nossa equipe está pronta pra te ajudar a escolher o material certo.

[CENA 5 — Fachada]
NARRADOR (CTA):
Venha para a São João Materiais de Construção, Av. 31 de Maio, 524, Setor Epaminondas I, Jataí, e resolva sua obra hoje.\`
          }
        ]
      },
      {
        id: "saojoao-002",
        date: "2026-03-15",
        title: "Dia do Consumidor - Materiais com Desconto",
        description: "Ofertas especiais para sua obra",
        sendBefore: 7,
        offers: [
          "Desconto em materiais básicos",
          "Tintas com preço especial",
          "Pisos e revestimentos em promoção"
        ],
        scripts: [
          {
            id: "saojoao-002-1",
            title: "ROTEIRO 1 — DIA DO CONSUMIDOR",
            content: \`Formato: Vídeo vertical
Apresentador: Vendedor da loja
Objetivo: Captação direta

[CENA 1 — Dentro da loja, apresentador em pé]
APRESENTADOR:
Vai construir ou reformar e quer economizar sem abrir mão da qualidade?

[CENA 2 — Giro mostrando estoque]
APRESENTADOR:
Aqui na São João Materiais de Construção você encontra desde o básico da obra até o acabamento final.

[CENA 3 — Close em diferentes categorias de produtos]
APRESENTADOR:
Tudo em um só lugar, com variedade de marcas e atendimento especializado.

[CENA 4 — Funcionário atendendo cliente]
APRESENTADOR:
No Dia do Consumidor, ofertas especiais para você economizar na sua obra.

[CENA 5 — Fachada]
APRESENTADOR (CTA):
Passe agora na São João Materiais de Construção, Av. 31 de Maio, 524, Setor Epaminondas I, Jataí, e faça seu orçamento.\`
          }
        ]
      },
      {
        id: "saojoao-003",
        date: "2026-09-22",
        title: "Primavera - Prepare sua Casa",
        description: "Reformas antes das chuvas de verão",
        sendBefore: 7,
        offers: [
          "Telhas e calhas com desconto",
          "Impermeabilizantes em promoção",
          "Tintas para área externa"
        ],
        scripts: [
          {
            id: "saojoao-003-1",
            title: "ROTEIRO 1 — PRIMAVERA (ANTES DAS CHUVAS)",
            content: \`Formato: Vídeo vertical
Narrador em off
Objetivo: Urgência sazonal

[CENA 1 — Fachada da loja]
NARRADOR:
A primavera chegou e as chuvas de verão estão chegando. Sua casa está preparada?

[CENA 2 — Setor de telhas, calhas e impermeabilizantes]
NARRADOR:
Na São João Materiais de Construção você encontra tudo para proteger sua casa: telhas, calhas, impermeabilizantes e materiais para telhado.

[CENA 3 — Funcionário mostrando produtos]
NARRADOR:
Faça a manutenção agora e evite problemas com infiltração e goteiras.

[CENA 4 — Atendimento no balcão]
NARRADOR:
Nossa equipe te ajuda a escolher o material certo para sua necessidade.

[CENA 5 — Fachada]
NARRADOR (CTA):
Passe na São João Materiais de Construção, Av. 31 de Maio, 524, Setor Epaminondas I, Jataí.\`
          }
        ]
      },
      {
        id: "saojoao-004",
        date: "2026-11-27",
        title: "Black Friday - Materiais com Desconto",
        description: "Os melhores preços do ano em materiais",
        sendBefore: 30,
        offers: [
          "Até 30% off em materiais selecionados",
          "Cimento e argamassa com preço especial",
          "Tintas com desconto imperdível"
        ],
        scripts: [
          {
            id: "saojoao-004-1",
            title: "ROTEIRO 1 — BLACK FRIDAY SÃO JOÃO",
            content: \`Formato: Vídeo vertical
Narrador em off
Objetivo: Urgência + conversão

[CENA 1 — Fachada da loja com banner Black Friday]
NARRADOR:
Black Friday na São João Materiais de Construção! A melhor oportunidade do ano para sua obra.

[CENA 2 — Estoque cheio de materiais]
NARRADOR:
Cimento, tinta, pisos, hidráulica e elétrica com até 30% de desconto.

[CENA 3 — Funcionário atendendo cliente]
NARRADOR:
Aproveite para fazer estoque ou começar aquela reforma que você planejou.

[CENA 4 — Produtos sendo vendidos]
NARRADOR:
Mas corra! Os descontos são por tempo limitado.

[CENA 5 — Fachada]
NARRADOR (CTA):
São João Materiais de Construção. Av. 31 de Maio, 524, Setor Epaminondas I, Jataí. Venha aproveitar!\`
          }
        ]
      },
      {
        id: "saojoao-005",
        date: "2026-12-15",
        title: "Natal - Acabamento para as Festas",
        description: "Finalize sua obra antes do Natal",
        sendBefore: 7,
        offers: [
          "Pisos e revestimentos com desconto",
          "Tintas para acabamento",
          "Louças e metais em promoção"
        ],
        scripts: [
          {
            id: "saojoao-005-1",
            title: "ROTEIRO 1 — NATAL (ACABAMENTO)",
            content: \`Formato: Vídeo vertical
Narrador em off
Objetivo: Urgência + venda emocional

[CENA 1 — Setor de acabamentos]
NARRADOR:
O Natal está chegando. Sua casa vai estar pronta para receber a família?

[CENA 2 — Pisos, revestimentos, louças]
NARRADOR:
Na São João Materiais de Construção você encontra tudo para o acabamento: pisos, revestimentos, louças e metais.

[CENA 3 — Funcionário mostrando produtos]
NARRADOR:
Finalize sua obra a tempo de celebrar o Natal em uma casa nova.

[CENA 4 — Atendimento no balcão]
NARRADOR:
Nossa equipe te ajuda a escolher os melhores materiais.

[CENA 5 — Fachada]
NARRADOR (CTA):
São João Materiais de Construção. Av. 31 de Maio, 524, Setor Epaminondas I, Jataí. Natal é magia. Presenteie com uma reforma que muda vidas.\`
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
        date: "2026-03-15",
        title: "Dia do Consumidor",
        description: "Condições especiais para planejar seus móveis",
        sendBefore: 7,
        offers: [],
        scripts: []
      },
      {
        id: "appeal-002",
        date: "2026-05-10",
        title: "Dia das Mães",
        description: "Presenteie com ambientes planejados",
        sendBefore: 30,
        offers: [],
        scripts: []
      },
      {
        id: "appeal-003",
        date: "2026-08-09",
        title: "Dia dos Pais",
        description: "Escritório e espaços masculinos sob medida",
        sendBefore: 30,
        offers: [],
        scripts: []
      },
      {
        id: "appeal-004",
        date: "2026-11-27",
        title: "Black Friday",
        description: "Descontos especiais em projetos planejados",
        sendBefore: 30,
        offers: [],
        scripts: []
      },
      {
        id: "appeal-005",
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
        date: "2026-02-01",
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
        date: "2026-02-01",
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
  }
];
