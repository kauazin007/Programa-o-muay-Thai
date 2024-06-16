const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual o país de origem do Muay Thai?",
        alternativas: [
            {
                texto: "India",
                afirmacao: " "
            },
            {
                texto: "tailandia",
                afirmacao: "Tambem chamado de Thai boxe ou Boxe tailandes"
            }
        ]
    },
    {
        enunciado: "Quem criou o Muay Thai",
        alternativas: [
            {
                texto: "Nai khanom Tom",
                afirmacao: "O Muay Thai utiliza socos, cotoveladas, joelhadas, chutes e tecnicas de esquiva e protecao."
            },
            {
                texto: "Gichin Funakoshi",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual ano o Muay Thai foi criado ",
        alternativas: [
            {
                texto: "250 A.c",
                afirmacao: "O Muay Thai surge como defesa de guerra "
            },
            {
                texto: "250 D.c",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual o significado da palavra Muay Thai",
        alternativas: [
            {
                texto: "Arte livre",
                afirmacao: "desenvolvida pelos tailandeses para sua protecao e para defesa do seu territorio contra os inimigos."
            },
            {
                texto: "Luta com as maos",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual o nome do famoso chute na coxa no Muay Thai ",
        alternativas: [
            {
                texto: "Teep.",
                afirmacao: ""
            },
            {
                texto: "Low kick",
                afirmacao: "Frases que os lutadores levam junto de sua tragetoria no mundo das artes marciais é : se for pra desistir, desista de ser fraco!! "
            }
        ]
    },
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
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "MUAY THAI...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();