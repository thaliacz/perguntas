const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você busca praticar exercícios físicos diariamente?",
        alternativas: [
            {
                texto: "Não, não pratico.",
                afirmacao: " não gosto e não pratico exercicios."
            },
            {
                texto: "Sim, eu pratico.",
                afirmacao: "Eu amo me exercitar e pratico exercicios."
            }
        ]
    },
    {
        enunciado: "Você se sente satisfeito com sua saúde física e mental?",
        alternativas: [
            {
                texto: "sim, me sinto ótimo",
                afirmacao: " me sinto muito feliz com a minha saude."
            },
            {
                texto: "Ainda não estou satisfeito, mas busco melhorar.",
                afirmacao: "com muito esforço, vou melhorar a minha saude."
            }
        ]
    },
    {
        enunciado: "Você se sente capaz de realizar suas atividades diárias com facilidade?",
        alternativas: [
            {
                texto: "Sim, acho tranquilo e tenho muita disposição",
                afirmacao: "pratico semanalmente e não vejo dificuldades."
            },
            {
                texto: "Tenho dificuldades por conta da minha saúde.",
                afirmacao: "sinto algumas dificuldades e problemas em realizar exercicios."
            }
        ]
    },
    {
        enunciado: "Você já tentou praticar exercícios físicos e desistiu?",
        alternativas: [
            {
                texto: "sim.",
                afirmacao: "sim, não consegui perseverar."
            },
            {
                texto: "Não.",
                afirmacao: "sigo firme, sem desistir."
            }
        ]
    },
    {
        enunciado: "Você se sente cansado após uma sessão de exercícios?",
        
        alternativas: [
            {
                texto: "Sim, me sinto cansado .",
                afirmacao: "Infelizmente sim, vejo dificuldades e me sinto cansado."
            },
            {
                texto: "Não.",
                afirmacao: "tenho muita disposição.",
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
    caixaPerguntas.textContent ="A prática regular de exercícios físicos é fundamental para a saúde e o bem-estar, com impactos positivos em diversas áreas da vida. Ela ajuda a prevenir doenças crônicas como diabetes, doenças cardíacas e hipertensão, além de melhorar o humor, reduzir o estresse e a ansiedade, e promover uma melhor qualidade de sono e aprendizado.",

    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "se cuide!";
}

mostraPergunta();