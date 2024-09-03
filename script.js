const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual será o impacto da inteligência artificial na força de trabalho no futuro?",
        alternativas: [
            {
                texto: "Aumento da automação e substituição de empregos.",
                afirmacao: "Muitas tarefas repetitivas e perigosas serão realizadas por IA, resultando na redução de empregos manuais."
            },
            {
                texto: "Criação de novas oportunidades de trabalho e aumento da colaboração humano-IA",
                afirmacao: " Novos setores e funções surgirão, com ênfase em habilidades que complementam a IA."
            }

        ]
    },
    {
        enunciado: " Novos setores e funções surgirão, com ênfase em habilidades que complementam a IA.",
        alternativas: [
            {
                texto: " Diagnósticos mais rápidos e precisos",
                afirmacao: "Sistemas de IA poderão analisar grandes volumes de dados para identificar doenças com maior precisão e agilidade"
            },
            {
                texto: " Dependência crescente de tecnologias avançadas e possíveis questões éticas",
                afirmacao: "O uso de IA na medicina pode levantar preocupações sobre privacidade e a ética no tratamento de dados dos pacientes"
            }

        ]
    },
    {
        enunciado: "Qual será o papel da IA na educação no futuro?",
        alternativas: [
            {
                texto: "Personalização do aprendizado para cada aluno.",
                afirmacao: "Plataformas educacionais baseadas em IA poderão adaptar o conteúdo e o ritmo do ensino de acordo com as necessidades individuais dos alunos"
            },
            {
                texto: "Redução da interação humana e possíveis desafios na relação professor-aluno.",
                afirmacao: "A automação do ensino pode diminuir o contato direto entre alunos e professores, criando novos desafios para a dinâmica educacional."
            }

        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resumindo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();