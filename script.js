const string = `[
    {
        "link":"https://ferronaveia.com.br/treinos-de-academia-completo-todos-os-niveis"
    },
    {
        "link":"https://www.tuasaude.com/dieta-para-emagrecer/"
    },
    {
        "link":"https://www.tuasaude.com/melhor-exercicio-para-emagrecer/"
    }
]`;

const json = JSON.parse(string);

const botoes = document.querySelectorAll(".buttonlist");

botoes.forEach((botao, indice) => {
    botao.style.cursor = "pointer";

    botao.addEventListener("click", function () {
        window.location.href = json[indice].link;
    });
});