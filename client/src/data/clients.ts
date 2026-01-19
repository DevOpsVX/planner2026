export interface Campaign {
  id: string;
  date: string;
  title: string;
  description: string;
  sendBefore: number;
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
    "id": "rdcpharma",
    "name": "RDC Pharma",
    "segment": "Farmácia de Manipulação",
    "description": "Farmácia especializada em fórmulas personalizadas, suplementação e cosméticos manipulados",
    "color": "from-red-500 to-red-600",
    "campaigns": [
      {
        "id": "rdcpharma-002",
        "date": "2026-03-08",
        "title": "Dia da Mulher - Beleza Personalizada",
        "description": "Skincare e cosméticos sob medida para você",
        "sendBefore": 7,
        "offers": ["Skincare personalizado com 25% off", "Análise de pele gratuita", "Brinde: amostra de sérum premium"],
        "scripts": [
          {
            "id": "rdcpharma-002-1",
            "title": "ROTEIRO 1 — SKINCARE PERSONALIZADO (DIA DA MULHER)",
            "content": "Formato: Vídeo vertical\nApresentador: Farmacêutico ou atendente\nObjetivo: Público beleza / skincare feminino\n\n[CENA 1 — Bancada com frascos cosméticos, séruns, cremes]\nAPRESENTADOR:\nVocê compra skincare pronto e sente que nunca fica perfeito pra sua pele?\n\n[CENA 2 — Farmacêutico manipulando cosmético]\nAPRESENTADOR:\nNa RDC Pharma você pode manipular cosméticos personalizados: séruns, cremes e fórmulas adaptadas ao seu tipo de pele e à sua rotina.\n\n[CENA 3 — Close em frasco sendo rotulado]\nAPRESENTADOR:\nVocê escolhe a proposta do produto e nossa equipe ajusta a composição, textura e concentração.\n\n[CENA 4 — Prateleira com cosméticos manipulados]\nAPRESENTADOR:\nÉ skincare sob medida, feito exclusivamente pra você. Neste Dia da Mulher, cuide da sua pele com quem entende de personalização.\n\n[CENA 5 — Fachada]\nAPRESENTADOR (CTA):\nVenha criar seu skincare personalizado na RDC Pharma. Rua José Haddad, 1233, Centro de Belford Roxo."
          },
          {
            "id": "rdcpharma-002-2",
            "title": "ROTEIRO 2 — EMPODERAMENTO FEMININO",
            "content": "Formato: Vídeo vertical\nNarrador em off\nObjetivo: Conexão emocional + conversão\n\n[CENA 1 — Close em mulher aplicando sérum]\nNARRADOR:\nMulher que se cuida é mulher que se ama.\n\n[CENA 2 — Laboratório de manipulação]\nNARRADOR:\nNa RDC Pharma, cada fórmula é criada pensando em você. Sua pele, sua rotina, suas necessidades.\n\n[CENA 3 — Farmacêutico explicando produto para cliente]\nNARRADOR:\nNão é skincare de prateleira. É cuidado personalizado, com orientação profissional.\n\n[CENA 4 — Produtos sendo embalados]\nNARRADOR:\nCelebre o Dia da Mulher com produtos que valorizam sua beleza única.\n\n[CENA 5 — Fachada da RDC Pharma]\nNARRADOR (CTA):\nRDC Pharma. Rua José Haddad, 1233, Centro de Belford Roxo. Agende sua análise de pele."
          }
        ]
      },
      {
        "id": "rdcpharma-003",
        "date": "2026-05-10",
        "title": "Dia das Mães - Cuidado e Carinho",
        "description": "Presenteie sua mãe com saúde e beleza personalizada",
        "sendBefore": 30,
        "offers": ["Kit Mãe Especial com 30% off", "Fórmulas anti-idade personalizadas", "Embalagem presenteável grátis"],
        "scripts": [
          {
            "id": "rdcpharma-003-1",
            "title": "ROTEIRO 1 — PRESENTE PARA MÃE (SKINCARE)",
            "content": "Formato: Vídeo vertical\nNarrador em off\nObjetivo: Venda emocional + presente\n\n[CENA 1 — Close em mãos de mãe e filha]\nNARRADOR:\nSua mãe merece um cuidado tão especial quanto ela é.\n\n[CENA 2 — Produtos de skincare sendo manipulados]\nNARRADOR:\nNa RDC Pharma você encontra skincare personalizado, fórmulas anti-idade e cremes manipulados especialmente para o tipo de pele dela.\n\n[CENA 3 — Kit sendo montado com laço]\nNARRADOR:\nNeste Dia das Mães, presenteie com saúde e beleza sob medida.\n\n[CENA 4 — Atendimento no balcão]\nNARRADOR:\nNossa equipe ajuda você a montar o kit perfeito.\n\n[CENA 5 — Fachada]\nNARRADOR (CTA):\nRDC Pharma. Rua José Haddad, 1233, Centro de Belford Roxo. Encomende agora."
          }
        ]
      },
      {
        "id": "rdcpharma-004",
        "date": "2026-06-21",
        "title": "Dia do Nutricionista - Suplementação Inteligente",
        "description": "Suplementos personalizados para sua saúde",
        "sendBefore": 7,
        "offers": ["Suplementos com 20% de desconto", "Consulta com farmacêutico grátis", "Kit iniciante com 3 produtos"],
        "scripts": [
          {
            "id": "rdcpharma-004-1",
            "title": "ROTEIRO 1 — SUPLEMENTAÇÃO PERSONALIZADA",
            "content": "Formato: Vídeo vertical\nApresentador: Farmacêutico\nObjetivo: Autoridade + conversão\n\n[CENA 1 — Farmacêutico em frente à bancada de suplementos]\nAPRESENTADOR:\nVocê toma suplemento genérico e não sente resultado?\n\n[CENA 2 — Close em matérias-primas e cápsulas]\nAPRESENTADOR:\nNa RDC Pharma manipulamos suplementos personalizados com dosagens ajustadas para o seu corpo e seus objetivos.\n\n[CENA 3 — Balança de precisão, frascos sendo preparados]\nAPRESENTADOR:\nCada fórmula é feita sob padrão técnico, com controle de qualidade e acompanhamento profissional.\n\n[CENA 4 — Atendimento no balcão]\nAPRESENTADOR:\nTudo começa com uma conversa para entender o que você realmente precisa.\n\n[CENA 5 — Fachada]\nAPRESENTADOR (CTA):\nVenha até a RDC Pharma. Rua José Haddad, 1233, Centro de Belford Roxo."
          }
        ]
      },
      {
        "id": "rdcpharma-005",
        "date": "2026-08-09",
        "title": "Dia dos Pais - Saúde Masculina",
        "description": "Cuide da saúde do seu pai com fórmulas personalizadas",
        "sendBefore": 30,
        "offers": ["Kit Pai Saudável com 25% off", "Suplementos para energia e vitalidade", "Consulta farmacêutica grátis"],
        "scripts": [
          {
            "id": "rdcpharma-005-1",
            "title": "ROTEIRO 1 — PRESENTE PARA PAI (SAÚDE)",
            "content": "Formato: Vídeo vertical\nNarrador em off\nObjetivo: Venda emocional + presente\n\n[CENA 1 — Imagem de pai e filho]\nNARRADOR:\nSeu pai sempre cuidou de você. Agora é sua vez de cuidar dele.\n\n[CENA 2 — Suplementos sendo manipulados]\nNARRADOR:\nNa RDC Pharma você encontra suplementos personalizados para energia, vitalidade e bem-estar masculino.\n\n[CENA 3 — Fórmula sendo preparada]\nNARRADOR:\nCada fórmula é ajustada para as necessidades dele, com dosagens corretas e qualidade farmacêutica.\n\n[CENA 4 — Kit sendo embalado]\nNARRADOR:\nNeste Dia dos Pais, dê o presente da saúde.\n\n[CENA 5 — Fachada]\nNARRADOR (CTA):\nRDC Pharma. Rua José Haddad, 1233, Centro de Belford Roxo."
          }
        ]
      },
      {
        "id": "rdcpharma-006",
        "date": "2026-09-22",
        "title": "Primavera - Renovação de Skincare",
        "description": "Prepare sua pele para a estação mais linda do ano",
        "sendBefore": 7,
        "offers": ["Kit Primavera com 30% off", "Análise de pele com desconto", "Fórmula seasonal personalizada"],
        "scripts": [
          {
            "id": "rdcpharma-006-1",
            "title": "ROTEIRO 1 — SKINCARE DE PRIMAVERA",
            "content": "Formato: Vídeo vertical\nApresentador: Farmacêutico ou atendente\nObjetivo: Renovação sazonal\n\n[CENA 1 — Bancada com produtos de skincare]\nAPRESENTADOR:\nA primavera chegou e sua pele precisa de uma renovação.\n\n[CENA 2 — Farmacêutico manipulando cosmético]\nAPRESENTADOR:\nNa RDC Pharma você pode criar seu skincare de primavera: séruns mais leves, hidratantes com vitamina C e proteção solar manipulada.\n\n[CENA 3 — Close em frasco sendo rotulado]\nAPRESENTADOR:\nCada produto é ajustado para o clima e para o seu tipo de pele.\n\n[CENA 4 — Prateleira com cosméticos]\nAPRESENTADOR:\nRenove sua rotina de cuidados com produtos feitos exclusivamente para você.\n\n[CENA 5 — Fachada]\nAPRESENTADOR (CTA):\nVenha até a RDC Pharma. Rua José Haddad, 1233, Centro de Belford Roxo."
          }
        ]
      },
      {
        "id": "rdcpharma-007",
        "date": "2026-11-27",
        "title": "Black Friday - Fórmulas com Desconto",
        "description": "Aproveite descontos especiais em manipulados",
        "sendBefore": 30,
        "offers": ["Até 40% off em fórmulas selecionadas", "Skincare com desconto progressivo", "Suplementos: leve 3 pague 2"],
        "scripts": [
          {
            "id": "rdcpharma-007-1",
            "title": "ROTEIRO 1 — BLACK FRIDAY RDC",
            "content": "Formato: Vídeo vertical\nNarrador em off\nObjetivo: Urgência + conversão\n\n[CENA 1 — Fachada da RDC Pharma com banner Black Friday]\nNARRADOR:\nBlack Friday na RDC Pharma! A melhor oportunidade do ano para cuidar da sua saúde e beleza.\n\n[CENA 2 — Close em produtos: suplementos, skincare, fórmulas]\nNARRADOR:\nSuplementos personalizados, skincare sob medida e fórmulas manipuladas com até 40% de desconto.\n\n[CENA 3 — Farmacêutico atendendo cliente]\nNARRADOR:\nAproveite para fazer aquela fórmula que você sempre quis ou renovar seu estoque de suplementos.\n\n[CENA 4 — Produtos sendo embalados]\nNARRADOR:\nMas corra! Os descontos são por tempo limitado.\n\n[CENA 5 — Fachada]\nNARRADOR (CTA):\nRDC Pharma. Rua José Haddad, 1233, Centro de Belford Roxo. Venha aproveitar!"
          }
        ]
      },
      {
        "id": "rdcpharma-008",
        "date": "2026-12-20",
        "title": "Natal - Presentes de Saúde",
        "description": "Presenteie com saúde e bem-estar neste Natal",
        "sendBefore": 30,
        "offers": ["Kits natalinos especiais", "Embalagem presenteável grátis", "Descontos em compras acima de R$200"],
        "scripts": [
          {
            "id": "rdcpharma-008-1",
            "title": "ROTEIRO 1 — NATAL RDC PHARMA",
            "content": "Formato: Vídeo vertical\nNarrador em off\nObjetivo: Venda de presentes\n\n[CENA 1 — Loja decorada para o Natal]\nNARRADOR:\nNeste Natal, presenteie quem você ama com saúde e cuidado personalizado.\n\n[CENA 2 — Kits de presente sendo montados]\nNARRADOR:\nNa RDC Pharma você encontra kits de skincare, suplementos e fórmulas manipuladas para presentear.\n\n[CENA 3 — Embalagens natalinas]\nNARRADOR:\nCada kit é montado com carinho e pode ser personalizado para quem vai receber.\n\n[CENA 4 — Atendimento no balcão]\nNARRADOR:\nNossa equipe ajuda você a escolher o presente perfeito.\n\n[CENA 5 — Fachada com decoração natalina]\nNARRADOR (CTA):\nRDC Pharma. Rua José Haddad, 1233, Centro de Belford Roxo. Feliz Natal!"
          }
        ]
      }
    ]
  },
  {
    "id": "squadclinic",
    "name": "Squad Clinic",
    "segment": "Clínica de Estética e Saúde",
    "description": "Clínica integrada com estética avançada, protocolos corporais e acompanhamento clínico",
    "color": "from-pink-500 to-pink-600",
    "campaigns": [
      {
        "id": "squadclinic-001",
        "date": "2026-03-08",
        "title": "Dia da Mulher - Autoestima e Cuidado",
        "description": "Protocolos estéticos para realçar sua beleza natural",
        "sendBefore": 7,
        "offers": ["Avaliação estética gratuita", "Protocolos faciais com 20% off", "Pacote Mulher Especial"],
        "scripts": [
          {
            "id": "squadclinic-001-1",
            "title": "ROTEIRO 1 — ESTÉTICA FACIAL (DIA DA MULHER)",
            "content": "Formato: Vídeo vertical\nApresentador: Profissional da clínica\nObjetivo: Captação para avaliação estética facial\n\n[CENA 1 — Apresentador na sala de atendimento]\nAPRESENTADOR:\nVocê quer dar um up na sua aparência, valorizar seus traços e cuidar da sua pele com segurança?\n\n[CENA 2 — Close em materiais organizados, luvas, bancada limpa]\nAPRESENTADOR:\nNa Squad Clinic trabalhamos com protocolos avançados de estética facial e harmonização, sempre começando por uma avaliação personalizada.\n\n[CENA 3 — Profissional ajustando cadeira, preparando equipamento]\nAPRESENTADOR:\nAqui o foco é naturalidade, equilíbrio e resultado profissional.\n\n[CENA 4 — Profissional atendendo paciente de costas ou desfocado]\nAPRESENTADOR:\nCada tratamento é adaptado para o seu perfil e objetivo. Neste Dia da Mulher, cuide de você.\n\n[CENA 5 — Fachada ou logo da clínica]\nAPRESENTADOR (CTA):\nAgende agora sua avaliação estética na Squad Clinic. Rua Banda, 630, Jardim do Mar, São Bernardo do Campo."
          }
        ]
      },
      {
        "id": "squadclinic-002",
        "date": "2026-05-10",
        "title": "Dia das Mães - Presente de Autocuidado",
        "description": "Presenteie sua mãe com cuidado e bem-estar",
        "sendBefore": 30,
        "offers": ["Voucher de avaliação para presente", "Protocolos faciais com desconto", "Pacote Mãe Especial"],
        "scripts": [
          {
            "id": "squadclinic-002-1",
            "title": "ROTEIRO 1 — PRESENTE PARA MÃE",
            "content": "Formato: Vídeo vertical\nNarrador em off\nObjetivo: Venda de voucher/presente\n\n[CENA 1 — Mãe e filha juntas]\nNARRADOR:\nSua mãe merece um momento só dela. Um momento de cuidado, relaxamento e autoestima.\n\n[CENA 2 — Ambiente da clínica, acolhedor]\nNARRADOR:\nNa Squad Clinic você pode presentear sua mãe com uma avaliação estética personalizada e protocolos de cuidado facial.\n\n[CENA 3 — Profissional preparando atendimento]\nNARRADOR:\nTudo é feito com foco em segurança, resultado e cuidado individual.\n\n[CENA 4 — Voucher sendo entregue]\nNARRADOR:\nNeste Dia das Mães, dê o presente do autocuidado.\n\n[CENA 5 — Fachada]\nNARRADOR (CTA):\nSquad Clinic. Rua Banda, 630, Jardim do Mar, São Bernardo do Campo."
          }
        ]
      },
      {
        "id": "squadclinic-003",
        "date": "2026-08-09",
        "title": "Dia dos Pais - Cuidado Masculino",
        "description": "Estética e bem-estar também é para homens",
        "sendBefore": 30,
        "offers": ["Avaliação masculina gratuita", "Protocolos para rejuvenescimento", "Pacote Pai Moderno"],
        "scripts": [
          {
            "id": "squadclinic-003-1",
            "title": "ROTEIRO 1 — ESTÉTICA MASCULINA",
            "content": "Formato: Vídeo vertical\nApresentador: Profissional da clínica\nObjetivo: Captação público masculino\n\n[CENA 1 — Apresentador na clínica]\nAPRESENTADOR:\nCuidar da aparência não é só coisa de mulher. Homens também merecem se sentir bem consigo mesmos.\n\n[CENA 2 — Ambiente da clínica]\nAPRESENTADOR:\nNa Squad Clinic oferecemos protocolos estéticos masculinos: rejuvenescimento facial, tratamento para olheiras e cuidados com a pele.\n\n[CENA 3 — Profissional preparando atendimento]\nAPRESENTADOR:\nTudo com discrição, segurança e resultados naturais.\n\n[CENA 4 — Atendimento discreto]\nAPRESENTADOR:\nNeste Dia dos Pais, presenteie seu pai com autocuidado.\n\n[CENA 5 — Fachada]\nAPRESENTADOR (CTA):\nSquad Clinic. Rua Banda, 630, Jardim do Mar, São Bernardo do Campo."
          }
        ]
      },
      {
        "id": "squadclinic-004",
        "date": "2026-09-01",
        "title": "Retomada da Rotina - Protocolos Corporais",
        "description": "Volte à rotina com foco no seu corpo",
        "sendBefore": 7,
        "offers": ["Avaliação corporal gratuita", "Protocolos de definição com desconto", "Pacote Retomada"],
        "scripts": [
          {
            "id": "squadclinic-004-1",
            "title": "ROTEIRO 1 — PROTOCOLOS CORPORAIS",
            "content": "Formato: Vídeo vertical\nNarrador em off\nObjetivo: Leads para avaliação corporal\n\n[CENA 1 — Paciente modelo sendo avaliada]\nNARRADOR:\nSe você quer melhorar o contorno corporal e cuidar do seu corpo com acompanhamento profissional, o primeiro passo é a avaliação certa.\n\n[CENA 2 — Profissionais durante atendimento]\nNARRADOR:\nNa Squad Clinic utilizamos protocolos corporais modernos aliados à tecnologia e métodos seguros.\n\n[CENA 3 — Profissional explicando algo ao paciente]\nNARRADOR:\nCada plano é montado de forma personalizada, respeitando seu corpo e seus objetivos.\n\n[CENA 4 — Recepção da clínica]\nNARRADOR:\nNossa agenda está aberta para novas avaliações.\n\n[CENA 5 — Fachada]\nNARRADOR (CTA):\nFale agora com a Squad Clinic e agende sua avaliação corporal. Rua Banda, 630, Jardim do Mar, São Bernardo do Campo."
          }
        ]
      },
      {
        "id": "squadclinic-005",
        "date": "2026-11-27",
        "title": "Black Friday Estética",
        "description": "Descontos especiais em protocolos estéticos",
        "sendBefore": 30,
        "offers": ["Até 30% off em protocolos", "Pacotes com preço especial", "Avaliação + procedimento com desconto"],
        "scripts": [
          {
            "id": "squadclinic-005-1",
            "title": "ROTEIRO 1 — BLACK FRIDAY SQUAD",
            "content": "Formato: Vídeo vertical\nNarrador em off\nObjetivo: Urgência + conversão\n\n[CENA 1 — Fachada da clínica]\nNARRADOR:\nBlack Friday na Squad Clinic! A melhor oportunidade do ano para cuidar da sua estética.\n\n[CENA 2 — Ambiente da clínica, equipamentos]\nNARRADOR:\nProtocolos faciais, corporais e harmonização com até 30% de desconto.\n\n[CENA 3 — Profissional atendendo]\nNARRADOR:\nAproveite para fazer aquele procedimento que você sempre quis, com segurança e qualidade.\n\n[CENA 4 — Recepção]\nNARRADOR:\nMas corra! As vagas são limitadas.\n\n[CENA 5 — Fachada]\nNARRADOR (CTA):\nSquad Clinic. Rua Banda, 630, Jardim do Mar, São Bernardo do Campo. Agende agora!"
          }
        ]
      },
      {
        "id": "squadclinic-006",
        "date": "2026-12-15",
        "title": "Festas de Fim de Ano - Brilhe nas Festas",
        "description": "Prepare-se para as festas com protocolos express",
        "sendBefore": 7,
        "offers": ["Protocolos express para festas", "Pacote Glow de Fim de Ano", "Agendamento prioritário"],
        "scripts": [
          {
            "id": "squadclinic-006-1",
            "title": "ROTEIRO 1 — GLOW DE FIM DE ANO",
            "content": "Formato: Vídeo vertical\nApresentador: Profissional da clínica\nObjetivo: Captação para protocolos express\n\n[CENA 1 — Apresentador na clínica]\nAPRESENTADOR:\nAs festas de fim de ano estão chegando. Você quer estar radiante para o Natal e Réveillon?\n\n[CENA 2 — Equipamentos e produtos]\nAPRESENTADOR:\nNa Squad Clinic temos protocolos express para deixar sua pele iluminada e seu rosto harmonizado para as festas.\n\n[CENA 3 — Profissional preparando atendimento]\nAPRESENTADOR:\nResultados rápidos, seguros e naturais.\n\n[CENA 4 — Ambiente festivo]\nAPRESENTADOR:\nAgende agora e garanta sua vaga antes das festas.\n\n[CENA 5 — Fachada]\nAPRESENTADOR (CTA):\nSquad Clinic. Rua Banda, 630, Jardim do Mar, São Bernardo do Campo."
          }
        ]
      }
    ]
  },
  {
    "id": "viamed",
    "name": "Via Med",
    "segment": "Distribuidora Hospitalar B2B",
    "description": "Fornecimento de materiais clínicos e hospitalares para clínicas, consultórios e hospitais",
    "color": "from-blue-500 to-blue-600",
    "campaigns": [
      {
        "id": "viamed-001",
        "date": "2026-02-01",
        "title": "Reposição de Início de Ano",
        "description": "Comece o ano com estoque completo",
        "sendBefore": 7,
        "offers": ["Desconto em pedidos acima de R$1.000", "Frete grátis para primeira compra do ano", "Condições especiais para contratos anuais"],
        "scripts": [
          {
            "id": "viamed-001-1",
            "title": "ROTEIRO 1 — REPOSIÇÃO ANUAL",
            "content": "Formato: Vídeo vertical\nApresentador: Funcionário da empresa ou narrador em off\nObjetivo: Posicionamento + captação de pedidos\n\n[CENA 1 — Câmera mostrando prateleiras com produtos médicos]\nNARRADOR:\nSe você é profissional da saúde, sabe como é difícil encontrar um fornecedor que tenha variedade, qualidade e entrega rápida no mesmo lugar.\n\n[CENA 2 — Funcionário organizando caixas ou separando pedidos]\nNARRADOR:\nA ViaMed é especializada no fornecimento de materiais clínicos e hospitalares para clínicas, consultórios, hospitais e atendimento domiciliar.\n\n[CENA 3 — Close em produtos: luvas, insumos, equipamentos]\nNARRADOR:\nAqui você encontra desde insumos básicos até equipamentos e materiais especializados para o seu dia a dia.\n\n[CENA 4 — Equipe conferindo pedidos ou embalando]\nNARRADOR:\nTrabalhamos com estoque organizado, marcas confiáveis e atendimento ágil. Comece o ano com estoque completo.\n\n[CENA 5 — Logo da ViaMed]\nNARRADOR (CTA):\nFale agora com a ViaMed e solicite seu orçamento. Tenha seu material com rapidez e segurança."
          }
        ]
      },
      {
        "id": "viamed-002",
        "date": "2026-04-07",
        "title": "Dia Mundial da Saúde",
        "description": "Parceria para cuidar de quem cuida",
        "sendBefore": 7,
        "offers": ["Condições especiais para clínicas", "Desconto em materiais de prevenção", "Consultoria de estoque grátis"],
        "scripts": [
          {
            "id": "viamed-002-1",
            "title": "ROTEIRO 1 — DIA MUNDIAL DA SAÚDE",
            "content": "Formato: Vídeo vertical\nNarrador em off\nObjetivo: Posicionamento institucional + conversão B2B\n\n[CENA 1 — Estoque organizado]\nNARRADOR:\nNo Dia Mundial da Saúde, a ViaMed celebra quem cuida de vidas todos os dias.\n\n[CENA 2 — Funcionário separando pedidos]\nNARRADOR:\nSomos parceiros de clínicas, consultórios e hospitais no fornecimento de materiais médicos de qualidade.\n\n[CENA 3 — Close em diferentes produtos]\nNARRADOR:\nVariedade, procedência e entrega rápida para você nunca parar.\n\n[CENA 4 — Equipe conferindo pedido]\nNARRADOR:\nNeste mês, condições especiais para novos parceiros.\n\n[CENA 5 — Logo da ViaMed]\nNARRADOR (CTA):\nEntre em contato com a ViaMed e garanta o abastecimento da sua clínica."
          }
        ]
      },
      {
        "id": "viamed-003",
        "date": "2026-07-01",
        "title": "Renovação de Contratos - Segundo Semestre",
        "description": "Renove sua parceria com condições especiais",
        "sendBefore": 30,
        "offers": ["Desconto progressivo em contratos", "Prioridade na entrega", "Consultoria de estoque inclusa"],
        "scripts": [
          {
            "id": "viamed-003-1",
            "title": "ROTEIRO 1 — RENOVAÇÃO DE CONTRATOS",
            "content": "Formato: Vídeo vertical\nNarrador em off\nObjetivo: Fidelização + renovação\n\n[CENA 1 — Prateleiras organizadas]\nNARRADOR:\nO segundo semestre chegou. É hora de garantir o abastecimento da sua clínica para os próximos meses.\n\n[CENA 2 — Funcionário separando pedidos]\nNARRADOR:\nA ViaMed oferece condições especiais para renovação de contratos: desconto progressivo, prioridade na entrega e consultoria de estoque.\n\n[CENA 3 — Close em produtos diversos]\nNARRADOR:\nMantenha seu estoque sempre completo com um fornecedor de confiança.\n\n[CENA 4 — Equipe trabalhando]\nNARRADOR:\nFale com nosso time e renove sua parceria.\n\n[CENA 5 — Logo da ViaMed]\nNARRADOR (CTA):\nViaMed. Seu parceiro em materiais médicos."
          }
        ]
      },
      {
        "id": "viamed-004",
        "date": "2026-10-01",
        "title": "Outubro - Mês da Saúde",
        "description": "Materiais para campanhas de prevenção",
        "sendBefore": 7,
        "offers": ["Kits para campanhas de prevenção", "Materiais de coleta com desconto", "Condições especiais para laboratórios"],
        "scripts": [
          {
            "id": "viamed-004-1",
            "title": "ROTEIRO 1 — MÊS DA SAÚDE",
            "content": "Formato: Vídeo vertical\nApresentador: Funcionário da ViaMed\nObjetivo: Conversão B2B para campanhas\n\n[CENA 1 — Bancada com produtos para coleta e exames]\nAPRESENTADOR:\nOutubro é mês de conscientização e prevenção. Sua clínica está preparada para as campanhas de saúde?\n\n[CENA 2 — Close em materiais de coleta]\nAPRESENTADOR:\nNa ViaMed você encontra materiais para exames, coleta e prevenção com qualidade e pronta entrega.\n\n[CENA 3 — Funcionário embalando produto]\nAPRESENTADOR:\nTudo com procedência, variedade e atendimento ágil.\n\n[CENA 4 — Logo da empresa]\nAPRESENTADOR (CTA):\nChame a ViaMed agora e prepare sua clínica para o mês da saúde."
          }
        ]
      },
      {
        "id": "viamed-005",
        "date": "2026-11-27",
        "title": "Black Friday B2B",
        "description": "Descontos especiais para estoque",
        "sendBefore": 30,
        "offers": ["Até 25% off em pedidos grandes", "Frete grátis acima de R$2.000", "Condições especiais para novos clientes"],
        "scripts": [
          {
            "id": "viamed-005-1",
            "title": "ROTEIRO 1 — BLACK FRIDAY VIAMED",
            "content": "Formato: Vídeo vertical\nNarrador em off\nObjetivo: Urgência + conversão B2B\n\n[CENA 1 — Estoque cheio]\nNARRADOR:\nBlack Friday na ViaMed! A melhor oportunidade do ano para abastecer sua clínica.\n\n[CENA 2 — Funcionário separando pedidos rapidamente]\nNARRADOR:\nMateriais médicos, descartáveis e equipamentos com até 25% de desconto.\n\n[CENA 3 — Close em caixas prontas para envio]\nNARRADOR:\nAproveite para fazer estoque e garantir o abastecimento até o fim do ano.\n\n[CENA 4 — Logo da ViaMed]\nNARRADOR (CTA):\nEntre em contato agora com a ViaMed. Condições por tempo limitado."
          }
        ]
      }
    ]
  },
  {
    "id": "duzzi",
    "name": "Duzzi Móveis e Decoração",
    "segment": "Loja de Móveis e Decoração",
    "description": "Há mais de 34 anos levando qualidade e bom gosto para os lares mato-grossenses",
    "color": "from-amber-500 to-amber-600",
    "campaigns": [
      {
        "id": "duzzi-001",
        "date": "2026-03-15",
        "title": "Dia do Consumidor - Renove sua Casa",
        "description": "Ofertas especiais para transformar seus ambientes",
        "sendBefore": 7,
        "offers": ["Até 30% off em sofás selecionados", "Mesas de jantar com desconto", "Frete grátis para Cuiabá"],
        "scripts": [
          {
            "id": "duzzi-001-1",
            "title": "ROTEIRO 1 — DIA DO CONSUMIDOR",
            "content": "Formato: Vídeo vertical\nApresentador: Narrador em off ou vendedor da loja\nObjetivo: Posicionamento + atração para loja\n\n[CENA 1 — Fachada da loja]\nNARRADOR:\nSua casa merece mais conforto, mais estilo e mais personalidade.\n\n[CENA 2 — Entrada da loja, mostrando showroom]\nNARRADOR:\nNa Duzzi Móveis e Decorações você encontra tudo para transformar seus ambientes com beleza e funcionalidade.\n\n[CENA 3 — Takes de sofás, mesas, cadeiras, poltronas e decoração]\nNARRADOR:\nSão mais de 34 anos levando qualidade e bom gosto para os lares mato-grossenses, com móveis e decorações para todos os estilos.\n\n[CENA 4 — Vendedor organizando produtos ou atendendo]\nNARRADOR:\nNo Dia do Consumidor, ofertas especiais para você renovar sua casa.\n\n[CENA 5 — Fachada novamente]\nNARRADOR (CTA):\nVisite a Duzzi Móveis e Decorações na Avenida Miguel Sutil, 2265, bairro Areão, em Cuiabá."
          }
        ]
      },
      {
        "id": "duzzi-002",
        "date": "2026-05-10",
        "title": "Dia das Mães - Conforto para Ela",
        "description": "Presenteie sua mãe com móveis e decoração",
        "sendBefore": 30,
        "offers": ["Poltronas com 25% off", "Conjuntos de sala com desconto", "Decoração com preço especial"],
        "scripts": [
          {
            "id": "duzzi-002-1",
            "title": "ROTEIRO 1 — PRESENTE PARA MÃE",
            "content": "Formato: Vídeo vertical\nNarrador em off\nObjetivo: Venda emocional\n\n[CENA 1 — Poltrona confortável no showroom]\nNARRADOR:\nSua mãe merece um cantinho só dela. Um lugar de conforto, descanso e aconchego.\n\n[CENA 2 — Mostrando poltronas e sofás]\nNARRADOR:\nNa Duzzi Móveis e Decorações você encontra poltronas, sofás e móveis que vão transformar o dia a dia dela.\n\n[CENA 3 — Detalhes de acabamento]\nNARRADOR:\nQualidade, conforto e design para durar por muitos anos.\n\n[CENA 4 — Vendedor atendendo]\nNARRADOR:\nNeste Dia das Mães, presenteie com carinho e bom gosto.\n\n[CENA 5 — Fachada]\nNARRADOR (CTA):\nVenha conhecer a Duzzi Móveis e Decorações na Avenida Miguel Sutil, 2265, Areão, Cuiabá."
          }
        ]
      },
      {
        "id": "duzzi-003",
        "date": "2026-08-09",
        "title": "Dia dos Pais - Conforto Masculino",
        "description": "Móveis para o cantinho do pai",
        "sendBefore": 30,
        "offers": ["Sofás reclináveis com desconto", "Poltronas de home office", "Racks e painéis com preço especial"],
        "scripts": [
          {
            "id": "duzzi-003-1",
            "title": "ROTEIRO 1 — PRESENTE PARA PAI",
            "content": "Formato: Vídeo vertical\nNarrador em off\nObjetivo: Venda emocional\n\n[CENA 1 — Sofá reclinável no showroom]\nNARRADOR:\nSeu pai merece um lugar de conforto para descansar depois de um dia de trabalho.\n\n[CENA 2 — Mostrando sofás reclináveis e poltronas]\nNARRADOR:\nNa Duzzi Móveis e Decorações você encontra sofás reclináveis, poltronas e móveis para o cantinho dele.\n\n[CENA 3 — Detalhes de acabamento]\nNARRADOR:\nQualidade, resistência e conforto de verdade.\n\n[CENA 4 — Vendedor atendendo]\nNARRADOR:\nNeste Dia dos Pais, presenteie com carinho.\n\n[CENA 5 — Fachada]\nNARRADOR (CTA):\nVenha conhecer a Duzzi Móveis e Decorações na Avenida Miguel Sutil, 2265, Areão, Cuiabá."
          }
        ]
      },
      {
        "id": "duzzi-004",
        "date": "2026-11-27",
        "title": "Black Friday - Móveis com Desconto",
        "description": "Os melhores preços do ano em móveis",
        "sendBefore": 30,
        "offers": ["Até 40% off em móveis selecionados", "Sofás com desconto imperdível", "Mesas de jantar com preço especial"],
        "scripts": [
          {
            "id": "duzzi-004-1",
            "title": "ROTEIRO 1 — BLACK FRIDAY DUZZI",
            "content": "Formato: Vídeo vertical\nNarrador em off\nObjetivo: Urgência + conversão\n\n[CENA 1 — Fachada da loja com banner Black Friday]\nNARRADOR:\nBlack Friday na Duzzi Móveis e Decorações! A melhor oportunidade do ano para renovar sua casa.\n\n[CENA 2 — Showroom com diversos móveis]\nNARRADOR:\nSofás, mesas, poltronas e decoração com até 40% de desconto.\n\n[CENA 3 — Vendedor atendendo cliente]\nNARRADOR:\nAproveite para comprar aquele móvel que você sempre quis, com qualidade e preço especial.\n\n[CENA 4 — Produtos sendo vendidos]\nNARRADOR:\nMas corra! Os descontos são por tempo limitado.\n\n[CENA 5 — Fachada]\nNARRADOR (CTA):\nDuzzi Móveis e Decorações. Avenida Miguel Sutil, 2265, Areão, Cuiabá. Venha aproveitar!"
          }
        ]
      },
      {
        "id": "duzzi-005",
        "date": "2026-12-20",
        "title": "Natal - Casa Nova para as Festas",
        "description": "Renove sua casa para receber a família",
        "sendBefore": 30,
        "offers": ["Mesas de jantar para ceia", "Sofás para receber visitas", "Decoração natalina"],
        "scripts": [
          {
            "id": "duzzi-005-1",
            "title": "ROTEIRO 1 — NATAL DUZZI",
            "content": "Formato: Vídeo vertical\nNarrador em off\nObjetivo: Venda emocional\n\n[CENA 1 — Mesa de jantar montada no showroom]\nNARRADOR:\nMomentos em família começam em um ambiente bem planejado.\n\n[CENA 2 — Takes de mesas, cadeiras e conjuntos completos]\nNARRADOR:\nNa Duzzi Móveis e Decorações você encontra mesas de jantar, cadeiras e conjuntos completos para deixar sua casa pronta para a ceia de Natal.\n\n[CENA 3 — Detalhes de acabamento]\nNARRADOR:\nQualidade, resistência e design para o dia a dia e para momentos especiais.\n\n[CENA 4 — Vendedor organizando o espaço]\nNARRADOR:\nNossa equipe te ajuda a escolher o conjunto ideal para o seu espaço.\n\n[CENA 5 — Fachada com decoração natalina]\nNARRADOR (CTA):\nVenha conhecer a Duzzi Móveis e Decorações na Avenida Miguel Sutil, 2265, Areão, Cuiabá. Feliz Natal!"
          }
        ]
      }
    ]
  },
  {
    "id": "saojoao",
    "name": "São João Materiais de Construção",
    "segment": "Materiais de Construção",
    "description": "Tudo para sua obra e reforma em um só lugar, com variedade e atendimento especializado",
    "color": "from-orange-500 to-orange-600",
    "campaigns": [
      {
        "id": "saojoao-001",
        "date": "2026-02-01",
        "title": "Verão - Reforma sem Atraso",
        "description": "Aproveite o tempo bom para reformar",
        "sendBefore": 7,
        "offers": ["Tintas com 20% off", "Cimento com preço especial", "Frete grátis para Jataí"],
        "scripts": [
          {
            "id": "saojoao-001-1",
            "title": "ROTEIRO 1 — VERÃO (OBRA MAIS RÁPIDA)",
            "content": "Formato: Vídeo vertical\nApresentador: Vendedor da loja ou narrador em off\nObjetivo: Atrair quem quer reformar no verão\n\n[CENA 1 — Fachada da loja]\nNARRADOR:\nQuer aproveitar o verão pra reformar ou construir sem atraso na obra?\n\n[CENA 2 — Entrada da loja, câmera mostrando corredores]\nNARRADOR:\nNa São João Materiais de Construção você encontra tudo em um só lugar pra sua obra andar mais rápido.\n\n[CENA 3 — Close em cimento, areia, tintas, pisos, hidráulica]\nNARRADOR:\nTemos cimento, areia, tinta, hidráulica, elétrica e acabamento com variedade e pronta entrega.\n\n[CENA 4 — Funcionário separando pedido ou carregando material]\nNARRADOR:\nAqui você compra com agilidade e atendimento que resolve.\n\n[CENA 5 — Fachada novamente]\nNARRADOR (CTA):\nPasse hoje na São João Materiais de Construção, Av. 31 de Maio, 524, Setor Epaminondas I, Jataí. Faça seu orçamento agora."
          }
        ]
      },
      {
        "id": "saojoao-002",
        "date": "2026-03-15",
        "title": "Dia do Consumidor - Materiais com Desconto",
        "description": "Ofertas especiais para sua obra",
        "sendBefore": 7,
        "offers": ["Desconto em materiais básicos", "Tintas com preço especial", "Pisos e revestimentos em promoção"],
        "scripts": [
          {
            "id": "saojoao-002-1",
            "title": "ROTEIRO 1 — DIA DO CONSUMIDOR",
            "content": "Formato: Vídeo vertical\nApresentador: Vendedor da loja\nObjetivo: Captação direta\n\n[CENA 1 — Dentro da loja, apresentador em pé]\nAPRESENTADOR:\nVai construir ou reformar e quer economizar sem abrir mão da qualidade?\n\n[CENA 2 — Giro mostrando estoque]\nAPRESENTADOR:\nAqui na São João Materiais de Construção você encontra desde o básico da obra até o acabamento final.\n\n[CENA 3 — Close em diferentes categorias de produtos]\nAPRESENTADOR:\nTudo em um só lugar, com variedade de marcas e atendimento especializado.\n\n[CENA 4 — Funcionário atendendo cliente]\nAPRESENTADOR:\nNo Dia do Consumidor, ofertas especiais para você economizar na sua obra.\n\n[CENA 5 — Fachada]\nAPRESENTADOR (CTA):\nPasse agora na São João Materiais de Construção, Av. 31 de Maio, 524, Setor Epaminondas I, Jataí, e faça seu orçamento."
          }
        ]
      },
      {
        "id": "saojoao-003",
        "date": "2026-09-22",
        "title": "Primavera - Prepare sua Casa",
        "description": "Reformas antes das chuvas de verão",
        "sendBefore": 7,
        "offers": ["Telhas e calhas com desconto", "Impermeabilizantes em promoção", "Tintas para área externa"],
        "scripts": [
          {
            "id": "saojoao-003-1",
            "title": "ROTEIRO 1 — PRIMAVERA (ANTES DAS CHUVAS)",
            "content": "Formato: Vídeo vertical\nNarrador em off\nObjetivo: Urgência sazonal\n\n[CENA 1 — Fachada da loja]\nNARRADOR:\nA primavera chegou e as chuvas de verão estão chegando. Sua casa está preparada?\n\n[CENA 2 — Setor de telhas, calhas e impermeabilizantes]\nNARRADOR:\nNa São João Materiais de Construção você encontra tudo para proteger sua casa: telhas, calhas, impermeabilizantes e materiais para telhado.\n\n[CENA 3 — Funcionário mostrando produtos]\nNARRADOR:\nFaça a manutenção agora e evite problemas com infiltração e goteiras.\n\n[CENA 4 — Atendimento no balcão]\nNARRADOR:\nNossa equipe te ajuda a escolher o material certo para sua necessidade.\n\n[CENA 5 — Fachada]\nNARRADOR (CTA):\nPasse na São João Materiais de Construção, Av. 31 de Maio, 524, Setor Epaminondas I, Jataí."
          }
        ]
      },
      {
        "id": "saojoao-004",
        "date": "2026-11-27",
        "title": "Black Friday - Materiais com Desconto",
        "description": "Os melhores preços do ano em materiais",
        "sendBefore": 30,
        "offers": ["Até 30% off em materiais selecionados", "Cimento e argamassa com preço especial", "Tintas com desconto imperdível"],
        "scripts": [
          {
            "id": "saojoao-004-1",
            "title": "ROTEIRO 1 — BLACK FRIDAY SÃO JOÃO",
            "content": "Formato: Vídeo vertical\nNarrador em off\nObjetivo: Urgência + conversão\n\n[CENA 1 — Fachada da loja com banner Black Friday]\nNARRADOR:\nBlack Friday na São João Materiais de Construção! A melhor oportunidade do ano para sua obra.\n\n[CENA 2 — Estoque cheio de materiais]\nNARRADOR:\nCimento, tinta, pisos, hidráulica e elétrica com até 30% de desconto.\n\n[CENA 3 — Funcionário atendendo cliente]\nNARRADOR:\nAproveite para fazer estoque ou começar aquela reforma que você planejou.\n\n[CENA 4 — Produtos sendo vendidos]\nNARRADOR:\nMas corra! Os descontos são por tempo limitado.\n\n[CENA 5 — Fachada]\nNARRADOR (CTA):\nSão João Materiais de Construção. Av. 31 de Maio, 524, Setor Epaminondas I, Jataí. Venha aproveitar!"
          }
        ]
      },
      {
        "id": "saojoao-005",
        "date": "2026-12-15",
        "title": "Natal - Acabamento para as Festas",
        "description": "Finalize sua obra antes do Natal",
        "sendBefore": 7,
        "offers": ["Pisos e revestimentos com desconto", "Tintas para acabamento", "Louças e metais em promoção"],
        "scripts": [
          {
            "id": "saojoao-005-1",
            "title": "ROTEIRO 1 — NATAL (ACABAMENTO)",
            "content": "Formato: Vídeo vertical\nNarrador em off\nObjetivo: Urgência + venda emocional\n\n[CENA 1 — Setor de acabamentos]\nNARRADOR:\nO Natal está chegando. Sua casa vai estar pronta para receber a família?\n\n[CENA 2 — Pisos, revestimentos, louças]\nNARRADOR:\nNa São João Materiais de Construção você encontra tudo para o acabamento: pisos, revestimentos, louças e metais.\n\n[CENA 3 — Funcionário mostrando produtos]\nNARRADOR:\nFinalize sua obra a tempo de celebrar o Natal em uma casa nova.\n\n[CENA 4 — Atendimento no balcão]\nNARRADOR:\nNossa equipe te ajuda a escolher os melhores materiais.\n\n[CENA 5 — Fachada]\nNARRADOR (CTA):\nSão João Materiais de Construção. Av. 31 de Maio, 524, Setor Epaminondas I, Jataí. Feliz Natal!"
          }
        ]
      }
    ]
  },
  {
    "id": "appeal",
    "name": "Appeal Móveis",
    "segment": "Móveis Planejados",
    "description": "Especializada em móveis planejados sob medida para todos os ambientes",
    "color": "from-amber-600 to-amber-700",
    "campaigns": [
      {"id": "appeal-001", "date": "2026-03-15", "title": "Dia do Consumidor", "description": "Condições especiais para planejar seus móveis", "sendBefore": 7, "offers": [], "scripts": []},
      {"id": "appeal-002", "date": "2026-05-10", "title": "Dia das Mães", "description": "Presenteie com ambientes planejados", "sendBefore": 30, "offers": [], "scripts": []},
      {"id": "appeal-003", "date": "2026-08-09", "title": "Dia dos Pais", "description": "Escritório e espaços masculinos sob medida", "sendBefore": 30, "offers": [], "scripts": []},
      {"id": "appeal-004", "date": "2026-11-27", "title": "Black Friday", "description": "Descontos especiais em projetos planejados", "sendBefore": 30, "offers": [], "scripts": []},
      {"id": "appeal-005", "date": "2026-12-25", "title": "Natal", "description": "Renove sua casa para as festas", "sendBefore": 30, "offers": [], "scripts": []}
    ]
  },
  {
    "id": "trajeton",
    "name": "Trajeton Magazine",
    "segment": "Varejo Multisegmento",
    "description": "Loja de departamentos com roupas, material escolar, itens de casa e muito mais",
    "color": "from-blue-600 to-blue-700",
    "campaigns": [
      {"id": "trajeton-001", "date": "2026-02-01", "title": "Volta às Aulas", "description": "Tudo para o ano letivo: material escolar, uniformes e mochilas", "sendBefore": 7, "offers": [], "scripts": []},
      {"id": "trajeton-002", "date": "2026-03-15", "title": "Dia do Consumidor", "description": "Ofertas em todos os departamentos", "sendBefore": 7, "offers": [], "scripts": []},
      {"id": "trajeton-003", "date": "2026-03-20", "title": "Outono - Coleção Nova", "description": "Roupas e acessórios para a nova estação", "sendBefore": 7, "offers": [], "scripts": []},
      {"id": "trajeton-004", "date": "2026-05-10", "title": "Dia das Mães", "description": "Presentes especiais em todos os departamentos", "sendBefore": 30, "offers": [], "scripts": []},
      {"id": "trajeton-005", "date": "2026-06-12", "title": "Dia dos Namorados", "description": "Presentes românticos e moda para o casal", "sendBefore": 7, "offers": [], "scripts": []},
      {"id": "trajeton-006", "date": "2026-06-24", "title": "Festa Junina", "description": "Roupas típicas e decoração junina", "sendBefore": 7, "offers": [], "scripts": []},
      {"id": "trajeton-007", "date": "2026-08-09", "title": "Dia dos Pais", "description": "Presentes masculinos: roupas, ferramentas e acessórios", "sendBefore": 30, "offers": [], "scripts": []},
      {"id": "trajeton-008", "date": "2026-09-22", "title": "Primavera - Coleção Nova", "description": "Renove seu guarda-roupa e sua casa", "sendBefore": 7, "offers": [], "scripts": []},
      {"id": "trajeton-009", "date": "2026-10-12", "title": "Dia das Crianças", "description": "Brinquedos, roupas e presentes infantis", "sendBefore": 7, "offers": [], "scripts": []},
      {"id": "trajeton-010", "date": "2026-11-27", "title": "Black Friday", "description": "Descontos em todos os departamentos", "sendBefore": 30, "offers": [], "scripts": []},
      {"id": "trajeton-011", "date": "2026-12-25", "title": "Natal", "description": "Presentes para toda a família", "sendBefore": 30, "offers": [], "scripts": []}
    ]
  },
  {
    "id": "oralsin",
    "name": "Oral Sin",
    "segment": "Clínica Odontológica",
    "description": "Clínica odontológica completa com tratamentos estéticos e preventivos",
    "color": "from-teal-600 to-teal-700",
    "campaigns": [
      {"id": "oralsin-001", "date": "2026-02-01", "title": "Ano Novo - Sorriso Novo", "description": "Comece 2026 com um sorriso renovado", "sendBefore": 7, "offers": [], "scripts": []},
      {"id": "oralsin-002", "date": "2026-03-08", "title": "Dia da Mulher - Estética Dental", "description": "Clareamento e estética para o sorriso feminino", "sendBefore": 7, "offers": [], "scripts": []},
      {"id": "oralsin-003", "date": "2026-05-10", "title": "Dia das Mães", "description": "Cuide do sorriso de quem você ama", "sendBefore": 30, "offers": [], "scripts": []},
      {"id": "oralsin-004", "date": "2026-08-09", "title": "Dia dos Pais", "description": "Saúde bucal para toda a família", "sendBefore": 30, "offers": [], "scripts": []},
      {"id": "oralsin-005", "date": "2026-10-12", "title": "Dia das Crianças - Odontopediatria", "description": "Cuidados especiais com o sorriso dos pequenos", "sendBefore": 7, "offers": [], "scripts": []},
      {"id": "oralsin-006", "date": "2026-11-27", "title": "Black Odonto", "description": "Descontos em tratamentos estéticos", "sendBefore": 30, "offers": [], "scripts": []},
      {"id": "oralsin-007", "date": "2026-12-15", "title": "Festas de Fim de Ano", "description": "Sorria com confiança nas festas", "sendBefore": 7, "offers": [], "scripts": []}
    ]
  }
];
