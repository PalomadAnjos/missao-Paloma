const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultadol");
const caixaResultado = document.querySelector(".caixa-resultado");

const perguntas = [
    //primeiro.objetivo dessa perguntas 

   {enunciado: "qual a melhor maneira de combater o desmatamento?",
      alternativas:
      ["reflorestamento de àreas degradadas",
        "implementação de leis mais rigorosas"]
 },

 //segundo objeto da lista de perguntas

    enunciado: "perguntas2" ,
    alternativas:
    ["implementar programas de educação e formação social acessivel a todos",
      "politicas de redisribuição de renda e oportunidades"]
},

];

let atual = 0
let perguntaAtual;

function mostraPergunta (){//criando função para a pergunta
   perguntaAtual = pergunta[atual];//guardando a lista de perguntas dentro da variavel perguntaAtual
   caixaPerguntas.textContent = perguntaAtual.enunciado;//manipulando o conteudo do texto e do enunciado
   caixaAlternativas.textContent="";
   mostraAlternativas();
}
mostraAlternativas();//executando a função mostrar perguntas

function mostraAlternativas()//insere os botões alternativa
    for(const alternativa of perguntaAtual.alternativa) {
      const botaoAlternativa = document.createElement("button");//criando botão
      botaoAlternativa.textContent = alternativa.texto;//salvando a alternativa no botão
      botaoAlternativa.addEventListener('click , ()=>;//respostaSelecionada(alternativa));
         caixaAlternativas.appendChild(botaoAlternativa);//insere o botão na DIV do html
      }
   }

   mostraAlternativas();//executando a função mostrar alternativas.
         
      } while (condition);
    }

