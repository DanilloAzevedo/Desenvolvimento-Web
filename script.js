const string = [
   {
      "name":"Treinos de Musculação",
      "link":"https://ferronaveia.com.br/treinos-de-academia-completo-todos-os-niveis"
   },
   {
      "name":"Tipos de Dietas",
      "link":"https://www.tuasaude.com/dieta-para-emagrecer/"
   },
   {
      "name":"Aeróbicos",
      "link":"https://www.tuasaude.com/melhor-exercicio-para-emagrecer/"
   }
];

//const json = JSON.parse(string);
container_links = document.getElementById("container-links");

string.forEach((link, indice) => {

    var elem = "<div id='bt"+indice+"' class='buttonlist'>"+ link.name + "</div>";
    container_links.innerHTML =   container_links.innerHTML + elem;

     
});


const botoes = document.querySelectorAll(".buttonlist");
botoes.forEach((botao, indice) => {
    botao.style.cursor = "pointer";

    botao.addEventListener("click", function () {
        window.location.href = string[indice].link;
    });
});