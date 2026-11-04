import { premios } from "../../data/premios";

export interface PerguntaFaq {
  id: string;
  pergunta: string;
  resposta: string;
}

export const perguntasFaq: PerguntaFaq[] = [
  {
    id: "sobre",
    pergunta: "O que é o SoulUp?",
    resposta: "O SoulUp é uma proposta de gamificação sustentável: registrar ações ecológicas, acumular pontos e participar de rankings. Os pontos e o ranking ficam salvos em banco de dados Oracle, por meio da nossa API Java. As recompensas ainda são uma proposta e não há prêmios reais.",
  },
  {
    id: "cadastro",
    pergunta: "Como faço para me cadastrar?",
    resposta: "Acesse a página Participantes e cadastre seu nome e e-mail. Nesta versão não há login nem senha: depois do cadastro, é só escolher seu nome no Dashboard.",
  },
  {
    id: "registro",
    pergunta: "Como registro minhas ações sustentáveis?",
    resposta: "No Dashboard, escolha seu nome e clique em uma ação em \"Registrar Ação\". O registro é salvo no banco de dados e seus pontos, atividades e posição no ranking são atualizados na hora. Se clicar sem querer, use \"Desfazer\".",
  },
  {
    id: "pontos",
    pergunta: "Como funciona o sistema de pontos?",
    resposta: "Cada ação vale de 5 a 20 pontos, como mostrado no Dashboard. A soma define seu nível: 20 pontos Aprendiz Sustentável, 40 Consciência Verde, 60 Eco Herói e 80 Guardião da Terra.",
  },
  {
    id: "subsidio",
    pergunta: "Como funciona o subsídio na conta de energia?",
    resposta: `A proposta prevê: ${premios.map((premio) => `${premio.posicao}º lugar R${premio.valor}`).join(", ")} de subsídio na conta de energia. São valores ilustrativos; não há pagamento, desconto real ou parceria operacional nesta demonstração.`,
  },
  {
    id: "participacao",
    pergunta: "Quem pode participar?",
    resposta: "Qualquer visitante pode explorar esta demonstração acadêmica, sem cadastro ou pagamento. A proposta é incentivar hábitos sustentáveis; não há inscrição em uma competição real.",
  },
  {
    id: "verificacao",
    pergunta: "As ações registradas são verificadas?",
    resposta: "Ainda não. Os registros ficam salvos no banco de dados, mas não há verificação por fotos ou localização. Cada ação só pode ser registrada uma vez por participante.",
  },
  {
    id: "perder-pontos",
    pergunta: "Posso perder pontos?",
    resposta: "Os pontos são guardados apenas no estado da página. Ao sair do Dashboard ou recarregá-lo, o perfil retorna aos dados iniciais. Não há saldo permanente nesta versão.",
  },
  {
    id: "ranking",
    pergunta: "Como funciona o ranking mensal?",
    resposta: "O ranking mostra participantes e pontuações fictícios, com filtros por categoria. A contagem indica o fim do mês, mas não executa premiação nem altera os dados automaticamente.",
  },
  {
    id: "gratuito",
    pergunta: "O SoulUp é gratuito?",
    resposta: "Sim! A demonstração do SoulUp é gratuita e não realiza cobranças. Nosso objetivo é apresentar uma proposta acessível de incentivo à sustentabilidade.",
  },
];
